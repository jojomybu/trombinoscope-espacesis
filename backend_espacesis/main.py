from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

# 1. INITIALISATION DE L'API
app = FastAPI(
    title="API Trombinoscope ESPACESIS",
    description="Backend pour la gestion des membres du club",
    version="1.0.0"
)

# 2. CONFIGURATION CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. MODÈLE DE DONNÉES
class Membre(BaseModel):
    id: Optional[int] = None
    nom: str
    role: str
    niveau: str
    description: Optional[str] = None
    photo: Optional[str] = None

# 4. BASE DE DONNÉES TEMPORAIRE
# TODO (Dev Backend) : Remplacer cette liste par une vraie connexion 
# à une base de données (SQLite ou PostgreSQL) avec SQLAlchemy.
fake_db = [
    {"id": 1, "nom": "Exemple", "role": "Membre", "niveau": "L1", "description": "Description", "photo": ""}
]

# 5. ROUTES / ENDPOINTS

@app.get("/api/membres", response_model=List[Membre])
def get_membres():
    """Retourne la liste de tous les membres du club."""
    return fake_db

@app.get("/api/membres/{membre_id}", response_model=Membre)
def get_membre_unique(membre_id: int):
    """Cherche un membre spécifique grâce à son ID."""
    for membre in fake_db:
        if membre["id"] == membre_id:
            return membre
    raise HTTPException(status_code=404, detail="Membre introuvable")

@app.post("/api/membres", response_model=Membre)
def ajouter_membre(nouveau_membre: Membre):
    """Ajoute un nouveau membre au Trombinoscope."""
    # TODO (Dev Backend) : Adapter la logique d'ajout avec la vraie base de données.
    nouveau_membre.id = len(fake_db) + 1
    fake_db.append(nouveau_membre.model_dump())
    return nouveau_membre

# TODO (Dev Backend) : Ajouter la route @app.put pour modifier un membre
# TODO (Dev Backend) : Ajouter la route @app.delete pour supprimer un membre

# TODO (Dev Frontend) : Dans App.jsx, utiliser axios ou fetch pour remplacer 
# les données en dur par un appel vers : http://localhost:8000/api/membres

# TODO (Intégrateur) : Tester l'API via l'interface Swagger (http://localhost:8000/docs)
# et vérifier la saisie des données réelles des membres.
