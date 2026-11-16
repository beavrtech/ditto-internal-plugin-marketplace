---
name: lead-magnet-launch
description: Rédiger les livrables de lancement d'un lead magnet Ditto : landing page, campagne email HubSpot (FR + EN), et posts LinkedIn (compte Ugo + compte Ditto). Utiliser cette skill dès qu'un utilisateur mentionne un nouveau guide, white paper, checklist, ou toute autre ressource à promouvoir chez Ditto. Déclencher aussi pour : "rédige la campagne pour ce guide", "écris le post LinkedIn pour ce lead magnet", "prépare le lancement de cette ressource", "crée la LP pour ce guide".
---

# Lead Magnet Launch

## Ce que couvre cette skill

Pour chaque nouveau lead magnet Ditto, produire dans l'ordre :
1. Landing page (FR puis EN)
2. Campagne email dédiée HubSpot (FR puis EN)
3. Post LinkedIn compte Ugo (FR puis EN)
4. Post LinkedIn compte Ditto (FR puis EN)

Toujours lire les skills `ditto-voice` et `marketing-strategy` avant de rédiger quoi que ce soit.

---

## Informations à collecter avant de commencer

Si elles ne sont pas déjà dans le contexte, demander :
- Le contenu exact du guide (ou la LP si elle existe déjà)
- Le lien LP (avec UTM si disponible)
- La langue de départ (FR par défaut)
- Les segments HubSpot à inclure/exclure (sinon utiliser les defaults ci-dessous)

---

## 1. Landing Page

### Structure
- **Titre** : factuel, centré sur le bénéfice concret
- **Sous-titre** : une phrase qui précise le contenu
- **Intro** : 2-3 phrases max, angle "pourquoi ce guide existe", ancré dans un problème terrain réel
- **Ce que vous trouverez à l'intérieur** : 3-5 bullets, contenu concret
- **Pour qui** : une phrase courte
- **CTA** : "Télécharger le guide" / "Download the guide"

### Règles
- Éviter les superlatifs ("le guide ultime", "indispensable") — à utiliser avec parcimonie si vraiment justifié
- Pas de promesses non tenues
- Ne jamais sous-entendre que la forme suffit sans le fond (risque de lecture greenwashing)

### Bannière
Privilégier une formulation orientée action ou diagnostic plutôt qu'une description du contenu. Exemples validés :
- FR : "Faites le point sur votre base documentaire RSE"
- EN : "Get a clear picture of your CSR documentation"

---

## 2. Campagne Email HubSpot

### Attributs à renseigner systématiquement

