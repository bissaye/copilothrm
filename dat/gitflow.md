# Github flow

Il est important d'écrire des messages de commit clairs et informatifs.

Les messages de commit jouent un rôle crucial dans la documentation de l'historique du projet et facilitent la compréhension des modifications apportées à chaque commit.

Voici comment écrire des messages de commit conformément au modèle Github flow :

## Préfixes des commits :

Les messages de commit dans Github flow sont généralement précédés d'un préfixe qui indique le type de modification apportée.

Les préfixes couramment utilisés sont les suivants :

**feat:** Pour les nouvelles fonctionnalités.

**fix:** Pour les corrections de bogues.

**build:** Mises à jour de dépendances, config webpack etc.

**ci**: Configuration de l'intégration continue,

**docs:** Pour les modifications de documentation.

**refactor:** Pour les modifications de code qui ne sont ni des nouvelles fonctionnalités ni des corrections de bogues.

**test:** Pour les ajouts ou les modifications de tests unitaires.

Par exemple :

``feat: Ajoutez une nouvelle page d'accueil``

``fix: Corrigez un bogue de validation dans le formulaire``

## Description du commit :

Après le préfixe, ajoutez une description concise et informative du commit.
Et doit être aussi spécifique que possible pour expliquer ce que fait le commit.

Évitez d'utiliser des phrases trop longues.
Essayez de limiter la description à environ 50-72 caractères par ligne.
Exemple :

``
feat: Ajoutez une fonction de recherche de produits``

### Scope

Les messages de commit commencent généralement par un préfixe qui indique le type de modification apportée, comme décrit précédemment.

Ensuite, vous pouvez ajouter un "scope" entre parenthèses pour indiquer où se situe la modification.

Exemple :

``feat(auth): Ajoutez une nouvelle page de connexion``

``fix(validation): Corrigez un bogue de validation dans le formulaire``

En utilisant le "scope" de cette manière, vous pouvez préciser exactement quelles parties de votre code sont affectées par chaque commit.

Cela facilite la compréhension des modifications apportées et permet de suivre plus facilement l'impact de ces modifications sur différentes parties du projet.

### Message de commit étendu (facultatif) :

Si la description du commit est insuffisante pour expliquer en détail les modifications apportées, vous pouvez ajouter un message de commit étendu en sautant une ligne après la description et en fournissant des informations supplémentaires, des raisons ou des contextes sur les modifications.

Exemple :

``feat: Ajoutez une fonction de recherche de produits``

``Cette fonctionnalité permet aux utilisateurs de rechercher des produits par nom, catégorie ou prix.
Elle utilise l'API de recherche pour interroger la base de données et affiche les résultats dans une liste.``

## Principales branches GitFlow et commandes:

### Rôles des Branches dans GitFlow :

- **`main`** : Branche stable représentant la version en production.

- **`develop`** : Branche de développement principale où les fonctionnalités sont intégrées.

- **`feature/`** : Branches individuelles pour développer de nouvelles fonctionnalités.

- **`release/`** : Branches pour la préparation des versions à déployer.

- **`hotfix/`** : Branches pour les correctifs critiques appliqués directement sur la production.

- **`support/`** : Branches pour fournir un support à une version spécifique en production.

- **`bugfix/`** : Branches pour les correctifs de bugs non critiques.

### Commandes GitFlow :

- **Initialiser GitFlow :**

  ```bash
  git flow init

- **Démarrer une nouvelle fonctionnalité :**

  ```bash
  git flow feature start nom-de-la-fonctionnalite

- **Terminer une fonctionnalité :**

  ```bash
  git flow feature finish nom-de-la-fonctionnalite

- **Démarrer une release :**

  ```bash
  git flow release start nom-de-la-version

- **Terminer une une release :**

  ```bash
  git flow release finish nom-de-la-version

- **Démarrer un correctif :**

  ```bash
  git flow hotfix start nom-du-correctif

- **Terminer un correctif :**

  ```bash
  git flow hotfix finish nom-du-correctif

- **Démarrer une branche de support  :**

  ```bash
  git flow support start nom-de-la-version

- **Terminer une branche de support :**

  ```bash
  git flow support finish nom-de-la-version

- **Démarrer un correctif de bug :**

  ```bash
  git flow bugfix start nom-du-correctif

- **Terminer un correctif de bug :**

  ```bash
  git flow bugfix finish nom-du-correctif



## Conseils supplémentaires :

Évitez les commits trop volumineux. Il vaut mieux diviser les modifications en plusieurs commits plus petits et cohérents.

Utilisez des verbes clairs et concis dans vos messages de commit.

Soyez cohérent avec la casse (majuscules/minuscules) et la forme de vos messages de commit.

Utilisez l'impératif pour indiquer ce que fait le commit, plutôt que de décrire ce qui a été fait.

En suivant ces pratiques, vous rendrez votre historique Git plus lisible et plus facile à comprendre pour vous et pour les autres contributeurs du projet.

Cela facilitera également la révision, la gestion des versions et le suivi des modifications apportées au fil du temps.

[En savoir plus](https://www.atlassian.com/fr/git/tutorials/comparing-workflows/Github flow-workflow)