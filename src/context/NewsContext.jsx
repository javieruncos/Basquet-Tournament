import { createContext, useEffect,useState } from 'react';
import { getNoticias } from '../services/NewsService.js';

const NewsContext = createContext();


export  const NewsContextProvider = ({children}) => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
     
    useEffect(()=>{
        getNoticias().then((res)=>{
            setNoticias(res);
            setLoading(false);
        }).catch((error)=>{
            setError(error);
            setLoading(false);
            console.log(error);
        })
    },[])

    return (
      <NewsContext.Provider value={{ noticias, loading, error,setNoticias }}>
        {children}
      </NewsContext.Provider>
    );
};

export default NewsContext;
