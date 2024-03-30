export function redirectTo(url: string) {
	if (!url) {
		return "/";
	}

	window.location.href = url;
}