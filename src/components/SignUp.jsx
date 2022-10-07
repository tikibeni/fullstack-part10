import * as yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { SIGN_UP } from "../graphql/mutations";
import SignUpForm from './SignUpForm';
import useAuth from "../hooks/useAuth";

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1, "Username cannot be shorter than 1 character")
        .max(30, "Username cannot be longer than 30 characters")
        .required('Username is required'),
    password: yup
        .string()
        .min(5, "Password cannot be shorter than 5 characters")
        .max(50, "Password cannot be longer than 50 characters")
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
})

const SignUp = () => {
    const [signUp] = useMutation(SIGN_UP)
    const navigate = useNavigate()
    const { signIn } = useAuth()

    const initialValues = {
        username: '',
        password: '',
        passwordConfirmation: ''
    }

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signUp({ variables: {
                user: {
                    username,
                    password
                }
            }});
            await signIn({ username, password });
            navigate('/', { replace: true })
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    )
};

export default SignUp;
