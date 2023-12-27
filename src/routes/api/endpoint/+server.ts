import { json, type RequestHandler } from '@sveltejs/kit';

export const GET = (({ setHeaders }) => {
	const randomNumber = Math.random();

	// cache-control 2 minutes
	setHeaders({
		'cache-control': 'public, max-age=120'
	});

	return json({ randomNumber });
}) satisfies RequestHandler;
