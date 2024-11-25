import { useEffect, useState } from "react";

export const useProgress = () => {
    const [progressBarWidth, setProgressBarWidth] = useState("0");

    const getScrollPercent = () => {
        const scrollTop = document.documentElement.scrollTop; // px
        const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolledPercent = scrollTop / windowHeight * 100 + "%";

        return (
            scrolledPercent
        )
    };

    useEffect(() => {
        const scrollCallback = () => {
            setProgressBarWidth(getScrollPercent);
        };

        window.addEventListener("scroll", scrollCallback);
        return () => window.removeEventListener("scroll", scrollCallback);
    }, []);

    return (
        progressBarWidth
    );
};
