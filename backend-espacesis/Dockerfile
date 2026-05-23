#Ce fichier prépare l'environnement Python.

# Utilise une image Python légère
FROM python:3.11-slim

# Définit le répertoire de travail
WORKDIR /app

# Installe les dépendances
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copie le reste du code
COPY . .

# Expose le port de l'API
EXPOSE 8000

# Commande de lancement
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]