import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import SingleRepository from "./SingleRepository";
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Review from "./Review";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#e1e4e8'
    },
});

const Main = () => {
    return (
        <>
            <View>
                <AppBar />
            </View>
            <View style={styles.container}>
                <Routes>
                    <Route exact path="/" element={<RepositoryList />} />
                    <Route path="/:id" element={<SingleRepository />} />
                    <Route exact path="/review" element={<Review />} />
                    <Route exact path="/login" element={<SignIn />} />
                    <Route exact path="/register" element={<SignUp />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </View>
        </>
    );
};

export default Main;
