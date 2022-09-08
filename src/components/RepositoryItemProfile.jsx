import { View, Image} from "react-native";
import theme from "../theme";
import Text from "./Text";

const RepositoryItemProfile = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', padding: 15 }}>
            <View style={{ flexDirection: 'column' }}>
                <Image style={theme.images.tinylogo} source={{uri: item.ownerAvatarUrl}} />
            </View>
            <View
                style={{
                    flexDirection: 'column',
                    flexShrink: 1,
                    marginLeft: 20,
                    marginRight: 10,
                    justifyContent: 'space-evenly'
                }}
            >
                <Text fontWeight='bold' style={{ flexWrap: 'wrap', paddingBottom: 5 }}>
                    {item.fullName}
                </Text>
                <Text color='textSecondary' style={{ flexWrap: 'wrap', paddingBottom: 5 }}>
                    {item.description}
                </Text>
                <Text
                    style={{
                        backgroundColor: theme.colors.primary,
                        color: 'white',
                        flexGrow: 0,
                        alignSelf: 'flex-start',
                        borderRadius: 4,
                        padding: 4
                    }}
                >
                    {item.language}
                </Text>
            </View>
        </View>
    )
}

export default RepositoryItemProfile
