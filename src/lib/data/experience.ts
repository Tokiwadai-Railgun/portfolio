import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'apprentice',
		company: 'Insead',
		description: `
# Présentation
Fondée en 1957, l'INSEAD est une école de commerce internationale de premier plan, offrant une éducation de qualité supérieure à travers ses campus situés en Europe (Fontainebleau, France), en Asie (Singapour) et au Moyen-Orient (Abu Dhabi)


# Le département Digital Delivery
Au sein du service IT je participe à divers projets technologiques comme l'intégration de lociels interns et contribue à la gestion et à l'amélioration des systèmes informatiques. Au contact des autres employés avec la gestion de tickets le rôle du service est de s'assurer du bon fonctionnement des services.

Cette expérience enrichit mes compétences pratiques en informatique et me permet de travailler dans un environnement dynamique et exigeant.

# En tant qu'apprentis
Mes missions ont principalement étés de testés l'intégrations entres différents outils pour permettre une transition fluide vers ces derniesr. Le support utilisateur est également présent avec la gestion des tickets. Au cours de l'été 2024 j'ai également pu réalisé une architecture d'intégration entre deux outils du système RH et en fin d'année 2024 j'ai pu être embarqué dans un nouveau projet pour créer une application servant à construire les requêtes api utilisés lors des intégraiton de manière à simplifier la maintenance' 
`,
		contract: ContractType.Alternance,
		type: 'Support et intégraiton',
		location: 'Fontainebleau',
		period: { from: new Date(2023, 4, 10) },
		skills: getSkills(''),
		name: 'Apprentis',
		color: 'lightgreen',
		links: [],
		logo: Assets.Insead,
		shortDescription: 'Membre de l\'équipe Digital Delivery de l\'Insead'
	},
];

export const title = 'Experience';
