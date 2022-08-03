import React from 'react';

export const UserContext = React.createContext({});

export default function UserContextProvider(props) {
    const { children } = props;
    const baseURL = new URL('http://localhost:3333');


    const contextValue = {
        baseURL,
    };

    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>;
}