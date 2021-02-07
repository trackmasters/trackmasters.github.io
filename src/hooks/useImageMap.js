import React from "react";

export function useImageMap(items, section) {
	const [imageMap,] = React.useState(new Map());
	console.log("registered", items);
	for (const item of items) {
		let image;
		if (typeof item === 'string' || item instanceof String) {
			image = item;
		} else {
			image = item.image;
		}
		if (!imageMap.has(image)) {
			console.log("requiring", image);
			const imageComponent = require(`../content/${section}/${image}`);
			console.log("required", imageComponent.default);
			imageMap.set(image, imageComponent.default);
		}
	}
	return imageMap;
}