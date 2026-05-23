# Trombinoscope Interactif - Anniversaire ESPACESIS

Ce projet consiste à développer une application web moderne et réactive pour célébrer l'anniversaire du club **ESPACESIS** de l'**Université Don Bosco de Lubumbashi**. L'objectif principal est de recenser, présenter et mettre en valeur les membres du club et de l'université à travers une interface fluide, rapide et sécurisée.

---

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

---

## 🛠️ Stack Technique

L'application s'appuie sur une architecture découplée:

* Frontend :** React + ViteJS (pour un rendu et des temps de chargement ultra-rapides).
* Backend :** API Python (FastAPI ou Flask) pour la logique serveur.
* Base de données & Auth :** Écosystème Firebase (Firestore pour les données, Auth pour la sécurité, Storage pour les images).
* Environnement :** Docker pour garantir un environnement de développement strictement identique pour toute l'équipe.

---

## 📁 Architecture du Code (Dossier Frontend)

Voici la structure actuelle du dossier `src/` après sa migration en JavaScript standard :

```text
src/
├── components/
│   ├── PublicView.jsx     # Grille principale d'affichage du Trombinoscope (Vue publique)
│   ├── Modal.jsx          # Fenêtre surgissante pour afficher les détails d'un membre
│   └── AdminView.jsx      # Tableau de bord et formulaires de gestion (Vue admin)
├── services/
│   ├── api.js             # Fonctions de communication avec l'API Python
│   └── firebase.js        # Configuration de l'authentification Firebase Auth
├── App.jsx                # Composant racine (Gestion de la navigation et de l'état global)
├── main.jsx               # Point d'entrée de l'application React
└── index.css              # Styles globaux de l'application (Design premium gris & blanc)