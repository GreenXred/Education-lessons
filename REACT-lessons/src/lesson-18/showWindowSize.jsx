import useWindowSize from "./useWindowSize";

export default function ShowWindowSize() {
    const { width, height } = useWindowSize();

    return (
        <div
            style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                borderRadius: 8,
                display: "inline-block",
                fontWeight: "bold"
            }}
        >
            <div>Width: {width}px</div>
            <div>Height: {height}px</div>
        </div>
    );

}