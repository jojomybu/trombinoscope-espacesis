# Backend - Trombinoscope API

API construite avec **FastAPI** et **SQLAlchemy**.

## Installation
1. Accéder au dossier : `cd backend_espacesis`
2. Créer l'environnement virtuel : `python3 -m venv venv`
3. Activer l'environnement : 
   - Linux/macOS : `source venv/bin/activate`
   - Windows : `venv\Scripts\activate`
4. Installer les dépendances : `pip install fastapi uvicorn sqlalchemy`

## Lancement
Pour lancer le serveur en mode développement :
```bash
uvicorn main:app --reload

## 🚀 Prochaines étapes (Roadmap)

* [ ] **Connexion Firebase** : Initialiser `firebase-admin` avec la clé de service JSON.
* [ ] **Gestion des accès** : Créer les routes FastAPI pour sécuriser la lecture/écriture dans Firestore.
* [ ] **API Storage** : Implémenter l'upload des photos vers Firebase Storage.
* [ ] **Test API** : Valider les endpoints via Swagger (`/docs`).
