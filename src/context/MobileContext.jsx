import { createContext, useState } from 'react';

export const MobileContext = createContext();

export function MobileProvider({ children }) {
  const [mobileMode, setMobileMode] = useState(false);
  
  return (
    <MobileContext.Provider value={{ mobileMode, setMobileMode }}>
      {children}
    </MobileContext.Provider>
  );
}
