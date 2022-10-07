import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    mutation signin($credentials: AuthenticateInput){
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`

export const CREATE_REVIEW = gql`
    mutation createReview($review: CreateReviewInput) {
        createReview(review: $review) {
            rating
            text
            repositoryId
            repository {
                name
                ownerName
            }
        }
    }
`
