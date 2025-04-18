
export const prerender = false;

import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

// Md files for description
import izuna_hatsuse from "../md/izuna.md?raw"
import hana from "../md/hana.md?raw"
import api_tester from "../md/api-tester.md?raw"
import git_clone from "../md/git-clone.md?raw"
import owomnipotent from "../md/owomnipotent.md?raw"


export const items: Array<Project> = [
		{
				slug: "owomnipotent",
				color: "white",
				shortDescription: "Serveur personnel pour héberger différents projets, la partie développement concerne le dashboard de ce serveur",
				links: [],
				name: "OwOmnipotent",
				description: owomnipotent,
				period: {
						from: new Date(2024, 10, 1),
				},
				logo: Assets.OwOmnipotent,
				skills: getSkills("rust", "svelte", "ts", "docker" ,"actix_web", "git"),
				type: ("Dashboard"),
				screenshots: [
						{label: "Dashboard", src: "owomnipotent-home.png"},
						{label: "Cloud", src: "owomnipotent-cloud.png"},
				],
		},
		{
				slug: 'izuna-hatsuse',
				color: '#c07187',
				description: izuna_hatsuse,
				shortDescription:
				'Un bot discord en javascript avec la librairie Discord.js',
				links: [{ to: 'https://github.com/Tokiwadai-Railgun/Izuna', label: 'GitHub' }],
				logo: Assets.IzunaHatsuse,
				name: 'Izuna Hatsuse',
				period: {
						from: new Date(2020, 7, 6),
				},
				skills: getSkills('js', 'ts', 'svelte', "docker", "psql", "prisma", "git"),
				type: 'Discord Bot',
				screenshots: [
						{label: "Kanjis", src: "kanjis.png"},
						{label: "Dashboard - Login", src: "izuna-login.png"},
						{label: "Dashboard - Page de Modération", src: "izuna-mod.png"},
						{label: "Dashboard - Tickets", src: "izuna-tickets.png"},
						{label: "Dashboard - Warns", src: "izuna-warns.png"},
				]
		},
		{
				slug: "api-app",
				color: "white",
				description: "Une applications pour exploiter des apis. Réalisé dans le cadre de ma formations en alternance a l'INSEAD, elle a été développée dans le but de simplifier l'utilisation des apis pour palier aux problèmes que posent les rapports sql. ELle propose de stocker et personnaliser des liens vers des apis et affiche les données dans un tableau permettant ainsi une exploitations simple et une visualisation agréable des données grâce à une interface épurée.",
				shortDescription: "Une applications pour exploiter des APIs de manière plus visuelle et agréable",
				name: "Api App",
				links: [],
				logo: Assets.Nextjs,
				period: {
						from: new Date(2024, 10, 1),
						to: new Date(2025, 2, 1)
				},
				skills: getSkills('js', 'ts', 'nextjs', "git"),
				type: "Application Web",
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
				type: 'Neovim config',
				screenshots: [
						{label: "Dashboard", src: "hana-dashboard.png"}
				]
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
						to: new Date(2024, 9, 16),
				},
				skills: getSkills("rust", "git"),
				type: ("CLI"),
				screenshots: [
						{label: "Request File", src: "api-tester_request-file.png"},
						{label: "Example", src: "api-tester_example.png"},
				]
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
				type: ("CLI"),
				screenshots: [
						{label: "Cat Files", src: "git-clone_cat-file.png"},
				]
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
];

export const title = 'Projets';
