
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    render: string,
     setRender: Dispatch<SetStateAction<string>>
     projects: boolean, 
     setProjects: Dispatch<SetStateAction<boolean>>,
     skills: boolean, 
     setSkills: Dispatch<SetStateAction<boolean>>,
     typescript: boolean, 
     setTypescript: Dispatch<SetStateAction<boolean>>,
     sass: boolean, 
     setSass: Dispatch<SetStateAction<boolean>>,
     react: boolean, 
     setReact: Dispatch<SetStateAction<boolean>>,
     nextjs: boolean, 
     setNextjs: Dispatch<SetStateAction<boolean>>,
}

const Context = createContext<ContextProps>({
    render: '',
     setRender: () => {},
     projects: false, 
     setProjects: () => {},
     skills: false, 
     setSkills: () => {},
     typescript: false, 
     setTypescript: () => {},
     sass: false, 
     setSass: () => {},
     react: false, 
     setReact: () => {},
     nextjs: false, 
     setNextjs: () => {},
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [render, setRender] = useState('');
    const [skills, setSkills] = useState(true);
    const [projects, setProjects] = useState(false);
    const [typescript, setTypescript] = useState(false);
    const [sass, setSass] = useState(false);
    const [react, setReact] = useState(false);
    const [nextjs, setNextjs] = useState(false);
    
    return (
        <Context.Provider value={{
            render,
            setRender,
            typescript,
            setTypescript,
            skills,
            setSkills,
            projects,
            setProjects,
            sass,
            setSass,
            react,
            setReact,
            nextjs,
            setNextjs

             }}>
            {children}
        </Context.Provider>
    )
};

export const useGlobalContext = () => useContext(Context);