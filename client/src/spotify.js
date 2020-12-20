// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replacer avec client ID dans le .env.local, redirect URI and desired scopes
const clientId = 'e75d941c2b774bb889f104b9bd60bfc3';
const redirectUri = 'http://localhost:3000/';
const scopes = [
	'playlist-modify-public',
	'playlist-modify-private',
	'user-read-playback-state',
	'user-top-read',
    'playlist-modify-private',
    'playlist-read-private'
];

export const getTokenFromResponse = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			var parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;