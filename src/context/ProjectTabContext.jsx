import { createContext, useState } from 'react';

export const ProjectTabContext = createContext();

export function ProjectTabProvider({ children }) {
  const [ProjectTab, setProjectTab] = useState("none");
  
  return (
    <ProjectTabContext.Provider value={{ ProjectTab, setProjectTab }}>
      {children}
    </ProjectTabContext.Provider>
  );
}
