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
    }
`;
