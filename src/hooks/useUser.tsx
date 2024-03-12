import { createContext, useContext, useEffect, useState } from "react";
import { UserContentType, UserDetail } from "../../types/hooks-types/user";
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";

export const UserContext = createContext<UserContentType | undefined>(undefined);

export const MyUserContextProvider = (props:any ) => {
    const {session, isLoading: isLoadingUser, supabaseClient: supabase} = useSessionContext();

    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetail | null> (null);

    const getUserDetails = () => supabase.from('users').select('*').single();

    useEffect(() => {
        if(user && !isLoadingData && !userDetails) {
            setIsLoadingData(true);
            Promise.allSettled([getUserDetails()]).then((results) => {
                const userDetailPromise = results[0]
                
                if(userDetailPromise.status === 'fulfilled') {
                    setUserDetails(userDetailPromise.value.data as UserDetail)
                }
                
                setIsLoadingData(false)
            }) 
        } else if(!user && !isLoadingData && !isLoadingUser) {
            setUserDetails(null)
        }
    }, [user, isLoadingUser]);
    const value = {
        accessToken,
        user,
        userDetails,
        isLoading: isLoadingData || isLoadingUser
    }

    return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
    const context = useContext(UserContext);

    return context
}