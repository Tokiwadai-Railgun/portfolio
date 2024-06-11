import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Arthur';

export const lastName = 'Deuez - - Scheidbach';

export const surname = "Fuyuki"

export const description =
	'Etudiant en BTS SIO SLAM 1ère année';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/tokiwadai-railgun' },
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/25469988/fuyuki'
	},
	{
		platform: Platform.Email,
		link: 'arthur.scheidbach@live.fr'
	},
  {
    platform: Platform.Codewars,
    link: 'https://www.codewars.com/users/Tokiwadai-Railgun'
  },
];

export const skills = getSkills('js', 'svelte', 'ts', 'rust', 'docker');
