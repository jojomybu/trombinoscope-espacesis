#Ce fichier prépare l'environnement Node.js/React.
 
# Utilise une image Node.js
FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code
COPY . .

# Expose le port de Vite
EXPOSE 5173

# Commande de lancement
CMD ["npm", "run", "dev", "--", "--host"]