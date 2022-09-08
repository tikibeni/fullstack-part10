import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";

import Text from './Text';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        opacity: 0.85
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Link to="/">
                    <Text fontSize="subheading" fontWeight="bold" color="header">
                        Repositories
                    </Text>
                </Link>
            </Pressable>
            <Pressable>
                <Link to="/login">
                    <Text fontSize="subheading" fontWeight="bold" color="header">
                        Sign in
                    </Text>
                </Link>
            </Pressable>
        </View>
    );
};

export default AppBar;
