import Assets from "./assets";
import { Specialite, type GroupMember } from "../types";

export const items: Array<GroupMember> = [
  {
    slug: "anthony",
    description: `
# Présentation de Anthony MARTIGNON

Bonjour à tous,

Je m'appelle Anthony MARTIGNON, j'ai 19 ans et je suis actuellement en alternance au ministère des Finances. Passionné par les nouvelles technologies et les loisirs modernes, je consacre une grande partie de mon temps libre aux jeux vidéo et à la moto.

### Compétences Techniques

Au fil des années, j'ai développé plusieurs compétences techniques, notamment :

- **Montage de PC** : J'adore assembler des ordinateurs et j'ai acquis une solide expérience dans ce domaine.
- **SQL** : J'ai expérimenté avec le SQL et je suis à l'aise avec les bases de données.
- **HTML et CSS** : J'ai des connaissances en HTML et CSS, ce qui me permet de créer et de styliser des pages web.

### Expérience Professionnelle

En ce moment, je suis en alternance au ministère des Finances. Cette opportunité me permet de mettre en pratique mes compétences tout en continuant à apprendre et à me développer professionnellement.
`,
    photo: Assets.Anthony,
    name: "Anthony Martignon -- Strack",
    company: { 
      name: "Ministère des finances", 
      logo: "none", 
      address: "Dans Paris", 
      description: "une entreprise qui gère deux trois comptes par-ci par-là"
    },
    cv: "cv_anthony.pdf",
    specialite: Specialite.SLAM,
    links: [{ to: 'https://github.com/SaucisseSama', label: 'GitHub' }, {to: 'https://SaucisseSama.github.io', label: "Portfolio"}]
  },
  {
    slug: "maxence",
    description: `

# Présentation de Maxence Miquel

Bonjour à tous,

Je m'appelle **Maxence Miquel**, j'ai **20 ans** et je suis actuellement étudiant en **BTS Services Informatiques aux Organisations (SIO)**, option **Solutions d'Infrastructure, Systèmes et Réseaux (SISR)**.

## Mes passions

Depuis mon plus jeune âge, je suis passionné par les **jeux vidéo**. Cette passion m'a non seulement permis de développer des compétences en matière de stratégie et de résolution de problèmes, mais elle a également éveillé mon intérêt pour l'informatique et les nouvelles technologies.

## Mes compétences

- **Montage de PC** : J'ai de l'expérience dans l'assemblage et la configuration de PC, ce qui me permet de comprendre en profondeur le matériel informatique.
- **Gestion d'inventaire** : J'ai développé des compétences en gestion d'inventaire, essentielles pour maintenir une organisation efficace des ressources matérielles et logicielles.
- **Pack Office** : Je maîtrise les logiciels de la suite Microsoft Office, ce qui me permet d'être efficace dans la création de documents, de présentations et de feuilles de calcul.
- **Bon relationnel** : Je possède de bonnes compétences interpersonnelles, ce qui facilite la communication et la collaboration au sein d'une équipe.
- **Persévérance** : Je suis déterminé et persévérant, toujours prêt à relever des défis et à trouver des solutions aux problèmes rencontrés.
- **Discipline** : Je suis rigoureux et discipliné, ce qui me permet de respecter les délais et de maintenir une qualité de travail constante.

## Mon parcours académique

Je suis actuellement en deuxième année de BTS SIO SISR. Ce cursus me permet d'acquérir des compétences techniques solides en administration de réseaux, gestion de serveurs, et sécurité informatique. Je suis particulièrement intéressé par les aspects pratiques de ce domaine et je suis motivé à approfondir mes connaissances pour devenir un professionnel compétent et polyvalent.

## Mes objectifs

À terme, j'aspire à travailler dans le domaine de l'infrastructure informatique, où je pourrai appliquer mes connaissances pour améliorer et sécuriser les réseaux d'entreprise. Mon rêve est de devenir un expert en cybersécurité, capable de protéger les données sensibles et d'assurer la continuité des services informatiques.

Merci de votre attention et n'hésitez pas à me contacter pour discuter de nos passions communes ou de projets professionnels !

Cordialement,

**Maxence Miquel**
`,
    photo: Assets.Maxence,
    name: "Maxence Miquel",
    company: { 
      name: "Appimac", 
      logo: "none", 
      address: "Dans Paris", 
      description: "une entreprise qui gère deux trois comptes par-ci par-là"
    },
    cv: "cv_maxence.pdf",
    specialite: Specialite.SISR,
    links: []
  },
  {
    slug: "thomas",
    description: `
# Présentation de Thomas Verdier

Bonjour à tous,

Je m'appelle **Thomas Verdier**, j'ai **24 ans** et je suis actuellement étudiant en **première année de BTS Services Informatiques aux Organisations (SIO)**, option **Solutions d'Infrastructure, Systèmes et Réseaux (SISR)**.

## Mes passions

Depuis mon plus jeune âge, je suis passionné par les **jeux vidéo** et les **reptiles**. Ces passions m'ont permis de développer des compétences en matière de **stratégie et de résolution de problèmes** grâce aux jeux vidéo, ainsi qu'une connaissance approfondie des reptiles et de leur environnement.

## Mes compétences

- **Montage de PC** : J'ai de l'expérience dans l'assemblage et la configuration de PC, ce qui me permet de comprendre en profondeur le matériel informatique.
- **Gestion d'inventaire** : J'ai développé des compétences en gestion d'inventaire, essentielles pour maintenir une organisation efficace des ressources matérielles et logicielles.
- **Aide utilisateur** : J'aime aider les utilisateurs à résoudre leurs problèmes informatiques et à améliorer leur expérience technologique.
- **Sérieux** : Je suis rigoureux et sérieux dans mon travail, ce qui me permet de maintenir un haut niveau de qualité et de fiabilité.
- **Persévérant** : Je suis déterminé et persévérant, toujours prêt à relever des défis et à trouver des solutions aux problèmes rencontrés.
- **Autonome** : J'ai la capacité de travailler de manière autonome, en gérant mon temps et mes tâches efficacement.

## Mon parcours académique

Je suis actuellement en première année de BTS SIO option SISR. Ce cursus me permet d'acquérir des compétences solides en administration de réseaux, gestion de serveurs, et sécurité informatique. Je suis particulièrement intéressé par le domaine des **centres de données** et je suis motivé à approfondir mes connaissances pour devenir un professionnel compétent et polyvalent.

## Mes objectifs

À terme, j'aspire à travailler dans le domaine des **centres de données**, où je pourrai appliquer mes connaissances pour améliorer et sécuriser les infrastructures informatiques. Mon rêve est de devenir un **expert en administration de centres de données**, capable de gérer efficacement les ressources, d'assurer la sécurité des données et de maintenir une continuité de service optimale.

Merci de votre attention et n'hésitez pas à me contacter pour discuter de nos passions communes ou de projets professionnels !

Cordialement,

**Thomas Verdier**


`,
    photo: Assets.Thomas,
    name: "Thomas Verdier",
    company: { 
      name: "Ecole de Police", 
      logo: "none", 
      address: "Dans Paris", 
      description: "une entreprise qui gère deux trois comptes par-ci par-là"
    },
    cv: "cv_thomas.pdf",
    specialite: Specialite.SISR,
    links: []
  },
  {
    slug: "arthur",
    description: `
# Présentation
Bonjour  
Je m'appelle Arthur Deuez - - Scheidbach, étudiant en première année de BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métier (SIO SLAM). Passionné par le développement, je consacre une grande partie de mon temps libre à l'apprentissage et à la réalisation de divers projets.  

# Projets et Poursuite d'études
Actuellement je perfectionne mes compétencse en reproduisant des logiciels populaire tel que docker ou git via le site codecrafters. Mon projet le plus ambitieux à ce jour est Izuna Hatsuse, un bot Discord développé en JavaScript avec Node.js et la bibliothèque discord.js, qui a pour but de faciliter la modérations de différents serveurs discords  

Actuellement, j'explore le langage \`\`Rust\`\` dans le but de créer des logiciels et performants. Mon objectif est de continuer à développer mes compétences et de me lancer dans le développement au plus proche de la machine.  
Merci de visiter mon portfolio et de découvrir mes réalisations !

Pour ce qui est des études je compte au moins pourquivre jusqu'au master en développement.
`,

    photo: Assets.Arthur,
    name: "Arthur Deuez -- Scheidbach",
    company: {
      name: "INSEAD",
      logo: "none",
      address: "Boulevard de Constance, 77300 Fontainebleau",
      description: "entreprise?"
    },
    cv: "cv_arthur.pdf",
    specialite: Specialite.SLAM,
    links: [{ to: 'https://github.com/Tokiwadai-Railgun', label: 'GitHub' }, {to: "https://www.codewars.com/users/Tokiwadai-Railgun", label: "Codewars"}, {to: "https://app.codecrafters.io/users/Tokiwadai-Railgun", label: "codecrafters"}]
  }
]
