import { gql } from "@apollo/client";

export const repository = gql`
    fragment repository on Repository {
        id
        ownerName
        url
        name
        ownerAvatarUrl
        fullName
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        reviews {
            edges {
                node {
                    id
                    text
                    rating
                    createdAt
                    user {
                        id
                        username
                    }
                }
            }
        }
    }
`;
