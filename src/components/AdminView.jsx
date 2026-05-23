import React, { useState, useRef } from 'react';

export default function AdminView({ membres, onAddOrUpdate, onDelete }) {
    // États pour gérer la modification et les champs du formulaire
    const [editingId, setEditingId] = useState(null);
    const [nom, setNom] = useState('');
    const [role, setRole] = useState('');
    const [niveau, setNiveau] = useState('L3');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    
    // Référence pour réinitialiser le champ d'importation de fichier image
    const fileInputRef = useRef(null);

    // Fonction pour vider le formulaire
    const resetForm = () => {
        setEditingId(null);
        setNom('');
        setRole('');
        setNiveau('L3');
        setDescription('');
        setPhoto('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Charger les informations d'un membre dans le formulaire pour les modifier
    const handleEdit = (membre) => {
        setEditingId(membre.id || null);
        setNom(membre.nom);
        setRole(membre.role);
        setNiveau(membre.niveau);
        setDescription(membre.description || '');
        setPhoto(membre.photo || '');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Demander confirmation avant de supprimer
    const handleDelete = async (id) => {
        if (!id) return;
        if (window.confirm("Voulez-vous vraiment supprimer ce membre du club ?")) {
            await onDelete(id);
        }
    };

    // Soumission du formulaire (Ajout ou Modification)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let finalImageUrl = photo || "https://via.placeholder.com/150";

        // Logique de lecture du fichier image local si un fichier est sélectionné
        if (fileInputRef.current?.files && fileInputRef.current.files[0]) {
            const file = fileInputRef.current.files[0];
            finalImageUrl = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = () => reject("Erreur de lecture de l'image");
                reader.readAsDataURL(file); // Convertit l'image en texte affichable (Base64)
            });
        }

        const membreData = {
            nom,
            role,
            niveau,
            description,
            photo: finalImageUrl
        };

        if (editingId !== null) {
            membreData.id = editingId;
        }

        try {
            await onAddOrUpdate(membreData);
            resetForm();
        } catch (error) {
            console.error(error);
            alert("Erreur lors de l'enregistrement.");
        }
    };

    return (
        <section className="view-section">
            <div className="admin-container">
                
                {/* Formulaire dynamique (S'adapte si on ajoute ou si on modifie) */}
                <aside className="sidebar glass-panel">
                    <h2>{editingId ? "Modifier le membre" : "Ajouter un membre"}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nom">Nom complet</label>
                            <input type="text" id="nom" required placeholder="Ex: Israel..." value={nom} onChange={e => setNom(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Rôle dans le club</label>
                            <input type="text" id="role" required placeholder="Ex: Dev A " value={role} onChange={e => setRole(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="niveau">Niveau Académique</label>
                            <input type="text" id="niveau" required placeholder="Ex: L1, L2, L3" value={niveau} onChange={e => setNiveau(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageFile">Photo de profil</label>
                            <input type="file" id="imageFile" accept="image/*" ref={fileInputRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Biographie / Description</label>
                            <textarea id="description" required placeholder="Quelques mots sur le membre..." value={description} onChange={e => setDescription(e.target.value)}></textarea>
                        </div>
                        
                        <div className="form-actions">
                            <button type="submit" className="btn-primary">
                                {editingId ? "Sauvegarder" : "Ajouter au Club"}
                            </button>
                            {editingId && (
                                <button type="button" className="btn-secondary" onClick={resetForm}>
                                    Annuler
                                </button>
                            )}
                        </div>
                    </form>
                </aside>

                {/* Tableau de gestion des membres */}
                <div className="admin-list glass-panel">
                    <h2>Membres du Club</h2>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Nom Complet</th>
                                    <th>Rôle & Niveau</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {membres.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} style={{ textAlign: 'center' }}>Aucun membre enregistré.</td>
                                    </tr>
                                ) : (
                                    membres.map(membre => (
                                        <tr key={membre.id}>
                                            <td>
                                                <img src={membre.photo || "https://via.placeholder.com/50"} className="table-img" alt="Photo" />
                                            </td>
                                            <td>{membre.nom}</td>
                                            <td>{membre.role} <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>({membre.niveau})</span></td>
                                            <td>
                                                <button className="action-btn btn-edit" onClick={() => handleEdit(membre)}>✏️</button>
                                                <button className="action-btn btn-delete" onClick={() => handleDelete(membre.id)}>🗑️</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}