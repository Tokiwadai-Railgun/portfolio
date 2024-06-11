import { items } from '@data/education';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const education = items.find((item) => {
			return item.slug === params.slug;
		});

		return { education };
	}
}
