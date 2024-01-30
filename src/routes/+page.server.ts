import type { PageServerLoad } from './$types';

export const load = ((e) => {
	const randomNumber = Math.random();

	// cache-control 2 minutes

	// setHeaders({
	// 	'cache-control': 'public, max-age=120'
	// });
	console.log(e.url);
	return {
		randomNumber
	};
}) satisfies PageServerLoad;
