import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
      JSON.parse(localStorage.getItem("darkMode")) || false
        // Sera falso cuando nos visiten por primera vez
    );
        // Alternar el modo oscuro
    const toggle = () =>{
        setDarkMode(!darkMode);
    };

        // Cuando ejecutemos nuestra app, vamos a iniciar userEfect
        // para manejar el localStorage
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);
        // devolvemos nuestro proveedor con su funcion y el darkMode como valor y tambien enviamos nuestro hijo para que se aplique el dark mode en todos nuestros componentes, para eso tendremos que envolver al componente App en el index.js

    return (
         <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
         </DarkModeContext.Provider>
    );
};        