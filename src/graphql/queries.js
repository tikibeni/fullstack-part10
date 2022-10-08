import { gql } from '@apollo/client';
import { repository, user } from "./fragments";

export const GET_REPOSITORIES = gql`
    query getrepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
      repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
          startCursor
        }
        edges {
          cursor
          node {
            ...repository
          }
        }
      }
    }
    ${repository}
`;

export const GET_REPOSITORY = gql`
    query getrepository($repositoryId: ID!, $first: Int, $after: String) {
        repository(id: $repositoryId) {
            ...repository
        }
    }
    ${repository}
`;

export const ME = gql`
    query me {
        me {
            ...user
        }
    }
    ${user}
`;
