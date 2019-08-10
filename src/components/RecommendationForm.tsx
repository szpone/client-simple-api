import React, {useState} from "react";
import useForm from 'react-hook-form'
import FormButton from "./FormButton";
import { Form } from 'react-bootstrap';
import ResultCard from "./ResultCard";


const RecommendationForm: React.FC<any> = () => {
    const [values, setValues] = useState<Array<Record<string, any>>>([{}]);
    const [isVisible, setVisible] = useState<boolean>(false);
    const { register, handleSubmit, errors } = useForm();


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
                setValues(res);
                setVisible(true);

            })
            .catch(error => setValues(error.message))
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="searchText">
                    <Form.Label>Search text</Form.Label>
                    <Form.Control type="text" name="text" ref={register({ required: true })} />
                    <span>{ errors.text && "Search text is required" }</span>
                </Form.Group>
                <FormButton variant="primary" type="submit" content="Send"/>
            </Form>

                { isVisible &&

                    values.map((val: Record<string, any>, index: any) =>
                        <ResultCard newsTitle={val.title}
                                    date={val.published}
                                    link={val.url}
                                    key={index}
                        />)
                }
        </div>
    )
};

export default RecommendationForm

