import { useState } from 'react';
import { Pressable, View } from 'react-native';

import RepositoryItemProfile from "./RepositoryItemProfile";
import RepositoryItemStats from './RepositoryItemStats';

const RepositoryItem = ({ item, navigate }) => {
    const [viewingSingle, setViewingSingle] = useState(false)

    const openSingleRepository = () => {
        if (!viewingSingle && navigate !== undefined) {
            setViewingSingle(true)
            navigate(`/${item.id}`, { replace: true })
        }
    }

    return (
        <Pressable onPress={openSingleRepository}>
            <View style={{ backgroundColor: 'white' }} testID="repositoryItem" >
                <RepositoryItemProfile item={item} />
                <RepositoryItemStats item={item} />
            </View>
        </Pressable>
    )
}

export default RepositoryItem;
