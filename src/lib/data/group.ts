import Assets from "./assets";
import { Specialite, type GroupMember } from "../types";

export const items: Array<GroupMember> = [
  {
    slug: "anthony",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
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
  },
  {
    slug: "maxence",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
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
  },
  {
    slug: "thomas",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
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
  },
  {
    slug: "arthur",
    description: `Bonjour
Je m'appelle Arthur Deuez - - Scheidbach, étudiant en première année de BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métier (SIO SLAM). Passionné par le développement, je consacre une grande partie de mon temps libre à l'apprentissage et à la réalisation de divers projets.

J'ai travaillé sur plusieurs reproductions de logiciels populaires tels que Docker et Git, en utilisant le site Codecrafters pour perfectionner mes compétences. Mon projet le plus ambitieux à ce jour est Izuna Hatsuse, un bot Discord développé en JavaScript avec Node.js et la bibliothèque discord.js. Ce bot est conçu pour fonctionner sur un serveur, offrant diverses fonctionnalités interactives pour les utilisateurs de Discord.

Actuellement, j'explore le langage Rust dans le but de créer des logiciels encore plus complexes et performants. Mon objectif est de continuer à développer mes compétences et de me lancer dans des projets innovants qui combinent créativité et technologie
Merci de visiter mon portfolio et de découvrir mes réalisations !`,
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
  }
]
