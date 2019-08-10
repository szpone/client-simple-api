import React, {useState} from "react";
import useForm from 'react-hook-form'
import FormButton from "./FormButton";
import { Form } from 'react-bootstrap';


const RecommendationForm: React.FC<any> = () => {
    const [values, setValues] = useState<any>("");
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: Record<string, any>) => {
        fetch("http://localhost:8000/recommendations", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Error! " + response.statusText)
            })
            .then(res => {
                setValues(res.message)
            })
            .catch(error => setValues(error.message))
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="searchText">
                    <Form.Label>Search text</Form.Label>
                    <Form.Control type="text" name="text" ref={register} />
                </Form.Group>
                <FormButton variant="primary" type="submit" content="Send"/>
            </Form>

            <div>
                { values }
            </div>
        </div>
    )
};

export default RecommendationForm

