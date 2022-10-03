import { gql } from '@apollo/client';
import { repository } from "./fragments";

export const GET_REPOSITORIES = gql`
    query {
      repositories {
        edges {
          node {
            ...repository
          }
        }
      }
    }
    ${repository}
`;

export const GET_REPOSITORY = gql`
    query getrepository($repositoryId: ID!) {
        repository(id: $repositoryId) {
            ...repository
        }
    }
    ${repository}
`;

export const ME = gql`
    query {
        me {
            id
            username
        }
    }
`;
