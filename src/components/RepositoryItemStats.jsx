import { View } from "react-native";
import RepositoryItemStatsSingle from './RepositoryItemStatsSingle'

const RepositoryItemStats = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 10, justifyContent: 'space-evenly'}}>
            <RepositoryItemStatsSingle itemspec={item.stargazersCount} desc='Stars' />
            <RepositoryItemStatsSingle itemspec={item.forksCount} desc='Forks' />
            <RepositoryItemStatsSingle itemspec={item.reviewCount} desc='Reviews' />
            <RepositoryItemStatsSingle itemspec={item.ratingAverage} desc='Rating' />
        </View>
    )
}

export default RepositoryItemStats
