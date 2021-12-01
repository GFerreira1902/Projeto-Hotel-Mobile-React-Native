import React, { useState, createContext } from 'react';

const UserContext = createContext([{}, () => {}]);

const UserProvider = (props) => {
  const [usuario, setUsuario] = useState({ logado: true, nome: '' });
  return (
    <UserContext.Provider value={[usuario, setUsuario]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };