import { createContext } from "react";

const ProportiesContext=createContext()

const ProportiesProvider=({children})=>{
    return <ProportiesContext.Provider>{children}</ProportiesContext.Provider>
};


export default ProportiesProvider;