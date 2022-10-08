import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ first, sortBy, searchValue }) => {
    const [orderer, setOrderer] = useState("CREATED_AT")
    const [orderDirection, setOrderDirection] = useState("DESC")

    switch (sortBy) {
        case ("CREATED_AT"):
            if (orderer !== "CREATED_AT") setOrderer("CREATED_AT")
            if (orderDirection !== "DESC") setOrderDirection("DESC")
            break

        case ("RATING_AVERAGE_DESC"):
            if (orderer !== "RATING_AVERAGE") setOrderer("RATING_AVERAGE")
            if (orderDirection !== "DESC") setOrderDirection("DESC")
            break

        case ("RATING_AVERAGE_ASC"):
            if (orderer !== "RATING_AVERAGE") setOrderer("RATING_AVERAGE")
            if (orderDirection !== "ASC") setOrderDirection("ASC")
            break

        default:
            console.log('Error initializing useRepositories order function.')
    }

    const variables = {
        first,
        orderBy: orderer,
        orderDirection,
        searchKeyword: searchValue
    }

    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        variables,
        fetchPolicy: 'cache-and-network',
        notifyOnNetworkStatusChange: true,
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

        if (!canFetchMore) return

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables
            }
        })
    }

    return {
        repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading,
        ...result
    }
}

export default useRepositories
