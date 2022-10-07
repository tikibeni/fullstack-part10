import { useState } from "react";
import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";

import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryInfo from "./RepositoryInfo";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";
import Text from "./Text";

const SingleRepository = () => {
    const [repo, setRepo] = useState(null)
    let param = useParams()

    const { loading } = useQuery(GET_REPOSITORY, {
        variables: { repositoryId: param.id },
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            if (data && data.repository !== null) {
                setRepo(data.repository);
            }
        }
    });

    if (loading) {
        return <Text>Loading...</Text>
    }

    return repo ? (
        <FlatList
            data={repo.reviews.edges}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={item => item.node.id}
            ListHeaderComponent={<RepositoryInfo repo={repo} />}
            ItemSeparatorComponent={ItemSeparator}
        />
    ) : null
}

export default SingleRepository
