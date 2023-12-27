import type { PageServerLoad } from './$types';

export const load = (({ setHeaders }) => {
	const randomNumber = Math.random();

	// cache-control 2 minutes

	setHeaders({
		'cache-control': 'public, max-age=120'
	});

	return {
		randomNumber
	};
}) satisfies PageServerLoad;
