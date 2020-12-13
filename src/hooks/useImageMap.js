import { useState, useEffect } from 'react';

export function useImageMap(items, section) {
	const [imageMap,] = useState(new Map());

	useEffect(() => {
		for (const item of items) {
			if (!imageMap.has(item.image)) {
				const image = require(`./../content/${section}/${item.image}`);
				imageMap.set(item.image, image);
			}
		}
		return () => imageMap;
	});
console.log(imageMap)
	return imageMap;
}