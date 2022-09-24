import { View } from "react-native";
import { numberCruncher } from "../utils/numberFormatter";
import Text from "./Text";

const RepositoryItemStatsSingle = ({ itemspec, desc }) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text fontWeight='bold'>{numberCruncher(itemspec)}</Text>
            <Text color='textSecondary'>{desc}</Text>
        </View>
    )
}

export default RepositoryItemStatsSingle
