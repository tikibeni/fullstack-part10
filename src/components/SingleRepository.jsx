import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-native'
import { GET_REPOSITORY } from '../graphql/queries'

import RepositoryItem from './RepositoryItem'
import Text from './Text'
import Githubbutton from "./Githubbutton";

const SingleRepository = () => {
    const [repo, setRepo] = useState(null)
    let param = useParams()

    const { loading } = useQuery(GET_REPOSITORY, {
        variables: { repositoryId: param.id },
        onCompleted: (data) => {
            if (data && data.repository !== null) {
                setRepo(data.repository);
            }
        },
    });

    if (loading) {
        return <Text>Loading...</Text>
    }

    return repo ? (
        <>
            <RepositoryItem item={repo} />
            <Githubbutton item={repo} />
        </>
    ) : null
}

export default SingleRepository
