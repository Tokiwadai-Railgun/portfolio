import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import git from "../md/git.md?raw"
import typescript from "../md/typescript.md?raw"
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import { description } from './home';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
		defineSkillCategory({ name: 'Langages de Programmation', slug: 'pro-lang' }),
		defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
		defineSkillCategory({ name: 'Libraries', slug: 'library' }),
		defineSkillCategory({ name: 'Langues', slug: 'lang' }),
		defineSkillCategory({ name: 'Databases', slug: 'db' }),
		defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
		defineSkillCategory({ name: 'Outils', slug: 'devtools' }),
		defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
		defineSkillCategory({ name: 'Design', slug: 'design' }),
		defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
		skill: Omit<Skill<S>, 'category'> & {
				category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
		}
): Skill<S> => {
		const out: Skill<S> = omit(skill, 'category');

		if (skill.category) {
				out.category = categories.find((it) => it.slug === skill.category);
		}

		return out;
};

export const items = [
		defineSkill({
				slug: 'js',
				color: 'yellow',
				description:
				"JavaScript est un langage du web couramment utilisé côté client pour faire des interfaces utilisateur plus fluides. personnelement j'utilise le javascript avec NodeJs pour le lancer côté serveur (c'est notamment le cas pour ce portfolio). Un exemple est Izuna Hatsuse, un bot discord réalisé avec NodeJs pour faire tourner les scripts JS côté serveur, la librairie Discord.js pour interagir avec l'API de Discord ainsi quede nombreuses autres librairies comme Chalk ou Mongoose pour des services tiers.",
				logo: Assets.JavaScript,
				name: 'Javascript',
				category: 'pro-lang'
		}),
		defineSkill({
				slug: 'ts',
				color: 'blue',
				description: typescript,
				logo: Assets.TypeScript,
				name: 'Typescript',
				category: 'pro-lang'
		}),
		defineSkill({
				slug: 'css',
				color: 'blue',
				description:
				"Accompagné de l'HTML le css fait partis des lagages avec lesquels je susi le moins familié, cependant des applications web comme le dahsboard de ``Izuna HAtsuse`` me permettent de progresser dans le domaine puisque jamais ces projets ne sont accompagnés de framework css comme tailwind, ce portfolio faisant exception'",
				logo: Assets.CSS,
				name: 'CSS',
				category: 'markup-style'
		}),
		defineSkill({
				slug: 'html',
				color: 'orange',
				description:
				"Actuellement utilisé avec des framework javascript pour des projets webs, le HTML est une base que je continue d'apprendre 'égulèrement.",
				logo: Assets.HTML,
				name: 'HTML',
				category: 'markup-style'
		}),
		defineSkill({
				slug: 'markdown',
				color: 'gray',
				description:
				"Le Markdown est un langage de balisage léger que j'utilise quotidiennement pour la documentation de mes projets, la prise de notes et la rédaction de README. Sa syntaxe simple et efficace me permet de formater rapidement du texte tout en restant lisible dans sa forme brute.",
				logo: Assets.Markdown,
				name: 'Markdown',
				category: 'markup-style'
		}),
		defineSkill({
				slug: 'svelte',
				color: 'orange',
				description: "Svelte est un framework JS pour créer des applications Webs, il est utilisé dans ce portfolio à titre d'entrainnement et pour intéragir avec la base de donnée stockant les compétences et les projets.",
				logo: Assets.Svelte,
				name: 'Svelte',
				category: 'framework'
		}),
		defineSkill({
				slug: 'nextjs',
				color: '',
				description: "NextJs est un framework basé sur le framework React de js, il permet la réalisations d'applications web tout en ayant l'avantage de reposer sur le framework le plus utilisé à ce jours, permettant ainsi d'avoir un retour de la communauté et des aides / solutions sur tous les problèmes rencontrés",
				logo: Assets.Nextjs,
				name: 'NextJs',
				category: 'framework'
		}),
		defineSkill({
				slug: "discordjs",
				color: "blue",
				description: "discord.js est une bibliothèque JavaScript open-source conçue pour créer des bots Discord. Elle offre une interface simple pour interagir avec l'API Discord, permettant aux développeurs de créer des bots avec des fonctionnalités avancées telles que la gestion des messages et la création de commandes personnalisées. Reliée à une base de donnée un bot discord peut servir à plusieurs choses comme la modération ou à faire des mini jeux dans des serveurs.",
				logo: Assets.Discordjs,
				name: "Discord.js",
				category: "library"
		}),
		defineSkill({
				slug: "actix_web",
				color: "blue",
				description: "Actix web est une librairie Rust permettant de créer des APIs simplement dans le langage, elle intègre parfaitement les différents types de requêtes et permet leurs combinaisons avec des structures pour une vérifications des données automatiques",
				logo: Assets.Actix_web,
				name: "actix_web",
				category: "library"
		}),
		defineSkill({
				slug: "docker",
				color: "blue",
				description: "Docker est un logiciel pour créer des conteneurs, des parties réservés du hardware de l'ordinateur au lancement de programmes. Pour l'instant il me sert à faire faire des tests en local le temps d'apprendre plus à l'utiliser, après il servira notamment à push Izuna et d'autres applications sur un serveur VPS.",
				logo: Assets.Docker,
				name: "Docker",
				category: "devtools"
		}),
		defineSkill({
				slug: "rust",
				color: "orange",
				description: "Rust est un langage de programmation conçu pour offrir à la fois performance et sécurité, particulièrement en ce qui concerne la gestion de la mémoire. Grâce à son modèle de propriété unique, Rust permet de prévenir les erreurs courantes et les vulnérabilités. Je suis actuellement en train d'apprendre Rust pour développer des applications plus complexes que celles possibles en JavaScript. Mon projet en cours est une alternative à Postman en version terminal, visant à compléter mon setup avec Neovim. Ce projet tire parti des capacités de Rust pour créer une solution rapide, fiable et efficace pour tester et gérer les API directement depuis le terminal.",
				logo: Assets.Ferris,
				name: "Rust",
				category: "pro-lang"
		}),
		defineSkill({
				slug: "lua",
				color: "blue",
				description: "Le lua est un langage de script utilisé à plusieurs endroits notamment dans roblox studio et dans les configurations neovim",
				logo: Assets.Lua,
				name: "Lua",
				category: "pro-lang"
		}),
		defineSkill({
				slug: "git",
				color: "orange",
				description: git,
				logo: Assets.Git,
				name: "Git",
				category: "devtools"
		}),
		defineSkill({
				slug: "neovim",
				color:  "",
				description: "Nevim est un éditeur de texte dans le terminal, personnalisable, il est utilisé pour coder des projets en Rust, Lua et Typescript. Il est configuré pour être utilisé avec plusieurs plugins et configurations personnalisées pour améliorer la productivité et la qualité du code.",
				logo: Assets.Nvim,
				name: "Neovim",
				category: "devtools"
		}),
		defineSkill({
				slug: "psql",
				color: "",
				description: "Postgresql est un système de gestion de base base de donnée que j'utilise désormais dans la majorité de mes projets pour son intégration simple et sa performance.",
				logo: Assets.Postgresql,
				name: "Postgresql",
				category: "db"

		}),
		defineSkill({
				slug: "mysql",
				color: "",
				description: "MySql (Mariadb) est un système de gestion de base base de donnée que j'ai appris à utiliser au cours de ma formations en BTS SIO, sa mise en place simple et son intégrations rapide sont de gros atouts dans le développement d'applications.",
				logo: Assets.Mysql,
				name: "Mysql (Mariadb)",
				category: "db"

		}),
		defineSkill({
				slug: "prisma",
				color: "",
				description: "Prisma est un ORM en Typescript qui permet d'intéragire avec une base de donée en ayant une logique de schéma. C'est à dire qu'une fois le schéma de la base de donnée généré dans un fichier `schema.prisma`, il est possible de l'exporter et de manipuler les données à partir de ce dernier, fluidifiant et augmentant la sécurité des programmes réalisés avec",
				logo: Assets.Prisma,
				name: "Prisma ORM",
				category: "orm"
		})
] as const;

