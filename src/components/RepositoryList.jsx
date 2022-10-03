import { FlatList, View, StyleSheet } from 'react-native';
import { useNavigate } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { repositories } = useRepositories();

    return <RepositoryListContainer repositories={repositories} />
}

export const RepositoryListContainer = ({ repositories }) => {
    const navigate = useNavigate()

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => {
                return <RepositoryItem item={item} navigate={navigate} />
            }}
            keyExtractor={(item => item.id)}
        />
    );
}

export default RepositoryList;
