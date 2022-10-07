import * as yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { CREATE_REVIEW } from "../graphql/mutations";
import ReviewForm from "./ReviewForm";

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required("Repository owner name is required"),
    repoName: yup
        .string()
        .required("Repository name is required"),
    rating: yup
        .number()
        .min(0, "Rating cannot be less than 0")
        .max(100, "Rating cannot be more than 100")
        .required("Rating is required")
})

const Review = () => {
    const [addReview] = useMutation(CREATE_REVIEW)
    const navigate = useNavigate()

    const initialValues = {
        ownerName: '',
        repoName: '',
        rating: '',
        review: ''
    }

    const onSubmit = async (values) => {
        const { ownerName, repoName, rating, review } = values

        try {
            const repodata = await addReview({ variables: {
                review: {
                    repositoryName: repoName,
                    ownerName: ownerName,
                    rating: parseInt(rating),
                    text: review
                }
            }})
            navigate(`/${repodata.data.createReview.repositoryId}`)
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default Review
