import { createContext, useEffect, useMemo, useState } from "react";
import { getNoticias } from "../services/NewsService.js";

const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNoticias()
      .then((res) => {
        console.log(res);
        setNoticias(res);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
  }, []);

  const value = useMemo(() => {
    return { noticias, loading, error, setNoticias };
  }, [noticias, loading, error]);

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
