const isMobileDeviceDetector = () => {
    const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

    if (typeof navigator !== "undefined") {
        return toMatch.some(toMatchItem => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
};

export const isMobile = isMobileDeviceDetector();