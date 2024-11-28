
export const prerender = false;

import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

// Md files for description
import izuna_hatsuse from "../md/izuna.md?raw"
import hana from "../md/hana.md?raw"
import api_tester from "../md/api-tester.md?raw"
import git_clone from "../md/git-clone.md?raw"


export const items: Array<Project> = [
	{
		slug: 'izuna-hatsuse',
		color: '#c07187',
		description: izuna_hatsuse,
		shortDescription:
		 'Un bot discord en javascript avec la librairie Discord.js servant ',
		links: [{ to: 'https://github.com/Tokiwadai-Railgun/Izuna', label: 'GitHub' }],
		logo: Assets.IzunaHatsuse,
		name: 'Izuna Hatsuse',
		period: {
			from: new Date(2020, 7, 6),
		},
		skills: getSkills('js'),
		type: 'Discord Bot'
	},
	{
		slug: 'hanavim',
		color: '#2a5d7b',
		description: hana,
		shortDescription: "Une configuration neovim fait maison pour tous les projets",
		links: [{ to: 'https://github.com/Tokiwadai-Railgun/HanaVim', label: 'GitHub' }],
		logo: Assets.HanaVim,
		name: 'HanaVim (花)',
		period: {
			from: new Date(2024, 9, 14),
		},
		skills: getSkills('lua', "neovim"),
		type: 'Neovim config'
	},
	{
		slug: "api-tester",
		color: "orange",
		shortDescription: "Un simple cli pour tester des API",
		links: [{ to: "https://github.com/tokiwadai-railgun/api-tester", label: "GitHub" }],
		logo: Assets.ApiTester,
		name: "api-tester",
		description: api_tester,
		period: {
			from: new Date(2024, 9, 14),
			to: new Date(2024, 9, 14),
		},
		skills: getSkills("rust"),
		type: ("CLI")
	},
	{
		slug: 'portfolio',
		color: '#ff3e00',
		description: // String are passed to markdown afterward
			`Portfolio réalisé pour le BTS SIO SLAM en 1ère année en utilisant le framework Svelte et du Typescript. <br> Principalement tiré du template [slick-portfolip-svelte](https://github.com/RiadhAdrani/slick-portfolio-svelte) de RiadhAdrani
`,
		shortDescription:
			'Portfolio réalisé pendant la 1ère année en BTS SIO SLAM',
		links: [{ to: 'https://github.com/Tokiwadai-Railgun/portfolio', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Portfolio',
		period: {
			from: new Date(2024, 4, 1),
		},
		skills: getSkills('svelte', 'ts'),
		type: 'Site',
		screenshots: []
	},
	{
		slug: "git-clone",
		color: "orange",
		shortDescription: "Une reproduction de l'outil git faite en rust",
		links: [{ to: "https://github.com/Tokiwadai-Railgun/git-clone-rust", label: "GitHub" }],
		logo: Assets.Git,
		name: "Git Clone",
		description: git_clone,
		period: {
			from: new Date(2024, 7, 13),
		},
		skills: getSkills("rust", "git"),
		type: ("CLI")
	},
];

export const title = 'Projets';
