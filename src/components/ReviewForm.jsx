import { Pressable, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={{ backgroundColor: 'white', flexDirection: 'column', padding: 20 }}>
            <FormikTextInput name="ownerName" placeholder="Repository owner name" style={{ borderRadius: 3, borderWidth: 1, paddingHorizontal: 15, height: 40 }}/>
            <FormikTextInput name="repoName" placeholder="Repository name" style={{ marginTop: 10, borderRadius: 3, borderWidth: 1, paddingHorizontal: 15, height: 40 }}/>
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" style={{ marginTop: 10, borderRadius: 3, borderWidth: 1, paddingHorizontal: 15, height: 40 }} />
            <FormikTextInput name="review" placeholder="Review" multiline={true} style={{ marginTop: 10, borderRadius: 3, borderWidth: 1, paddingHorizontal: 15, height: 40 }} />
            <Pressable onPress={onSubmit} style={{ alignItems: 'center', backgroundColor: '#0366d6', borderRadius: 3, padding: 10, marginTop: 10 }}>
                <Text fontWeight='bold' color='header'>Create a review</Text>
            </Pressable>
        </View>
    )
}

export default ReviewForm
