import { useProgress } from "./use-progress";

export const ScrollProgressBar = () => {
    const progress = useProgress();

    const stylesProgressBar = {
        height: "10px",
        backgroundColor: "#DC2626",
        position: "fixed",
        top: 0,
        left: 0,
        width: progress,
    };
    return (
        <div style={stylesProgressBar}></div>
    );
}
