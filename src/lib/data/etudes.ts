import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Baccalauréat Générale - Maths SVT',
		description: "Le Lycée François Premier est un établissement d'enseignement secondaire situé à Fontainebleau. J'ai fréquenté ce lycée de 2020 à 2023, où j'ai suivi un cursus avec des spécialités en Sciences de l'Ingénieur (SI), en Sciences de la Vie et de la Terre (SVT) et en Mathématiques",
		location: 'François 1er',
		logo: Assets.Francoispermier,
		name: 'Lycée François Permier',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2023, 3, 1) },
		shortDescription: '',
		slug: 'francoispermier',
		subjects: ['Mathématiques', 'SVT', 'SI'],
	},
	{
		degree: 'BTS SIO SLAM',
		description: ` # l'Utec en quelques mots
## Présentation
L'UTEC d'Avon est un établissement d'enseignement supérieur proposant une variété de formations dans différents secteurs. Actuellement, j'y poursuis mon BTS SIO SLAM (Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métier).
### En 2023 l'UTEC c'est : 
\`\`89%\`\` de taux d'obtention de la certification

\`\`85%\`\` de taux d'insertion dans l'emploie à 6 mois

\`\`100%\`\` de taux de poursuite d'études

\`\`64%\`\` de taux de satisfaction édutiants 

### La formation
Le BTS SIO (Service informatique aux organisations) forme aux différents métiers de l'informatique via son tron commun, on y vois divers langages de programmation, notamment Python et les langages du web accompagnés des cours de matières générales telles que la Culture Générale et Expression, l'Anglais, et le Commerce Economie Juridique et Management.

### La Spécialité
En tant qu'étudiant en option SLAM, mon focus est principalement sur le développement d'applications. J'ai l'opportunité d'explorer les principes du développement logiciel, de concevoir et de mettre en œuvre des applications répondant aux besoins spécifiques des organisations.

`,
		location: 'UTEC Avon',
		logo: Assets.Utec,
		name: 'UTEC Avon',
		organization: 'UTEC Avon',
		period: { from: new Date(2023, 4, 9) },
		shortDescription: '',
		slug: 'utecavon',
		subjects: ['Java', 'HTML', 'CSS', 'Python', 'Debian']
	}
];

export const title = 'Études';
