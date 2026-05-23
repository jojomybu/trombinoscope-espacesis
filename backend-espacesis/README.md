# Backend - Trombinoscope API

API construite avec **FastAPI** et **SQLAlchemy**.

## Installation
1. Accéder au dossier : `cd backend-espacesis`
2. Créer l'environnement virtuel : `python3 -m venv venv`
3. Activer l'environnement : 
   - Linux/macOS : `source venv/bin/activate`
   - Windows : `venv\Scripts\activate`
4. Installer les dépendances : `pip install fastapi uvicorn sqlalchemy`

## Lancement
Pour lancer le serveur en mode développement :
```bash
uvicorn main:app --reload