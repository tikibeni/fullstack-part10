import { Searchbar } from 'react-native-paper'

const Search = ({ searchQuery, setSearchQuery }) => {
    const onChangeSearch = query => setSearchQuery(query)

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    )
}

export default Search
