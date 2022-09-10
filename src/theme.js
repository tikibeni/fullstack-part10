import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        mainBackground: '#e1e4e8',
        repItemBackground: 'white'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System'
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    images: {
        tinylogo: {
            width: 50,
            height: 50,
            paddingLeft: 20,
            borderRadius: 4
        }
    },
};

export default theme;
