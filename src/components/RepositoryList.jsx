import useRepositories from "../hooks/useRepositories";
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const data = useRepositories();

    const repositoryNodes = data
        ? data.repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={RepositoryItem}
            keyExtractor={(item => item.id)}
         />
    );
};

export default RepositoryList;
