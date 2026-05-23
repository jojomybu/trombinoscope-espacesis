import React, { useState } from 'react';
import Modal from './Modal';


function PublicView({ membres }) {
  
  

  const [recherche, setRecherche] = useState("");
  const [membreSelectionne, setMembreSelectionne] = useState(null);


  const membresFiltres = membres.filter(membre => 
    membre.nom.toLowerCase().includes(recherche.toLowerCase()) ||
    membre.role.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="view-section">
      {/* Barre de recherche habillée pour le thème sombre */}
      <div className="form-group" style={{ maxWidth: '500px', margin: '0 auto 2rem auto' }}>
        <input 
          type="text" 
          placeholder="🔍 Rechercher un membre ou un rôle..." 
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>

      {/* Grille utilisant la classe .grid-container du CSS original */}
      <div className="grid-container">
        {membresFiltres.map(membre => (
          <div 
            key={membre.id} 
            className="card" 
            onClick={() => setMembreSelectionne(membre)}
          >
            <div className="card-image">
              <img src={membre.photo} alt={membre.nom} />
            </div>
            <div className="card-content">
              <h2>{membre.nom}</h2>
              <span className="age">{membre.role}</span>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>Niveau : {membre.niveau}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fenêtre modale au clic */}
      {membreSelectionne && (
        <Modal 
          membre={membreSelectionne} 
          onClose={() => setMembreSelectionne(null)} 
        />
      )}
    </div>
  );
}

export default PublicView;