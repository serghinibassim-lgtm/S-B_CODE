import { useContext, useEffect, useState } from "react";
import { Dev_CodeContext } from "../../context/HtmlContext.jsx";


export default function IframeScreen({W='600px',H='300px'}) {

    const { code, runTrigger } = useContext(Dev_CodeContext);
    const [src, setSrc] = useState("");


    useEffect(() => {
        const fullHtml=code;

        const blob = new Blob([fullHtml], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        setSrc(url);

        return () => URL.revokeObjectURL(url);

    }, [runTrigger]);

    return (
        <iframe
            height={H}
            width={W}
            title="preview"
            src={src}
            className="w-full h-full border"
            sandbox="allow-scripts"
            className='bg-white'
        />
    );
}