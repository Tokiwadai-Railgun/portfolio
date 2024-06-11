
import { items } from '@data/group';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const groupMember = items.find((item) => {
			return item.slug === params.slug;
		});

		return { groupMember };
	}
}
