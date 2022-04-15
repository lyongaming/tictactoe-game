import { createContext, useState } from "react";

const TurnContext = createContext("");

export const TurnProvider = ({ children }) => {

    const [turn, setTurn] = useState("");

    return <TurnContext.Provider value={{ turn, setTurn }}>
        { children }
    </TurnContext.Provider>

}

export default TurnContext;