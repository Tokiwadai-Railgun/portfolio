import { items } from '@data/etudes';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const etudes = items.find((item) => {
			return item.slug === params.slug;
		});

		return { etudes };
	}
}
