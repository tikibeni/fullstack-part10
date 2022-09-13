import * as yup from "yup";
import { Formik } from "formik";
import useSignIn from "../hooks/useSignIn";
import SignInForm from './SignInForm';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
})

const SignIn = () => {
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    const initialValues = {
        username: '',
        password: ''
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
};

export default SignIn;
