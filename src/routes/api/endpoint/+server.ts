import { json, type RequestHandler } from '@sveltejs/kit';

export const GET = ((e) => {
	const randomNumber = Math.random();

	// cache-control 2 minutes
	// setHeaders({
	// 	'cache-control': 'public, max-age=120'
	// });
	console.log(e)
	console.log(e.platform);

	return json({ randomNumber });
}) satisfies RequestHandler;
