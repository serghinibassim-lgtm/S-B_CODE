import {createContext,useState} from "react";

export const Dev_CodeContext=createContext();

export  function Html_provider({children}){
    const [code,setCode]=useState('');
    const [runTrigger,setRunTrigger]=useState(false);

    const runCode=()=>{
        setRunTrigger(prev=>!prev);
    }

    return(
        <Dev_CodeContext.Provider
        value={{code,
        setCode,
        runTrigger,
        runCode}}
        >
            {children}
        </Dev_CodeContext.Provider>

    )
}