import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    mutation signin($credentials: AuthenticateInput){
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`