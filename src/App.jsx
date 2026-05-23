import React, { useState } from 'react';
import PublicView from './components/PublicView';
import AdminView from './components/AdminView';

function App() {
  const [currentView, setCurrentView] = useState('public');

  // 1. Centralisation de la liste des membres pour que PublicView et AdminView partagent les mêmes données
  const [membres, setMembres] = useState([
    { id: 1, nom: "Israel", role: "Dev A", niveau: "L3", photo: "https://via.placeholder.com/150", description: "Étudiant en L3 Génie Logiciel." },
    { id: 2, nom: "Joyce", role: "Dev B", niveau: "L3", photo: "https://via.placeholder.com/150", description: "Étudiant en L3 Génie Logiciel." },
    { id: 3, nom: "David", role: "Dev D", niveau: "L3", photo: "https://via.placeholder.com/150", description: "Étudiant en L3 Génie Logiciel." }
  ]);

  // 2. Fonction pour Ajouter ou Modifier un membre (appelée par AdminView)
  const handleAddOrUpdate = async (membreData) => {
    if (membreData.id) {
      // Mode MODIFICATION : On remplace le membre existant
      setMembres(membres.map(m => m.id === membreData.id ? membreData : m));
    } else {
      // Mode AJOUT : On crée un nouvel ID et on l'ajoute à la liste
      const nouveauMembre = {
        ...membreData,
        id: Date.now()
      };
      setMembres([...membres, nouveauMembre]);
    }
  };

  // 3. Fonction pour Supprimer un membre (appelée par AdminView)
  const handleDelete = async (id) => {
    setMembres(membres.filter(m => m.id !== id));
  };

  return (
    <>
      {/* Les formes animées lumineuses en arrière-plan */}
      <div className="background-shapes"></div>

      <header>
        <h1>ESPAC<span>ESIS</span></h1>
        <p>Trombinoscope Officiel - Édition Spéciale Anniversaire</p>
        
        {/* Navigation SPA */}
        <div className="main-nav">
          <button 
            className={`nav-btn ${currentView === 'public' ? 'active' : ''}`}
            onClick={() => setCurrentView('public')}
          >
            👥 Membres
          </button>
          <button 
            className={`nav-btn ${currentView === 'admin' ? 'active' : ''}`}
            onClick={() => setCurrentView('admin')}
          >
            ⚙️ Administration
          </button>
        </div>
      </header>

      <main className="container">
        {/* Affichage de la vue publique */}
        {currentView === 'public' && <PublicView membres={membres} />}

        {/* Affichage de la vue admin avec les données et les fonctions partagées */}
        {currentView === 'admin' && (
          <AdminView 
            membres={membres} 
            onAddOrUpdate={handleAddOrUpdate} 
            onDelete={handleDelete} 
          />
        )}
      </main>
    </>
  );
}

export default App;