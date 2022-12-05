import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
    // Verificara si hay un usuario guardado en localStorage, de lo contrario quedara null.

  const login = () => {
    
    setCurrentUser({
      id: 1,
      name: "Chris Delvicier",
      foto:
      "https://static.platzi.com/media/avatars/avatars/christopher-delvicier_41d1f44f-9556-45c1-8fd9-59d3b780f6c2.png",
    });
  };
    // Nuestro contexto esta vez sera un objeto con nuestros datos

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // Si no hay usuario, lo podremos cambiar y guardar en localStorage
  // Nuestro contexto esta vez sera un objeto con datos de usuario y tendremos que convertirlos en String para que se puedan guardar en localStorage.

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};