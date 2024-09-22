import { useEffect, useRef } from "react";

const useClickOutside = (handler: () => void, active: boolean) => {
	const domNode = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const maybeHandler = (event: MouseEvent | TouchEvent) => {
			if (domNode.current && !domNode.current.contains(event.target as Node)) {
				handler();
			}
		};

		if (active) {
			document.addEventListener("mousedown", maybeHandler);
			document.addEventListener("touchstart", maybeHandler);
		}

		return () => {
			document.removeEventListener("mousedown", maybeHandler);
			document.removeEventListener("touchstart", maybeHandler);
		};
	}, [active, handler]);

	return domNode;
};

export default useClickOutside;
