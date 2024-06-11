import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'system-analyst',
		company: 'Insead',
		description: `Fondée en 1957, l'INSEAD est une école de commerce internationale de premier plan, offrant une éducation de qualité supérieure à travers ses campus situés en Europe (Fontainebleau, France), en Asie (Singapour) et au Moyen-Orient (Abu Dhabi)

Au sein du service IT je participe à divers projets technologiques comme l'intégration de lociels interns et contribue à la gestion et à l'amélioration des systèmes informatiques.

Cette expérience enrichit mes compétences pratiques en informatique et me permet de travailler dans un environnement dynamique et exigeant.`,
		contract: ContractType.Alternance,
		type: 'Software Development',
		location: 'Fontainebleau',
		period: { from: new Date(2023, 4, 10) },
		skills: getSkills(''),
		name: 'System Analyst',
		color: 'lightgreen',
		links: [],
		logo: Assets.Insead,
		shortDescription: 'Membre de l\'équipe IT de l\'Insead'
	},
];

export const title = 'Experience';
