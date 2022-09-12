import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
      repositories {
        edges {
          node {
            id
            ownerName
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
        }
      }
    }
`;
