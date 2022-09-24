import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";

import SignInForm from './SignInForm';
import useAuth from "../hooks/useAuth";

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
})

export const SignInContainer = ({ onSubmit }) => {
    const initialValues = {
        username: '',
        password: ''
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

const SignIn = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signIn({ username, password });
            navigate('/', { replace: true })
        } catch (e) {
            console.log(e);
        }
    };

    return <SignInContainer onSubmit={onSubmit} />
};

export default SignIn;
