import { View } from 'react-native';
import RepositoryItemStats from './RepositoryItemStats';
import RepositoryItemProfile from "./RepositoryItemProfile";

const RepositoryItem = ({ item }) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <RepositoryItemProfile item={item} />
            <RepositoryItemStats item={item} />
        </View>
    )
}

export default RepositoryItem;
