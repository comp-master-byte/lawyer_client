import {useEffect, useRef} from "react";

export const useClickOutside = (handler: () => void) => {
    const domNode = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const clickOutsideHandler = (event: MouseEvent) => {
            const el = domNode?.current;
            if (!el || !el.contains(event.target as Node)) {
                handler();
            }
        };

        document.addEventListener("mousedown", clickOutsideHandler);

        return () => {
            document.removeEventListener("mousedown", clickOutsideHandler);
        };
    }, []);

    return domNode;
};