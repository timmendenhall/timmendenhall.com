'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollSpy = (
    sections: Array<string>,
    options?: {
        offset?: number;
        root?: Element;
    },
): [number] => {
    const [
        currentIntersectingElementIndex,
        setCurrentIntersectingElementIndex,
    ] = useState(-1);

    const rootMargin = `-${(options && options.offset) || 0}px 0px 0px 0px`;
    const observer = useRef<IntersectionObserver>(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                // find the index of the section that is currently intersecting
                const indexOfElementIntersecting = entries.findIndex(
                    (entry) => {
                        // if intersection > 0 it means entry is intersecting with the view port
                        return entry.intersectionRatio > 0;
                    },
                );

                // store the value of indexOfElementIntersecting
                setCurrentIntersectingElementIndex(indexOfElementIntersecting);
            },
            {
                root: (options && options.root) || null,
                // use this option to handle custom offset
                rootMargin,
            },
        );

        const { current: ourObserver } = observer;

        // observe all the elements if the section exists
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                ourObserver.observe(element);
            }
        });

        return () => ourObserver.disconnect();
    }, [sections, options, options?.root, rootMargin]);

    return [currentIntersectingElementIndex];
};
