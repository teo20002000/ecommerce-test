import { createContext, useState } from "react"
import { type User, type UserContext } from "../types/User.types"
import {  type JSX } from "react";

interface Props {
    children: JSX.Element
}  

const initalUser: User = {
    username: 'guest',
    logged:false
}

export const CurrentUserContext = createContext<UserContext>({})

function BaseContext({children}: Props) {
    const [ user, setUser] = useState<User>(initalUser)

   return <CurrentUserContext.Provider value={{ user, setUser}}>
        {children}
    </CurrentUserContext.Provider>
}

export default BaseContext