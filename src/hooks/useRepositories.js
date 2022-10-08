import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (sortBy) => {
    const [repositories, setRepositories] = useState();
    const [orderer, setOrderer] = useState("CREATED_AT")
    const [orderDirection, setOrderDirection] = useState("DESC")

    switch (sortBy) {
        case ("CREATED_AT"):
            if (orderer !== "CREATED_AT") {
                setOrderer("CREATED_AT")
            }
            if (orderDirection !== "DESC") {
                setOrderDirection("DESC")
            }
            break

        case ("RATING_AVERAGE_DESC"):
            if (orderer !== "RATING_AVERAGE") {
                setOrderer("RATING_AVERAGE")
            }
            if (orderDirection !== "DESC") {
                setOrderDirection("DESC")
            }
            break

        case ("RATING_AVERAGE_ASC"):
            if (orderer !== "RATING_AVERAGE") {
                setOrderer("RATING_AVERAGE")
            }
            if (orderDirection !== "ASC") {
                setOrderDirection("ASC")
            }
            break

        default:
            console.log('Error initializing useRepositories order function.')
    }

    useQuery(GET_REPOSITORIES, {
        variables: { orderBy: orderer , orderDirection: orderDirection },
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            setRepositories(data.repositories)
        },
        notifyOnNetworkStatusChange: true,
    });

    return { repositories }
};

export default useRepositories
