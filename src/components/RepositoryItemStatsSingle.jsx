import { View } from "react-native";
import Text from "./Text";

const RepositoryItemStatsSingle = ({ itemspec, desc }) => {
    const numberCruncher = num => {
        const crunch = num / 1000
        if (crunch > 1) return Math.round(crunch * 10) / 10 + 'k'
        return num
    }

    return (
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text fontWeight='bold'>{numberCruncher(itemspec)}</Text>
            <Text color='textSecondary'>{desc}</Text>
        </View>

    )
}

export default RepositoryItemStatsSingle
