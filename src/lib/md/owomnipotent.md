# Présentation
``OwOmnipotent`` est un projet de serveur personnel servant à héberger des VMs grâce à ``proxmox``, stocker des file grâce à cloud personnel, recevoir des emails et autres. 

L'interface est réalisée en ``sveltekit`` avec deux api en ``rust`` en utilisant le framework actix_web. Le design est inspiré du jeux vidéo ``Nier Automata`` pour sa simplicité et la possibilité d'afficher des données sans jeux de couleurs.

## Technologies
Comme dit précédement pour le front-end le framework utilisé est ``sveltekit`` car c'est un framework que j'ai l'habitude d'utiliser, ainsi je garde une base dans le domaine que je maitrise le moins.

Pour ce qui est du back-end, une première ``api`` est réalisée en ``rust`` et permet de communiquer avec la base de donnée pour les sessions notamment, proxmox pour les informations des VMms et communique avec une autre api pour le stockage de fichier.

L'autre api est également écrite en ``rust`` et permet cette fois-ci de stocker des fichiers envoyé par le client et de les récupérer. En somme c'est la partie "cloud" du projet. 


## Difficultés 
La difficulté principale a été le transfer de fichiers par HTTP qui est un point que je ne connaissait pas du tout, le résultat a donc été de transformer le fichier en glob à l'aide de sveltekit dans un ``+page.server.ts`` pour garder le transfer loin du client, transférer le fichiers via des ``multipart-formdata`` à travers les différentes apis et de le stocker en utilisant le ``file-system`` de rust. 

Pour le download faire une route api côté sveltekit a été nécessaire pour garder le système d'authentification sécurisé et ne pas dévoiler le cookie de connexion à javascript.
