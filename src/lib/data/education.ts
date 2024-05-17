import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Baccalauréat Générale - Maths SVT',
		description: '',
		location: 'François 1er',
		logo: Assets.Francoispermier,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2023, 3, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Mathématiques', 'SVT', 'SI']
	},
	{
		degree: 'BTS SIO SLAM',
		description: '',
		location: 'UTEC Avon',
		logo: Assets.Utec,
		name: '',
		organization: 'UTEC Avon',
		period: { from: new Date(2023, 4, 9) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Java', 'HTML', 'CSS', 'Python', 'Debian']
	}
];

export const title = 'Education';
