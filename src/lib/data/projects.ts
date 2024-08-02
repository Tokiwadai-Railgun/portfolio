
export const prerender = false;

import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'izuna-hatsuse',
		color: '#c07187',
		description:
			'Bot en JS avec la librairie Discord.Js',
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
		slug: 'portfolio',
		color: '#ff3e00',
		description: // String are passed to markdown afterward
			`Portfolio réalisé pour le BTS SIO SLAM en 1ère année en utilisant le framework Svelte et du Typescript. <br> Principalement venu tiré du template 
    `,
		shortDescription:
			'Portfolio réalisé pendant la 1ère année en BTS SIO SLAM',
		links: [{ to: 'https://github.com/Tokiwadai-Railgun/Tokiwadai-Railgun.github.io', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Portfolio',
		period: {
			from: new Date(2024, 4, 1)
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Site',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projets';
