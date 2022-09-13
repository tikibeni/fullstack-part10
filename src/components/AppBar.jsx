import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Link, useNavigate } from "react-router-native";
import { useQuery } from "@apollo/client";
import { useState } from "react";

import { ME } from "../graphql/queries";
import useAuth from "../hooks/useAuth";
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
    const [user, setUser] = useState(null)
    const { signOut } = useAuth()
    const navigate = useNavigate()

    useQuery(ME, {
        onCompleted: (data) => {
            if (data && data.me !== null) setUser(data.me.username)
        },
        fetchPolicy: 'network-only'
    })

    const logout = async () => {
        await signOut()
        setUser(null)
        navigate("/")
    }

    const userTab = () => {
        if (user !== null) {
            return (
                <Pressable onPress={logout}>
                    <Text fontSize="subheading" fontWeight="bold" color="header">
                        Sign out
                    </Text>
                </Pressable>
            )
        }
        return (
            <Pressable>
                <Link to="/login">
                    <Text fontSize="subheading" fontWeight="bold" color="header">
                        Sign in
                    </Text>
                </Link>
            </Pressable>
        )
    }

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
                {userTab()}
            </ScrollView>
        </View>
    );
};

export default AppBar;
