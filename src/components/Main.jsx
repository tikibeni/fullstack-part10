import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from "./SignIn";

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
                    <Route exact path="/login" element={<SignIn />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </View>
        </>
    );
};

export default Main;
