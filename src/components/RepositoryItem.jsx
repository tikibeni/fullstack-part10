import { View, Image } from 'react-native';
import Text from './Text'
import theme from '../theme';

const RepositoryItem = ({ item }) => {
    const numberCruncher = num => {
        const crunch = num / 1000
        if (crunch > 1) {
            return Math.round(crunch * 10) / 10 + 'k'
        }
        return num
    }

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', padding: 15 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Image
                        style={theme.images.tinylogo}
                        source={{uri: item.ownerAvatarUrl}}
                    />
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 20, marginRight: 10, justifyContent: 'space-evenly', flexShrink: 1 }}>
                    <Text
                        fontWeight='bold'
                        style={{ flexWrap: 'wrap', paddingBottom: 5 }}
                    >
                        {item.fullName}
                    </Text>
                    <Text
                        color='textSecondary'
                        style={{ flexWrap: 'wrap', paddingBottom: 5 }}
                    >
                        {item.description}
                    </Text>
                    <Text
                        style={{
                            backgroundColor: theme.colors.primary,
                            color: 'white',
                            flexGrow: 0,
                            alignSelf: 'flex-start',
                            borderRadius: 4,
                            padding: 4
                        }}
                    >
                        {item.language}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingBottom: 10, justifyContent: 'space-evenly'}}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text fontWeight='bold'>{numberCruncher(item.stargazersCount)}</Text>
                    <Text color='textSecondary'>Stars</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text fontWeight='bold'>{numberCruncher(item.forksCount)}</Text>
                    <Text color='textSecondary'>Forks</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text fontWeight='bold'>{numberCruncher(item.reviewCount)}</Text>
                    <Text color='textSecondary'>Reviews</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text fontWeight='bold'>{numberCruncher(item.ratingAverage)}</Text>
                    <Text color='textSecondary'>Rating</Text>
                </View>
            </View>
        </View>
    )
}

export default RepositoryItem;