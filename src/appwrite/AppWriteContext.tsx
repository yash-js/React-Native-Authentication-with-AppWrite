import { View, Text } from 'react-native'
import React, { FC, PropsWithChildren, createContext, useState } from 'react'

import AppWrite from './service'

type AppContextType = {
    appWrite: AppWrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppWriteContext = createContext<AppContextType>({
    appWrite: new AppWrite(),
    isLoggedIn: false,
    setIsLoggedIn: () => { }
})

export const AppWriteProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const defaultValue = {
        appWrite: new AppWrite(),
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AppWriteContext.Provider value={defaultValue}>
            {children}
        </AppWriteContext.Provider >
    )
}

export default AppWriteProvider