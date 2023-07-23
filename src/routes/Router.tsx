import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppWriteContext } from '../appwrite/AppWriteContext'
import Loading from '../components/Loading'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { appWrite, isLoggedIn, setIsLoggedIn } = useContext(AppWriteContext)

    useEffect(() => {
        appWrite
            .getCurrentUser()
            .then(response => {
                setIsLoading(false)
                if (response) setIsLoggedIn(true)
            }).catch(_ => {
                setIsLoading(false)
                setIsLoggedIn(false)
            })
    }, [appWrite, setIsLoggedIn])

    if (isLoading) {
        return <Loading />
    }

    return (
        <NavigationContainer>
            {isLoggedIn ?
                <AppStack />
                :
                <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Router