export const title = 'Compétences';

export const getSkills = (
		...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
		query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
		const out: ReturnType<typeof groupByCategory> = [];

		const others: Array<Skill> = [];

		items.forEach((item) => {
				if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

				// push to others if item does not have a category
				if (!item.category) {
						console.log(item.category);
						others.push(item);
						return;
				}

				// check if category exists
				let category = out.find((it) => it.category.slug === item.category?.slug);

				if (!category) {
						category = { items: [], category: item.category };

						out.push(category);
				}

				category.items.push(item);
		});

		if (others.length !== 0) {
				out.push({ category: { name: 'Others', slug: 'others' }, items: others });
		}

		return out;
};

// groupByCategory function altternative to handle skill array as an input
export const groupByCategoryAlt = (inputItems: Array<Skill>) => {
		const out: ReturnType<typeof groupByCategory> = [];
		const other: Array<Skill> = [];

		inputItems.forEach((item) => {
				// first check if item have a catefory other way push it to the other category
				if (!item.category) {
						other.push(item)
						return;
				}

				// get the category from the output
				let category = out.find((it) => it.category.slug === item.category?.slug)
				// If not existing then add it
				if (!category) {
						category = { items: [], category: item.category}
						out.push(category)
				}

				category.items.push(item)
		})

		// If there is elements in the other category then add it to the ouput
		if (other.length != 0) {
				out.push({ category: { name: "Others", slug:"others"}, items: other})
		}

		return out;
}
