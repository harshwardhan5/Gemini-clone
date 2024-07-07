import runChat  from "../config/gemini";
import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) =>{

    const [input,setInput] = useState("");


    const onSent = async (prompt) => {
         await runChat(prompt)
    }

        onSent("what is React js")

    const contextValue = {

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;