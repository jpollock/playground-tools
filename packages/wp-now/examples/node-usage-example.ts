import path from 'path';
import { startServer } from '../src/index';
import { WPNowMode } from '../src/config';

async function runWpNow() {
	const projectPath = path.resolve('./my-wordpress-project');
	const absoluteUrl = 'http://localhost:8888';

	try {
		const server = await startServer({
			projectPath,
			wpContentPath: path.join(projectPath, 'wp-content'),
			absoluteUrl,
			phpVersion: '8.2',
			wordPressVersion: 'latest',
			mode: WPNowMode.PLAYGROUND,
			port: 8888,
			reset: true,
		});

		console.log(`WordPress is running at: ${server.url}`);

		// Optional: Keep the server running
		// In a real app, you might want to handle server shutdown more gracefully
		await new Promise(() => {});
	} catch (error) {
		console.error('Failed to start WordPress server:', error);
	}
}

runWpNow();
