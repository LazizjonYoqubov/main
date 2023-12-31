import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL } = process.env;

export const useRequest = () => {
    const navigate=useNavigate();
    

    const request = async ({ 
        url,
         method = 'GET',
          body ,
           token,
            headers={} 
        }) => {
            headers['Content-Type']='application/json';
            
        // const header={

        //     'Content-Type':'application/json',
        // };

        if (token) headers.Authorization = `Bearer ${token}`;

       return fetch(`${REACT_APP_BASE_URL}${url}`, {
            method,
            headers,
            body:JSON.stringify(body),
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(!res)
            return res;
        });
    };
    return request;


}

export default useRequest;