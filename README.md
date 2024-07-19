Application To-Do List
Description
Il s'agit d'une application de gestion de tâches qui permet aux utilisateurs de créer, visualiser, mettre à jour et supprimer des tâches. L'application dispose d'un frontend développé en HTML, CSS et JavaScript, et d'un backend développé en Java avec Spring Boot.

L'application propose une interface utilisateur claire et intuitive pour gérer les tâches et ajouter des notes. Le frontend et le backend sont hébergés dans un seul dépôt GitHub, ce qui facilite le déploiement et la gestion.

Fonctionnalités
Créer des tâches : Ajouter de nouvelles tâches avec des descriptions.
Voir les tâches : Lister toutes les tâches avec leur état actuel.
Mettre à jour les tâches : Modifier les tâches existantes et leurs détails.
Supprimer les tâches : Supprimer les tâches de la liste.
Ajouter des notes : Attacher des notes aux tâches.
Modifier les notes : Modifier les notes existantes.
Supprimer les notes : Supprimer les notes des tâches.
Design réactif : Conçu pour fonctionner à la fois sur les ordinateurs de bureau et les appareils mobiles.
Technologies Utilisées
Frontend : HTML, CSS, JavaScript
Backend : Java, Spring Boot
Base de données : (Spécifiez votre base de données ici, par exemple, H2, MySQL)
Contrôle de version : Git, GitHub
Configuration
Prérequis
Java 11 ou version ultérieure
Node.js et npm
Git
Installation
Backend
Clonez le dépôt :

bash
Copier le code
git clone https://github.com/Yousseeeeef/To-do-list.git
Accédez au répertoire backend :

bash
Copier le code
cd To-do-list/backend
Construisez et lancez le backend :

bash
Copier le code
./mvnw spring-boot:run
Le backend sera disponible à l'adresse http://localhost:8080.

Frontend
Accédez au répertoire frontend :

bash
Copier le code
cd ../frontend
Installez les dépendances :

bash
Copier le code
npm install
Démarrez le serveur de développement :

bash
Copier le code
npm start
Le frontend sera disponible à l'adresse http://127.0.0.1:5500.

Utilisation
Ouvrez l'application frontend dans votre navigateur.
Utilisez l'interface pour créer, visualiser, mettre à jour et supprimer des tâches.
Utilisez le bouton "Ajouter une note" pour attacher des notes aux tâches.
Cliquez sur les tâches pour les modifier ou les supprimer.
Contribuer
Forkez le dépôt.
Créez une nouvelle branche (git checkout -b feature-branch).
Validez vos modifications (git commit -am 'Ajout d'une nouvelle fonctionnalité').
Poussez sur la branche (git push origin feature-branch).
Créez une nouvelle Pull Request.
Licence
Ce projet est sous la licence MIT - voir le fichier LICENSE pour les détails.

Contact
Pour toute question ou retour, veuillez contacter Youssef Bouziane.
