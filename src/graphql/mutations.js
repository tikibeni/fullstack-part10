import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    mutation signin($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`

export const SIGN_UP = gql`
    mutation signup($user: CreateUserInput) {
        createUser(user: $user) {
            id
            username
            createdAt
            reviewCount
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
