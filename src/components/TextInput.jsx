import { TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style];

    if (error !== undefined && error) {
        textInputStyle.push({ borderColor: 'red' })
    }

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
