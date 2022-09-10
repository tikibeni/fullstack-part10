import { Pressable, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={{ backgroundColor: 'white', flexDirection: 'column', padding: 20 }}>
            <FormikTextInput name="username" placeholder="Username" style={{  borderRadius: 3, borderWidth: 1, paddingHorizontal: 15, height: 40}} />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry style={{ marginTop: 10, borderRadius: 3, borderWidth: 1, paddingHorizontal: 15, height: 40}} />
            <Pressable onPress={onSubmit} style={{ alignItems: 'center', backgroundColor: '#0366d6', borderRadius: 3, padding: 10, marginTop: 10 }}>
                <Text fontWeight='bold' color='header'>Sign in</Text>
            </Pressable>
        </View>
    )
}

export default SignInForm
