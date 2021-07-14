import * as React from "react"
import { useState, useEffect } from "react"
import { PropsWithChildren, ComponentType } from "react"
import { AppState } from "./AppStateContext"
import { Auth, Watch, id, GetData } from "./firebaseFunctions"


export const withData = (
    WrappedComponent: ComponentType<PropsWithChildren<{ initialState: AppState }>>
) => {
    return ({ children }: PropsWithChildren<{}>) => {
        const [isLoading, setIsLoading] = useState(true)
        const [error, setError] = useState<Error | undefined>()
        const [initialState, setInitialState] = useState<AppState>({
            lists: [],
            draggedItem: undefined,
        })
        const [uid, setUid] = useState("")

        // Auth()
        useEffect(() => {
            Auth()
            Watch()
            id(setUid)
            if (uid.length > 1) { GetData(uid) }
        }, [uid])

        useEffect(() => {
            const fetchInitialState = async () => {
                try {
                    if (uid.length > 1) {
                        const data = await GetData(uid)
                        setInitialState(data)
                        setIsLoading(false)
                    }
                } catch (e) {
                    setError(e)
                }
            }
            fetchInitialState()
        }, [uid])

        if (isLoading) return <div>Loading</div>
        if (uid === undefined) return <div>Loading</div>
        if (error) return <div>{error.message}</div>
        return (
            <WrappedComponent initialState={initialState}>
                {children}
            </WrappedComponent>
        )
    }
}