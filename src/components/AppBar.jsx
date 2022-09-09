import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";

import Text from './Text';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        opacity: 0.85
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainer} >
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
            </ScrollView>
        </View>
    );
};

export default AppBar;
