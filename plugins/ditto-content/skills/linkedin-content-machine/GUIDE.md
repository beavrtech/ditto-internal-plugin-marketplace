# Travailler avec les skills : guide et journal de construction

Cette page suit la construction de la machine à contenu LinkedIn et répond à quatre questions sur la façon de travailler avec l'IA et avec l'équipe. Elle est mise à jour à chaque étape.

## 1. Pourquoi mettre des skills sur GitHub et pas seulement dans Claude ?

Un skill est un dossier avec un `SKILL.md` et ses fichiers de référence. L'endroit où il vit décide de qui peut l'utiliser et de la façon dont il évolue.

| | Skill gardé dans un compte Claude | Skill dans un repo GitHub |
|---|---|---|
| Qui l'utilise | Le propriétaire du compte (ou toute l'organisation si un admin le déploie) | Toute personne ayant accès au repo : collègue, freelance, autre outil |
| Historique | Aucun : personne ne voit ce qui a changé ni pourquoi | Chaque changement est un commit avec un auteur et une date |
| Relecture | Modifié sur place | Modifié par pull request : une règle est relue avant d'être appliquée |
| Sauvegarde | Liée au compte | Survit à un départ, à un nouvel ordinateur, à un nouvel outil |
| Règles à côté des données | Séparées | À côté du code et du contenu sur lesquels elles s'appuient |

Règle de base : GitHub est la **source de vérité**, Claude est **l'endroit où l'on s'en sert**. Un skill qui n'existe que dans un compte Claude, ou une règle qui n'existe que dans la mémoire d'une personne, disparaît quand cette personne part. Les règles que Flora a données en conversation (une trentaine sur LinkedIn) étaient dans une mémoire personnelle et dans une tâche planifiée : ce pack les regroupe à un endroit que tout le monde peut lire et corriger.

## 2. Comment ranger les skills

**Dans GitHub (repo `marketing`) :** un dossier par workflow dans `skills/<nom>/SKILL.md`, avec des fichiers de détail à côté.

```
skills/linkedin-content-machine/
  SKILL.md              court : quand l'utiliser, les étapes, où sont les détails
  GUIDE.md              cette page
  references/           un fichier par sujet (voix, contrôle qualité, chiffres, planification)
    post-types/         un playbook par type de post
```

Principes : `SKILL.md` reste court et renvoie aux références (l'agent n'ouvre que ce dont il a besoin) ; un skill par tâche récurrente ; une seule source par règle, jamais la même règle copiée dans deux skills.

**Dans Claude**, il y a deux endroits, pour des publics différents :

- **Claude Code** (terminal, onglet Code du bureau) : lit les skills du dossier `.claude/skills/` du projet (partagés via le repo) ou du dossier personnel. Adapté aux personnes qui travaillent dans un repo.
- **Claude bureau / Cowork** (le chat sans code) : les skills s'installent dans le compte (ou sont fournis à toute l'organisation par un admin) sous forme de paquets. Adapté aux personnes qui ne touchent pas à GitHub.

Un même dossier peut servir aux deux : le repo est la copie de référence, et une copie est installée à l'autre endroit quand quelqu'un en a besoin. Règle : **on modifie uniquement le repo, jamais la copie installée.**

## 3. Comment construire une bibliothèque claire et partageable

1. **Un point d'entrée par domaine.** `linkedin-content-machine` est l'unique porte pour LinkedIn ; le reste sont des modules derrière.
2. **Un nom qui dit le métier** (`short-links`, `competitor-battle-card`), et une description d'une phrase qui commence par quand l'utiliser.
3. **De petits fichiers, un sujet chacun.** Un freelance lit le fichier de voix, pas un document de 600 lignes.
4. **Un propriétaire par skill** et un fichier `learnings.md` où l'on ajoute chaque résultat (un post qui a marché, une règle qui a changé) avec sa date.
5. **Une liste de questions ouvertes** plutôt que des contradictions silencieuses (`references/open-questions.md`).
6. **Aucun secret et aucune donnée personnelle dans le dossier** : pas de jetons, pas de noms de clients non publics, pas de contacts privés. Seulement les noms des variables d'environnement.
7. **Un test avec quelqu'un de nouveau** : une personne ou un agent sans aucun contexte rédige un post avec le seul pack. Ses erreurs montrent ce qui manque.
8. **Un index** (`skills/README.md`) qui liste chaque skill en une ligne.

## 4. Comment partager des skills avec quelqu'un d'extérieur à l'équipe

Du plus léger au plus contrôlé :

1. **Accès en lecture au repo GitHub ou à un seul dossier** (le meilleur choix pour un freelance régulier : il a toujours la dernière version, et ses modifications arrivent en pull requests).
2. **Un zip du dossier du skill** (pour un coup de main ponctuel : la personne l'installe dans son Claude ou le lit simplement).
3. **Un plugin ou un repo dédié** pour les skills destinés à être réutilisés par plusieurs personnes extérieures.

Avant de partager : retirer tout ce qui est privé (voir le point 6 ci-dessus), ne donner accès qu'au pack et pas à tout le repo, et laisser le calendrier Notion derrière ses propres règles d'accès : le skill décrit comment s'en servir, il n'en donne pas l'accès.

## Journal de construction

- 16/11/2026 : audit des skills LinkedIn existants (`linkedin-posts-ugo`, `ditto-voice`, règles en mémoire, routine de rappels). Constats dans `references/open-questions.md`.
- 16/11/2026 : création du pack à partir des règles existantes : `SKILL.md`, playbook TLA, voix, contrôle qualité, contrat de la fiche Notion, planification de la semaine, chiffres vérifiés.
- 16/11/2026 : ajout de la porte de validation (hook, corps et CTA validés avant toute rédaction), puis réécriture : le corps est ce que le lecteur emporte concrètement, le CTA est une action concrète.
- 16/11/2026 : la bibliothèque d'angles était trop compliquée. Elle est remplacée par une liste simple d'angles, qui vit dans la base Notion « Angles Ditto » et non dans le skill, parce qu'elle nourrit tous les canaux. La méthode LinkedIn reste dans les playbooks.
- 16/11/2026 : lecture des posts de la freelance : sa méthode (table d'angles avec « ce que le lecteur retient », draft d'abord puis validation, deux hooks, hypothèses notées dans la page) est ajoutée aux apprentissages.
- Suite : playbooks pour le cas client, l'étude ou le lead magnet, l'annonce produit, les 10 actus RSE et la vidéo ; registres par personne ; test avec un agent sans contexte ; installation dans Claude pour l'équipe.
- 16/11/2026 : réécriture de la voix (reprise ensuite dans `brand-copywriting`) à partir de 21 posts réels (portrait par compte, gestes récurrents, vocabulaire, interdits propres à Ditto) au lieu d'une liste de règles issues des corrections.
