# Trombinoscope Interactif - Anniversaire ESPACESIS

Ce projet consiste à développer une application web moderne et réactive pour célébrer l'anniversaire du club **ESPACESIS** de l'**Université Don Bosco de Lubumbashi**. L'objectif principal est de recenser, présenter et mettre en valeur les membres du club et de l'université à travers une interface fluide, rapide et sécurisée.



## 🎯 Objectifs du Projet

### Priorités Hautes (P1)
* Interface Ultra-Rapide :** Visualisation fluide des profils des membres.
* Sécurité :** Connexion sécurisée et gestion fiable des informations (nom, rôle, etc.).
* Hébergement des Médias :** Stockage et affichage optimal des photos de profil de tout le club.

### Périmètre Inclus
* Grille interactive (Trombinoscope) avec recherche, filtres et fiches détaillées.
* Espace d'administration sécurisé pour ajouter, modifier ou supprimer des membres.
* Synchronisation des données et des images en temps réel via le cloud.

*Note : Les fonctionnalités de messagerie instantanée ou de gestion des cotisations/caisses sont strictement exclues du périmètre de ce projet.*



## 🛠️ Stack Technique

L'application s'appuie sur une architecture découplée:

* Frontend :** React + ViteJS (pour un rendu et des temps de chargement ultra-rapides).
* Backend :** API Python (FastAPI ou Flask) pour la logique serveur.
* Base de données & Auth :** Écosystème Firebase (Firestore pour les données, Auth pour la sécurité, Storage pour les images).
* Environnement :** Docker pour garantir un environnement de développement strictement identique pour toute l'équipe.



## 📁 Architecture du Code (Dossier Frontend)

Voici la structure actuelle du projet :

```text
trombinoscope-espacesis/
├── backend-espacesis/          # API Backend (Python FastAPI)
│   ├── venv/                   # Environnement virtuel (ignoré par Git)
│   ├── main.py                 # Point d'entrée de l'API
│   ├── README.md               # Documentation spécifique Backend
│   └── Dockerfile              # Instructions pour le conteneur Python
├── src/                        # Frontend (React + ViteJS)
│   ├── components/             # Composants UI (PublicView, AdminView, Modal)
│   ├── services/               # Services (api.js, firebase.js)
│   ├── App.jsx                 # Composant racine
│   ├── main.jsx                # Point d'entrée React
│   ├── README.md               # Documentation spécifique Frontend
│   └── Dockerfile              # Instructions pour le conteneur Node.js
├── .gitignore                  # Protection du dépôt (venv, node_modules, etc.)
├── docker-compose.yml          # Orchestration Docker (Le cœur de l'uniformisation)
└── README.md                   # Documentation globale du projet