| Attribut | Valeur |
|----------|--------|
| Nom fichier | `AAAAMMJJ_[FR/EN]_Email marketing - White Paper - [Nom du guide]` |
| Subject | A/B test : Version A avec [Guide] en préfixe, Version B sans |
| Preview text | Complémentaire à l'objet, jamais redondant |
| From name | Expéditeur défini dans HubSpot pour le compte concerné (à confirmer avec Flora, ne pas coder d'adresse personnelle ici) |
| From address | Idem : celle de l'expéditeur HubSpot |
| Included segments | Voir defaults ci-dessous |
| Excluded segments | Voir defaults ci-dessous |
| Bannière | Titre court + sous-titre (voir règle bannière ci-dessus) |
| Body | Voir structure ci-dessous |
| Sent date | Mardi ou jeudi, 9h30 ou 13h30 |

### Segments par défaut

**FR**
- Included : Marketing Contacts FR with disco and opport, Churn contacts FR
- Excluded : Cleaning Hubspot - Competitors/Spam, Contacts customers

**EN**
- Included : Marketing Contacts EN with disco and opport, Churn contacts EN
- Excluded : Cleaning Hubspot - Competitors/Spam

**Partners FR/EN** : à évaluer au cas par cas selon la pertinence du contenu pour des partenaires commerciaux.

### Structure du body email

1. **Accroche** : 1-2 phrases, angle terrain, sobre. S'inspirer d'un insight tiré des calls sales ou du terrain Ditto si disponible.
2. **Transition** : une phrase qui amène le guide naturellement
3. **Au programme** : 3 bullets max, contenu concret, courts
4. **CTA** : "Télécharger le guide" / "Download the guide"
5. **Signature** : "Bonne lecture, / Ugo, Directeur ESG / ↳ Connectons-nous sur LinkedIn"

### A/B test sujet
Toujours tester la présence/absence du préfixe [Guide] en objet. Exemple :
- Version A : [Guide] 17 documents essentiels pour formaliser votre démarche RSE
- Version B : 17 documents essentiels pour formaliser votre démarche RSE

### Performances cibles
- TO > 20% (objectif 25%)
- TC > 5%
- CTR > 25%
- Unsubscribe rate < 0,6%

### Patterns qui performent (corpus campagnes sept. 25 - avril 26)
- Sujets factuels avec chiffre ou [Guide] en préfixe : TO moyen 22-25%
- Preview complémentaire (pas redondante) : +2-3% TO
- Body court, une idée par paragraphe, CTA unique
- Accroche sobre, ancrée terrain, en "je" assumé
- Listing "Au programme" avec 3 bullets courts : meilleur TC

### Patterns à éviter
- Phrases génériques : "Dans beaucoup d'organisations...", "Ce que j'entends le plus souvent sur le terrain"
- Sous-entendre que la forme suffit sans le fond (ex. "ce qui fait perdre des points c'est rarement le manque d'actions") — risque de lecture greenwashing
- Listes à bullets dans l'intro
- Double CTA
- Répétition entre objet et preview
- Traduction littérale FR → EN : la version EN doit sonner idiomatique, pas traduite

### Message DM pour les personnes qui demandent le guide
Quand un post LinkedIn utilise une mécanique "commentez [MOT]", préparer un message de réponse en DM. Format :
- Court (3-5 lignes max)
- Lien LP direct
- Ton chaleureux, pas commercial

---

## 3. Post LinkedIn compte Ugo

### Règles
- Lire ditto-voice avant de rédiger (registre "membre de l'équipe")
- Accroche : factuelle, chiffre ou observation terrain, fragment admis en accroche uniquement
- Corps : une idée par bloc, prose, pas de bullets sauf liste de faits bruts
- Ne jamais sous-entendre que la forme suffit sans le fond
- CTA en fin : direct et personnel, jamais générique
- Mécaniques d'engagement si pertinent : "likez", "commentez [MOT]", "envoyez-moi un message directement"
- Longueur : 150-300 mots

### Structure type pour un guide
1. Accroche (1-2 phrases) : le problème que le guide résout
2. Corps (2-3 paragraphes) : ce qu'on y trouve, pourquoi ça existe
3. Listing du contenu (numéroté si 3+ items)
4. Mécanique d'engagement + lien

### Commentaires de soutien (équipe)
Préparer 4-6 commentaires variés pour l'équipe :
- Varier les profils (collègue ayant contribué, expert terrain, manager)
- Varier les tons (enthousiaste, sobre, question)
- Courts (1-2 phrases + mot clé si mécanique d'engagement)
- Espacer dans le temps pour simuler un engagement organique

---

## 4. Post LinkedIn compte Ditto

### Règles
- Lire ditto-voice avant de rédiger (registre "compte Ditto")
- Ton : professionnel et enthousiaste, pas corporate
- Ne pas répliquer le post Ugo : angle différent (entreprise vs expert terrain)
- Mentionner les partenaires si événement co-organisé
- Longueur : 100-200 mots
- Toujours inclure le lien LP avec UTM linkedin/organic/post-ditto
- Vérifier que la version EN sonne idiomatique

### Structure type pour un guide
1. Accroche : angle "signal du marché" ou observation terrain Ditto
2. Corps : ce que le guide apporte, pour qui
3. CTA : lien direct

---

## Ordre de production recommandé

1. Collecter les infos manquantes
2. Rédiger la LP FR → valider
3. Rédiger la campagne email FR → valider
4. Rédiger la campagne email EN → valider
5. Rédiger le post LinkedIn Ugo FR → valider
6. Rédiger le post LinkedIn Ugo EN → valider
7. Rédiger le post LinkedIn Ditto FR → valider
8. Rédiger le post LinkedIn Ditto EN → valider

Ne jamais passer à l'étape suivante sans validation de l'étape précédente.
