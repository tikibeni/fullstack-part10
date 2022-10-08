import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";

import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryInfo from "./RepositoryInfo";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";
import Text from "./Text";

const SingleRepository = () => {
    let param = useParams()

    const onEndReach = () => handleFetchMore()

    const variables = {
        repositoryId: param.id,
        first: 5
    }

    const { data, loading, fetchMore  } = useQuery(GET_REPOSITORY, {
        variables,
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage

        if (!canFetchMore) return

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables
            }
        })
    }

    if (loading) {
        return <Text>Loading...</Text>
    }

    return data?.repository ? (
        <FlatList
            data={data.repository.reviews.edges}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={<RepositoryInfo repo={data.repository} />}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={item => item.node.id}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    ) : null
}

export default SingleRepository
