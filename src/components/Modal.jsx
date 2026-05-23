import React from 'react';

function Modal({ membre, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      {/* On empêche la fermeture de la modale quand on clique à l'intérieur de la boîte */}
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-body">
          <img src={membre.photo} alt={membre.nom} className="modal-body-img" />
          <h2>{membre.nom}</h2>
          <span className="age">{membre.role} ({membre.niveau})</span>
          
          <div className="description">
            <p><strong>À propos :</strong></p>
            <p>{membre.description || "Aucune description fournie pour le moment."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;