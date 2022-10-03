import { Pressable, View } from "react-native";
import { openURL } from "expo-linking";

import Text from "./Text";
import theme from "../theme";

const Githubbutton = ({ item }) => {
    const openGithub = () => {
        // eslint-disable-next-line no-unused-vars
        openURL(item.url).then(r => console.log('Repo opened!'))
    }

    return (
        <View style={{ flexDirection: 'row', paddingVertical: 5, justifyContent: 'space-evenly', backgroundColor: theme.colors.repItemBackground}}>
            <Pressable onPress={openGithub} style={{
                flexDirection: 'row',
                flexGrow: 1,
                padding: 20,
                marginVertical: 10,
                marginHorizontal: 15,
                borderRadius: 4,
                backgroundColor: theme.colors.primary,
                justifyContent: 'center'
            }}>
                <Text color="header" fontWeight='bold'>Open in GitHub</Text>
            </Pressable>
        </View>
    )
}

export default Githubbutton