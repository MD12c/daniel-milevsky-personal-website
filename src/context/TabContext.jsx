import { createContext, useState } from 'react';

export const TabContext = createContext();

export function TabProvider({ children }) {
  const [TabMode, setTabMode] = useState("none");
  
  return (
    <TabContext.Provider value={{ TabMode, setTabMode }}>
      {children}
    </TabContext.Provider>
  );
}
