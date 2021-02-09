import { useState, useEffect } from 'react';

export function useText(file) {
	const [text, setText] = useState("");

	useEffect(() => {
		const rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					const allText = rawFile.responseText;
					setText(allText);
				}
			}
		};
		rawFile.send(null);
		return () => text;
	});

	return text;
}