import { gql } from "@apollo/client";

export const user = gql`
    fragment user on User {
        id
        username
    }
`

export const review = gql`
    fragment review on Review {
        id
        text
        rating
        createdAt
        user {
            ...user
        }
    }
    ${user}
`

export const reviewconnection = gql`
    fragment reviewconnection on ReviewConnection {
        totalCount
        pageInfo {
            hasNextPage
            startCursor
            endCursor
        }
        edges {
            cursor
            node {
                ...review
            }
        }
    }
    ${review}
`

export const repository = gql`
    fragment repository on Repository {
        id
        url
        name
        language
        fullName
        ownerName
        forksCount
        description
        reviewCount
        ratingAverage
        ownerAvatarUrl
        stargazersCount
        reviews(first: $first, after: $after) {
            ...reviewconnection
        }
    }
    ${reviewconnection}
`;
