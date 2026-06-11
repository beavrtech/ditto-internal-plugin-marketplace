/* Slides cards for the Design System tab — master/detail.
 *
 * Left: a scrollable rail of EVERY layout in the deck (small live thumbnails).
 * Right: a large, readable preview of the selected slide. Clicking a thumbnail
 * navigates the big preview via the deck's goTo() API (no reload).
 *
 * Thumbnails and the preview are the real deck file in scaled iframes, so
 * layouts stay 100% faithful; the deck's nav rail + footer overlay are
 * suppressed.
 *
 * Usage (see slides-*.html):
 *   <div class="sg" data-deck="../slides/covers.html"></div>
 *   <script src="slides-gallery.js"></script>
 */
(function () {
  function hidePresenterChrome(win) {
    try { win.postMessage({ __omelette_presenting: true }, '*'); } catch (e) {}
  }

  async function build(host) {
    const deck = host.getAttribute('data-deck');
    if (!deck) return;

    let labels = [];
    try {
      const html = await (await fetch(deck)).text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      labels = [...doc.querySelectorAll('deck-stage > section')]
        .map(s => (s.getAttribute('data-label') || '').trim());
    } catch (e) {
      host.innerHTML = '<p class="sg-err">Could not load ' + deck + '</p>';
      return;
    }
    if (!labels.length) return;

    // ---- left rail ----
    const rail = document.createElement('div');
    rail.className = 'sg-rail';
    rail.setAttribute('role', 'tablist');

    // ---- right preview ----
    const stage = document.createElement('div');
    stage.className = 'sg-stage';
    const cap = document.createElement('div');
    cap.className = 'sg-cap';
    const capNum = document.createElement('span'); capNum.className = 'sg-num';
    const capLab = document.createElement('span'); capLab.className = 'sg-lab';
    cap.append(capNum, capLab);
    const frame = document.createElement('div');
    frame.className = 'sg-frame';
    const big = document.createElement('iframe');
    big.setAttribute('aria-label', 'Selected slide');
    big.scrolling = 'no';
    big.src = deck + '?_snthumb=1#1';
    big.addEventListener('load', () => hidePresenterChrome(big.contentWindow));
    frame.appendChild(big);
    stage.append(cap, frame);

    const thumbs = [];
    function select(i) {
      thumbs.forEach((t, k) => t.setAttribute('aria-selected', k === i ? 'true' : 'false'));
      capNum.textContent = String(i + 1).padStart(2, '0');
      capLab.textContent = labels[i] || ('Slide ' + (i + 1));
      // Navigate the big preview in place via the deck API; reload if needed.
      let done = false;
      try {
        const ds = big.contentDocument && big.contentDocument.querySelector('deck-stage');
        if (ds && typeof ds.goTo === 'function') { ds.goTo(i); hidePresenterChrome(big.contentWindow); done = true; }
      } catch (e) {}
      if (!done) { big.src = deck + '?_snthumb=1#' + (i + 1); }
      // keep the active thumbnail visible in the rail (no scrollIntoView)
      const btn = thumbs[i];
      if (btn) {
        const top = btn.offsetTop - rail.offsetTop;
        const bot = top + btn.offsetHeight;
        if (top < rail.scrollTop) rail.scrollTop = top - 8;
        else if (bot > rail.scrollTop + rail.clientHeight) rail.scrollTop = bot - rail.clientHeight + 8;
      }
    }

    labels.forEach((label, i) => {
      const n = i + 1;
      const btn = document.createElement('button');
      btn.className = 'sg-thumb';
      btn.type = 'button';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');

      const tf = document.createElement('div');
      tf.className = 'sg-tframe';
      const tifr = document.createElement('iframe');
      tifr.scrolling = 'no';
      tifr.setAttribute('tabindex', '-1');
      tifr.setAttribute('aria-hidden', 'true');
      tifr.dataset.src = deck + '?_snthumb=1#' + n;
      tifr.addEventListener('load', () => hidePresenterChrome(tifr.contentWindow));
      tf.appendChild(tifr);

      const tl = document.createElement('div');
      tl.className = 'sg-tlabel';
      tl.innerHTML = '<span class="sg-tnum">' + String(n).padStart(2, '0') + '</span>' +
                     '<span>' + (label || 'Slide ' + n) + '</span>';

      btn.append(tf, tl);
      btn.addEventListener('click', () => select(i));
      rail.appendChild(btn);
      thumbs.push(btn);
    });

    host.append(rail, stage);

    // initial caption + staggered thumbnail loads (big preview loads immediately)
    capNum.textContent = '01';
    capLab.textContent = labels[0] || 'Slide 1';
    const tIframes = rail.querySelectorAll('.sg-tframe iframe');
    tIframes.forEach((ifr, i) => {
      setTimeout(() => { if (ifr.dataset.src) { ifr.src = ifr.dataset.src; delete ifr.dataset.src; } }, 250 + i * 160);
    });
  }

  function init() { document.querySelectorAll('.sg[data-deck]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
