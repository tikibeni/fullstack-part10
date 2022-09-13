import { useMutation } from "@apollo/client";
import { SIGN_IN } from '../graphql/mutations'

import useAuthStorage from "./useAuthStorage";
import apolloClient from "../utils/apolloClient";

const useSignIn = () => {
    const authStorage = useAuthStorage()
    const [mutate, result] = useMutation(SIGN_IN);

    const signIn = async ({ username, password }) => {
        const tokendata = await mutate({ variables: { credentials: { username, password } } });
        await authStorage.setAccessToken(tokendata.data.authenticate.accessToken)
        await apolloClient().resetStore()
        return tokendata
    }

    return [signIn, result];
};

export default useSignIn