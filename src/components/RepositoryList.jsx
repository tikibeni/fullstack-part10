import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { useDebounce } from 'use-debounce'
import { useNavigate } from 'react-router-native'

import useRepositories from '../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import ItemSeparator from './ItemSeparator'
import ListSorter from './ListSorter'
import Search from './Search'

const RepositoryList = () => {
    const [sortBy, setSortBy] = useState("CREATED_AT")
    const [searchQuery, setSearchQuery] = useState('')
    const [searchValue] = useDebounce(searchQuery, 500)
    const navigate = useNavigate()

    const { repositories } = useRepositories({ sortBy, searchValue });

    return (
        <RepositoryListContainer
            repositories={repositories}
            navigate={navigate}
            sortBy={sortBy}
            setSortBy={setSortBy}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />
    )
}

export class RepositoryListContainer extends React.Component {
    renderHeader = () => {
        const { sortBy, setSortBy, searchQuery, setSearchQuery } = this.props

        return (
            <>
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <ListSorter sortValue={sortBy} setSortValue={setSortBy} />
            </>
        )
    }

    render() {
        const { repositories, navigate } = this.props
        const repositoryNodes = repositories
            ? repositories.edges.map(edge => edge.node)
            : [];

        return (
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={this.renderHeader}
                renderItem={({ item }) => {
                    return <RepositoryItem item={item} navigate={navigate} />
                }}
                keyExtractor={(item => item.id)}
            />
        )
    }
}

export default RepositoryList;
