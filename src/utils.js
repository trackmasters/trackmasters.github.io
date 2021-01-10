export const openInNewTab = (url) => {
	const newWindow = window.open(encodeURI(url), '_blank', 'noopener,noreferrer')
	if (newWindow) newWindow.opener = null
}
