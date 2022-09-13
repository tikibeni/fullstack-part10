import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from '../graphql/mutations'

import useAuthStorage from "./useAuthStorage";

const useAuth = () => {
    const authStorage = useAuthStorage()
    const client = useApolloClient()
    const [login] = useMutation(SIGN_IN);

    const signIn = async ({ username, password }) => {
        const tokendata = await login({ variables: { credentials: { username, password } } });
        await authStorage.setAccessToken(tokendata.data.authenticate.accessToken)
        await client.resetStore()
    }

    const signOut = async () => {
        await authStorage.removeAccessToken()
        await client.resetStore()
    }

    return { signIn, signOut };
};

export default useAuth