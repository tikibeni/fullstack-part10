import { View, Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        opacity: 0.7
    },
    label: {
        fontSize: 24,
        color: 'white'
    }
});

const onPressFunction = () => {
    // logic here
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPressFunction}>
                <Text style={styles.label}>Repositories</Text>
            </Pressable>
        </View>
    );
};

export default AppBar;