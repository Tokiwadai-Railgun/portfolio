import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Arthur';

export const lastName = 'Deuez - - Scheidbach';

export const description =
	'Etudiant en BTS SIO SLAM 1ère année';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/tokiwadai-railgun' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'arthur.scheidbach@live.fr'
	},
  {
    platform: Platform.Codewars,
    link: ''
  }
];

export const skills = getSkills('js', 'html', 'svelte', 'ts', 'go');
