import { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
    const [progressBarWidth, setProgressBarWidth] = useState("0");

    const scrollCallback = () => {
        const scrollTop = document.documentElement.scrollTop; // px
        const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolledPercent = scrollTop / windowHeight * 100 + "%";

        setProgressBarWidth(scrolledPercent);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollCallback);
        return () => window.removeEventListener("scroll", scrollCallback);
    }, []);

    const stylesProgressBar = {
        height: "10px",
        backgroundColor: "#DC2626",
        position: "fixed",
        top: 0,
        left: 0,
        width: progressBarWidth,
    };
    return (
        <div style={stylesProgressBar}></div>
    );
}
