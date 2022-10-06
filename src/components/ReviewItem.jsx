import { View } from "react-native-web";

import { dateCleaner } from "../utils/numberFormatter";
import theme from "../theme";
import Text from "./Text";

const ReviewItem = ({ review }) => {
    // FIXME: yup time for some purkkaviritelmä. CSS is fun :)
    const scorePaddingHotfix = (score) => {
        if (score === 100) return 9.5
        return 14
    }

    return (
        <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 5 }}>
            <View style={{ flexDirection: 'column', padding: 20, alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <Text fontWeight='bold' color='primary' style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 16,
                        paddingHorizontal: scorePaddingHotfix(review.node.rating),
                        paddingVertical: 14,
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        borderWidth: 2,
                        borderColor: theme.colors.primary
                    }}>
                        {review.node.rating}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', paddingVertical: 10, flexShrink: 1}}>
                <Text fontWeight='bold' style={{ paddingBottom: 5 }}>{review.node.user.username}</Text>
                <Text color='textSecondary' style={{ paddingBottom: 8 }}>{dateCleaner(review.node.createdAt)}</Text>
                <Text style={{ flexWrap: 'wrap', paddingRight: 10 }}>{review.node.text}</Text>
            </View>
        </View>
    )
}

export default ReviewItem
