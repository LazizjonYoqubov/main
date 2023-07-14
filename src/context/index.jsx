
import ProportiesProvider from "./proporties";



const RootContext = ({ children }) => {
    // const [state,dispatch]=useReducer(()=>{},[])
    return (
        <>
            <ProportiesProvider>{children}</ProportiesProvider>
        </>
    );
};


export default RootContext;