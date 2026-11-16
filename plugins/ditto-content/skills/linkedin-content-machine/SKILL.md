---
name: linkedin-content-machine
description: Planifier les posts LinkedIn de la semaine de Ditto et rédiger chacun d'eux (page entreprise et comptes de l'équipe), du calendrier Notion à une fiche validée et prête à poster. À utiliser pour « prépare les posts LinkedIn de la semaine », « rédige le post de <prénom> », « TLA », « post cas client », « relais LinkedIn », ou quand un freelance reprend la rédaction LinkedIn.
---

# Machine à contenu LinkedIn

Un seul point d'entrée pour tout ce qui touche à LinkedIn chez Ditto : quoi poster cette semaine, qui relaie, comment chaque post est écrit, contrôlé et rangé. Il est écrit pour qu'un collègue ou un freelance puisse l'utiliser sans autre contexte.

## Principes

1. **La matière avant les mots.** Un post s'écrit à partir d'une matière réelle (un appel, une correction de coach, une étude publiée, un résultat client). S'il n'y a pas de matière, le premier livrable est une demande de matière, jamais un texte.
2. **La fiche du calendrier est la source de vérité.** Le texte, le visuel, le premier commentaire et les tags vivent dans la page Notion du post. On corrige la page, pas seulement le message.
3. **Une idée, une vraie valeur.** Chaque post doit passer le test de valeur de `references/qa-checklist.md`.
4. **Les humains décident.** Le responsable valide le hook, le corps et le CTA avant toute rédaction, puis le texte final. Rien n'est publié, envoyé ni programmé sans sa validation explicite (Flora pour la page Ditto et pour les posts d'Ugo).

## Entrées

- Source de données du calendrier Notion `collection://1a626365-f697-804e-846a-000b945581df` (« Marketing & Partnerships Calendar »). Piège : `Category`, `Speaker` et `Campaign` sont des chaînes JSON (des listes), donc on filtre avec `LIKE '%LinkedIn post%'`, jamais avec `IN (...)`.
- Matière source : appels Modjo, retours des coachs, études et guides publiés (`ditto-landing-page/content/`), HubSpot.
- Chiffres vérifiés uniquement, tirés de la page Notion « Chiffres Ditto & marché » (jamais recopiés ici).

## Déroulé

1. **Planifier la semaine** (`references/weekly-planning.md`) : lister les sujets à pousser, choisir les relais, vérifier les règles de cadence, créer ou corriger les entrées du calendrier.
2. **Choisir le message** dans la base Notion « Angles Ditto » (la liste des angles validés, tous canaux) et le type de post avec son playbook dans `references/post-types/` (TLA, cas client, étude ou lead magnet, annonce produit, 10 actus, vidéo, événement). Un nouvel angle utilisé est ajouté à la base.
3. **Rassembler la matière** et noter ses sources dans la fiche. S'il en manque : demander, ne pas inventer.
4. **Porte de validation avant d'écrire.** Envoyer au responsable trois décisions et attendre son accord, sans texte complet avant :
   - le **hook** : 2 ou 3 options, chacune compréhensible par quelqu'un qui ne connaît rien au sujet, jamais deux chiffres identiques côte à côte ;
   - le **corps** : ce que le lecteur emporte concrètement et pourra refaire (« Comment … → 3 conseils pour … »), avec la source de chaque point. Pas la rédaction finale ;
   - le **CTA** : l'action concrète demandée après l'enregistrement (comparer, tester, auditer, passer à l'action). Enregistrer le post est toujours le CTA implicite.
5. **Rédiger** avec le skill `brand-copywriting` (plugin `ditto-brand`), qui fait foi pour la voix.
6. **Contrôler** avec `references/qa-checklist.md`. Corriger, puis revérifier.
7. **Ranger** dans la fiche Notion (`references/notion-fiche-contract.md`) : texte, visuel, premier commentaire avec un lien court, tags, statut.
8. **Passer la main au responsable** pour validation. Les rappels aux collègues ne partent qu'après son « ok ».
9. **Après la publication** : statut, décision ads (sponsorisé ou non après 48 à 72 h), apprentissages dans `references/learnings.md`.

## Fichiers de référence

Les angles eux-mêmes vivent hors du skill, dans la base Notion « Angles Ditto », parce qu'ils nourrissent tous les canaux et pas seulement LinkedIn. Le skill y renvoie et ne les recopie pas.

- `references/weekly-planning.md` : relais, cadence, règles anti-doublon.
- `references/post-types/tla.md` : posts Thought Leader Ads (texte seul, à enregistrer).
- `references/qa-checklist.md` : test de valeur et contrôles avant livraison.
- `references/notion-fiche-contract.md` : ce que doit contenir chaque page du calendrier.
- `references/learnings.md` : ce qui a marché, ce qui a été coupé, et pourquoi.
- `references/open-questions.md` : contradictions et décisions encore à prendre.
- `GUIDE.md` : comment on travaille avec les skills (GitHub ou Claude, rangement, bibliothèque, partage externe) et journal de construction de ce pack.

## Skills liés

`short-links` (liens du premier commentaire), `linkedin-ads-routine`, `ditto-cas-client` (matière des cas clients), `csr-news-weekly` (10 actus RSE).
