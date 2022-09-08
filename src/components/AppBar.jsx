import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 15,
        paddingLeft: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        opacity: 0.85
    },
});

const onPressFunction = () => {
    // logic here
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPressFunction}>
                <Text
                    fontSize="subheading"
                    color="header"
                    fontWeight="bold"
                >
                    Repositories
                </Text>
            </Pressable>
        </View>
    );
};

export default AppBar;