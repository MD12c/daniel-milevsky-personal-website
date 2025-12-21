import { createContext, useState, useEffect } from "react";

export const RenderContext = createContext();

export function RenderProvider({ children }) {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 2000);

    //return () => clearTimeout(t);
  }, []);

  return (
    <RenderContext.Provider value={{ rendered }}>
      {children}
    </RenderContext.Provider>
  );
}
