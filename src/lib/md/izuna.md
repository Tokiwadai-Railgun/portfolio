# Présentation
## Fonction
Izuna est un bot discord permettant aux utilisateur de faire plusieurs actions sur leurs serveurs discord comme la modération, des mini-jeux et autres...

## Dévleoppement
Izuna est développée en ``Javascript`` et utilise la libraire ``Discord.js`` pour communiquer avec l'API discord. Le tout est lancé sur un serveur VPS en utilisant nodejs.  
J'ai songé plusieurs fois à changer de langage pour partir sur des choses comme le Java ou le C# mais l'approche du ``Typescript`` pour une refonte me parais plus appréciable car la documentation nodejs est très efficace pour rechercher les fonctions nécessaire à la réalisation des commandes.


# Refonte
## Pourquoi
Izuna est le premier projets de programmation que j'ai réalisé, j'ai donc dédicé de le mettre à jours de mes compétences en entamant une refonte complète en typescript avec une base de donnée non pllus ``mongodb`` mais ``postgresql``.. 

Ceci s'explique car la libraries ``discord.js`` est très efficace, bien docummentée et régulièrement mise à jours, je n'ai donc pas voulu changer de langage. Cependant, étant maintenant habitué aux langages typés je me suis dirigé vers le typescript pour plus de sécurité dans les données et le sysème de classes permettant un développement plus fluide et organisé.

Pour ce qui est de la base de donnée, ``postgresql`` a été mon choix car c'est celle que j'utilise déjà pour d'autres projets, de plus , le tout étant placé sur un ``docker`` ceci permet de développer sur les différents environnement facilement. 

## Fonctions
Les fonctions resteront les mêmes pour ce qui est de la modération et de la sécurité des serveurs, le transfer ne devant pas être visible pour les utilisateurs. 

Cependant de nouvelles fonctionnalités verront le jours au fure et a mesure du développement comme un ``minijeux`` interserveur, un dashboard avec ``sveltekit``.
