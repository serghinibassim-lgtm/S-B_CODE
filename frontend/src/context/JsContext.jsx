import { createContext, useState } from "react";

export const Js_CodeContext = createContext();

export function CodeProvider({ children }) {

    const [code, setCode] = useState("// Hello Monaco");
    const [runTrigger, setRunTrigger] = useState(false);

    const runCode = () => {
        setRunTrigger(prev => !prev); // toggle باش يتعاود useEffect
    };

    return (
        <Js_CodeContext.Provider
            value={{
                code,
                setCode,
                runTrigger,
                runCode
            }}
        >
            {children}
        </Js_CodeContext.Provider>
    );
}