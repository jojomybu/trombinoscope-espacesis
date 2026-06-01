# Branches et rôles de l'équipe

Ce document liste les branches à créer et les rôles associés pour organiser le projet.

## Branches à créer

- `feature/backend-api`
- `feature/frontend-ui`
- `feature/data-model`
- `feature/firebase-integration`
- `feature/docker-deploy`
- `feature/docs-tests`

> `feature/frontend-ui` n'est pas obligatoire pour l'instant. Elle peut être créée plus tard si nécessaire.

## Rôles et responsabilités

### `feature/backend-api`
- Développer l'API FastAPI
- Implémenter les routes `/api/*`
- Gérer la logique serveur, les endpoints et la structure backend
- Idéal pour un étudiant de L3

### `feature/frontend-ui`
- Rôle : Dockerfile, docker-compose et déploiement local
- Cette branche n'est pas obligatoire pour l'instant
- Idéal pour une personne qui se concentre sur le packaging et le déploiement local

### `feature/data-model`
- Rôle : interface React, affichage des membres, pages d’admin/public
- Structurer la partie UI et la présentation des données
- Idéal pour un étudiant de L2

### `feature/firebase-integration`
- Rôle : connexion à Firebase, auth et stockage des photos
- Préparer un dossier chiffré pour conserver les liens et le code utilisé
- Idéal pour une personne qui gère la sécurité et les accès

### `feature/docker-deploy`
- Rôle : structure des membres, tests manuels, Swagger
- Gérer la configuration du projet et la validation côté backend
- Idéal pour un étudiant de L1

### `feature/docs-tests`
- Rôle : documentation, README, QA
- Compléter le guide d’utilisation et vérifier le projet
- Idéal pour un étudiant de L1

## Suggestions de workflow

1. Faire un commit propre sur `main` avant de créer les branches.
2. Créer chaque branche depuis `main`.
3. Chaque personne travaille sur sa branche.
4. Faire une revue et fusionner vers `main` lorsque les fonctionnalités sont stables.

## Commandes Git utiles

```bash
git checkout main
git pull
git branch feature/backend-api
git branch feature/data-model
git branch feature/firebase-integration
git branch feature/docker-deploy
git branch feature/docs-tests
# branch frontend UI si besoin plus tard
# git branch feature/frontend-ui
```
