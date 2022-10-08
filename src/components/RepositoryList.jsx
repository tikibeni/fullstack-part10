import { useState } from "react";
import { FlatList } from 'react-native';
import { useNavigate } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from './RepositoryItem';
import ItemSeparator from "./ItemSeparator";
import ListSorter from "./ListSorter";

const RepositoryList = () => {
    const [sortBy, setSortBy] = useState("CREATED_AT")
    const { repositories } = useRepositories(sortBy);

    return <RepositoryListContainer repositories={repositories} sortBy={sortBy} setSortBy={setSortBy} />
}

export const RepositoryListContainer = ({ repositories, sortBy, setSortBy }) => {
    const navigate = useNavigate()

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={<ListSorter sortValue={sortBy} setSortValue={setSortBy} />}
            renderItem={({ item }) => {
                return <RepositoryItem item={item} navigate={navigate} />
            }}
            keyExtractor={(item => item.id)}
        />
    );
}

export default RepositoryList;
