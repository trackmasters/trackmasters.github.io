import React from "react";

export function useImageMap(items, section) {
	const [imageMap,] = React.useState(new Map());
	for (const item of items) {
		if (!imageMap.has(item.image)) {
			console.log("requiring", item.image);
			const image = require(`../content/${section}/${item.image}`);
			imageMap.set(item.image, image);
		}
	}
	return imageMap;
}