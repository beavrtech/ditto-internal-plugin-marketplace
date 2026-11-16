---
name: csr-news-weekly
description: >
  Workflow hebdomadaire de la revue « 10 actus RSE » de Ditto : relecture et correction des coquilles dans la présentation Google Slides, sélection de 4 actus, post LinkedIn publié par Ugo Le Borgne et Pierre Masse (reposté par Ditto), mise en ligne de l'article FR + EN sur trustditto.com, puis newsletter LinkedIn « 10 actus RSE » (couverture, légende, titre, phrase d'accompagnement). Déclencher dès que Flora partage la présentation ou le PDF « 10 actus RSE » de la semaine, ou demande à préparer la revue, ses posts ou sa newsletter.
---

# Skill : CSR News Weekly

## Entrée
- Une présentation Google Slides « 10 actus RSE » (ou son PDF) couvrant une semaine : couverture avec les dates, 10 actus (titre, 3 puces avec passages en gras, titre de l'article source, média), slide de fin.
- Lire la présentation avec le connecteur Google Slides (l'export texte de Drive peut revenir vide). Suivre la skill google-workspace pour toute modification.

---

## Workflow

### Étape 1 — Relecture des coquilles (toujours en premier, avant toute autre chose)
Lire les 10 actus **et la couverture**, puis signaler dans un tableau : fautes, incohérences factuelles (dates, chiffres, titre ≠ puces, date hors de la semaine couverte), formulations trompeuses, temps verbaux incohérents, gras coupé au milieu d'un mot ou d'un nombre, apostrophes droites. Vérifier aussi le rendu (miniature) : certaines coquilles n'apparaissent qu'à l'affichage (ex. « octobre026 » sur la couverture). Si rien : le dire explicitement.

Une fois validé par Flora, **corriger directement dans la présentation** (`replaceAllText` limité à la slide, ou suppression/insertion par position si un caractère invisible empêche la correspondance), puis vérifier les miniatures. Ne jamais changer un fait sans la source : en cas de doute (ex. montant total ou annuel), demander l'article à Flora et s'en tenir à sa formulation.

### Étape 2 — Sélection des 4 actus pour le post
Proposer 4 actus aux angles différents (financement, réglementation, chaîne d'approvisionnement, social…), en privilégiant ce qui parle à l'audience Ditto (EcoVadis, CDP, CSRD, données fournisseurs). Pas deux actus « bonne nouvelle » si une seule suffit. Attendre la validation.

### Étape 3 — Post de la revue (publié par Ugo Le Borgne et Pierre Masse)
Depuis le 9 octobre 2026, le post est publié par **Ugo Le Borgne et Pierre Masse**, avec le template ci-dessous. Le texte parle de « l'équipe Ditto », jamais à la première personne. Aucun lien dans le corps, aucun tiret cadrant. Le compte Ditto **reposte**.

Une actu Ditto (étude, événement) se traite comme les autres : le fait d'abord, la source en fin de phrase (« …, selon le baromètre IA × RSE 2026 de Ditto »), jamais « Notre baromètre montre… ».

### Étape 4 — Article sur trustditto.com (FR + EN), publié AVANT LinkedIn
- Fichier `content/articles/news/<slug>.mdx` (repo `ditto-landing-page`), même format que les revues précédentes : `body_format: "html"`, `<h2>` par actu, puces « • » séparées par `<br>`, source en `<p><strong>Source : Média – « Titre »</strong></p>`, EN puis FR.
- Contenu FR = la présentation corrigée, mot pour mot. EN = traduction fidèle ; en anglais, « sustainability » plutôt que « CSR » dans le corps (le nom de la série « CSR News » reste).
- Métadonnées : `name_fr` « Actualités RSE du <date> : <3 thèmes> », `name_en` « CSR News – <Month D, YYYY>: <3 Themes> », slugs sur le même modèle, `date`/`updated` = date de la revue, `author: ugo-le-borgne`, `published: true`, descriptions ≤ 160 caractères, textes alternatifs de bannière FR + EN.
- Bannière : une illustration existante de `public/resources/uploads/` qu'aucune revue récente n'utilise.
- Liens internes : 2 à 4, sur la première mention d'un référentiel ou d'un sujet couvert par Ditto (EcoVadis, CDP, score EcoVadis, bilan carbone…), dans les deux langues. Vérifier que chaque cible répond 200 **et** pointer vers l'URL finale (les articles de blog repris dans une collection redirigent vers `/fr/collection/<référentiel>/<slug>` : lier directement cette URL).
- Contrôles : 10 intertitres par langue, typo FR (« », espace avant %), « une centaine » pour l'étude IA (jamais 105), pas de tiret cadrant, jamais de virgule devant « et ».
- Branche depuis `origin/main` (worktree séparé), PR, attendre le build Vercel, fusionner, attendre le déploiement, puis vérifier **le contenu** des pages FR et EN en ligne (titre de page, une actu, les liens) : une URL inexistante répond aussi 200 sur ce site.
- Une modification ultérieure qui n'ajoute que des liens ne change pas `updated`.

### Étape 5 — Newsletter LinkedIn « 10 actus RSE » (page Ditto)
- **Corps** : copier-coller depuis la page FR de l'article en ligne (du premier titre à la dernière source) ; intertitres, sources en gras et liens suivent automatiquement. Pas de fichier HTML, pas de chapô, pas de liste de titres à la place.
- **Couverture** 1920 × 1080 au design system **Marketing DS** : fond tan #EFF2E5, logo SVG Ditto navy 291 px en haut à gauche, en bas à gauche l'eyebrow « LA REVUE DE DITTO · NEWSLETTER » (Inter 700, capitales espacées), le titre « 10 actus RSE » (Hedvig Letters Serif Regular), la description et la date (« Du 5 au 9 octobre 2026 ») ; la forme « play » (`ditto-shapes-13`, dossier Brand Assets/Shape Motif) surdimensionnée et coupée par les bords droit et bas. Seule la date change chaque semaine.
- **Légende (texte alternatif) de l'image** : « Couverture de la newsletter « 10 actus RSE » de Ditto, du <dates> ».
- **Titre de l'édition** : « 10 actus RSE du <date> : <3 thèmes> » (mêmes thèmes que l'article).
- **Phrase d'accompagnement** du post de la page Ditto, modèle validé :
  « Cette semaine dans notre revue RSE : [actu 1], [actu 2] et [actu 3].

  Abonnez-vous pour recevoir les 10 actus RSE chaque semaine. »
  Les 3 actus sont trois phrases complètes (sujet + verbe), jamais un mélange de phrases et de groupes nominaux. Hashtags possibles sur les référentiels (#EcoVadis, #CDP). Sans lien ni tiret cadrant.
- Description de la newsletter (fixe) : « Chaque semaine, 10 actus RSE à ne pas rater, sélectionnées par nos équipes. » Logo de la newsletter : version Marketing DS (« 10 actus RSE » + forme « play »).

Ordre de publication : article sur le site → post d'Ugo et de Pierre Masse (reposté par Ditto) → édition de la newsletter.

### Étape 6 — Planning marketing Notion (à chaque publication)
Ajouter au « Marketing & Partnerships Calendar » (data source `collection://1a626365-f697-804e-846a-000b945581df`, vue LK) **une carte par publication** : le post de la revue et l'édition de la newsletter. Suivre le modèle des autres cartes de post :
- Deliverable « Post 10 actus RSE du <date> (Ugo + Pierre Masse) » / « Newsletter LinkedIn « 10 actus RSE » #<n> : édition du <date> (Ditto) » ; icône LinkedIn des autres cartes.
- Category « LinkedIn post » (aussi pour la newsletter LinkedIn, pour qu'elle apparaisse dans la vue LK) ; Date = jour de publication ; Status « Terminé » une fois publié ; Speaker (Ugo, Pierre Masse / Ditto) ; Campaign « 10 actus RSE » ; Main objective « Notoriety/Positioning » ; Langue Français ; Type Marketing ; GTM selon les référentiels cités ; Owner = Flora.
- Description : semaine couverte, qui publie et qui reposte, les 4 actus.
- Contenu de la page : « Contenu du post » (visuel, CTA, 1er commentaire s'il y en a un, lien vers l'article) puis le texte publié ; pour la newsletter : titre, visuel, texte alternatif, lien vers l'article et texte d'accompagnement.

Livrer les textes à coller dans des blocs de texte brut (les citations de la conversation perdent les retours à la ligne et les apostrophes au collage).

---

## Template du post de la revue (Ugo et Pierre Masse)

```
Vous n’avez qu’une minute ? Voici 10 actus RSE à ne pas rater cette semaine !

Chaque semaine, l'équipe Ditto sélectionne les infos clés pour vous aider à suivre l’actualité RSE sans y passer des heures.

[ÉMOJI] [ACTU 1]

[ÉMOJI] [ACTU 2]

[ÉMOJI] [ACTU 3]

[ÉMOJI] [ACTU 4]

---

Ce format vous plaît ?

🔁 Repostez pour faire circuler l’info
➕ Abonnez-vous pour suivre l'actualité RSE
```

**Notes :**
- « 10 actus » dans l'intro est voulu : c'est le total de la revue, même si 4 seulement sont listées.
- Une ligne vide entre chaque actu ; une ligne `---` avant « Ce format vous plaît ? ».
- Hashtags uniquement sur les référentiels cités (#EcoVadis, #CDP), à leur première mention ; pas de bloc de hashtags en fin de post.
- Premier commentaire optionnel ; s'il y en a un : « La revue complète : <URL de l'article avec UTM> ».

## Émojis par type d'actu
- ⚖️ Contentieux / juridique
- 🌍 Politique internationale / gouvernance
- 🌾 Agriculture / biodiversité
- ♻️ Recyclage / économie circulaire
- 🍵 Alimentation / santé / chaîne d'approvisionnement
- ⚡ Énergie / sobriété
- 💧 Innovation / financement / transition énergétique
- 🏛️ Réglementation / institutions
- 🌱 Sol / agriculture durable
- 🚫 Interdiction / conformité

---

## Règles éditoriales

### Titres des actus
- Un titre doit se comprendre seul. Pas de formule qui appelle la question « à quoi ? » ou « par rapport à quoi ? » (ex. « l'impact environnemental devient le premier frein » → frein à quoi ?).
- Pour une actu Ditto (étude, événement), le titre porte un message tiré des données ou de l'événement, aligné avec ce que Ditto veut défendre, et reste proche du communiqué, comme l'écrirait un journaliste.
- Pour une actu Ditto, la source cite le titre de la page publiée (étude, article), pas celui du communiqué.

### Langue
- Jamais de virgule devant « et ».
- Éléments coordonnés de même nature.
- « professionnels RSE », jamais « pros RSE ».

### Rigueur factuelle
- Ne jamais généraliser sur le comportement des entreprises sans source.
- Toute affirmation vérifiable doit l'être ; sinon, couper.

---

## Historique des éditions

| Semaine | 4 actus du post | Notes |
|---|---|---|
| 13-21 mai 2026 | PFAS/justice, G7/climat, pesticides alimentaires, Mantle8/hydrogène | Ancien circuit (post Ditto + post Ugo) |
| 28 sept-2 oct 2026 | EmpCo, baromètre IA × RSE, Bpifrance, achats et souveraineté | Première newsletter LinkedIn ; post publié par Ugo |
| 5-9 oct 2026 | HSBC/prêts EcoVadis-CDP, Scope 3 EcoVadis-Kearney, Cour des comptes 161 Md€, loi VSS | Post publié par Ugo et Pierre Masse (nouveau template) |
