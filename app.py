#!/usr/bin/env python3
"""
Wrapper pour lancer l'ASGI `app` défini dans `backend_espacesis/main.py`.
Utilise `runpy.run_path` pour charger le module du backend.
Exécuter avec : `python app.py` ou `python3 app.py`.
"""
import runpy
import os
import sys


def load_app():
    base = os.path.dirname(__file__)
    module_path = os.path.join(base, "backend_espacesis", "main.py")
    if not os.path.exists(module_path):
        print(f"Fichier introuvable: {module_path}")
        sys.exit(1)
    ns = runpy.run_path(module_path)
    app = ns.get("app")
    if app is None:
        print("L'objet 'app' n'a pas été trouvé dans main.py")
        sys.exit(1)
    return app


if __name__ == "__main__":
    app = load_app()
    try:
        import uvicorn
    except Exception as e:
        print("Erreur : uvicorn introuvable. Installez les dépendances : pip install -r backend_espacesis/requirements.txt")
        raise

    # When passing an app object directly, `reload` is not supported.
    # Si le port 8000 est occupé, chercher un port libre dans la plage 8000-8010.
    import socket

    def find_free_port(start=8000, end=8010):
        for p in range(start, end + 1):
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                try:
                    s.bind(("0.0.0.0", p))
                    return p
                except OSError:
                    continue
        return None

    port = find_free_port(8000, 8010)
    if port is None:
        print("Aucun port libre trouvé entre 8000 et 8010. Libérez le port 8000 ou modifiez le script.")
        sys.exit(1)
    print(f"Démarrage du serveur sur le port {port}")
    uvicorn.run(app, host="0.0.0.0", port=port, reload=False)
