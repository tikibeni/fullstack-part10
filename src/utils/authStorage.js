import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    // Get the access token for the storage
    async getAccessToken() {
        return await AsyncStorage.getItem(
            `${this.namespace}:token`
        )
    }

    // Add the access token to the storage
    async setAccessToken(accessToken) {
        await AsyncStorage.setItem(
            `${this.namespace}:token`,
            accessToken
        )
    }

    // Remove the access token from the storage
    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:token`)
    }
}

export default AuthStorage;
