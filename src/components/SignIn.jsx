import * as yup from "yup";
import { Formik } from "formik";
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
    const onSubmit = (values) => {
        console.log(values)
    }

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
