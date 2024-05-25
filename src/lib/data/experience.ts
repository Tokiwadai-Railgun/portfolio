import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'system-analyst',
		company: 'Insead',
		description: 'Integration dans des logiciels interns',
		contract: ContractType.Alternance,
		type: 'Software Development',
		location: 'Fontainebleau',
		period: { from: new Date(2023, 4, 10) },
		skills: getSkills('js'),
		name: 'System Analyst',
		color: 'lightgreen',
		links: [],
		logo: Assets.Insead,
		shortDescription: 'Membre de l\'équipe IT de l\'Insead'
	},
];

export const title = 'Experience';
