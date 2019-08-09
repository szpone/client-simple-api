import React, {useState} from "react";
import useForm from 'react-hook-form'


const RecommendationForm: React.FC<any> = () => {
    const [value, setValue] = useState<string>("");
    const { register, handleSubmit, watch, errors} = useForm();
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
            .then(res => JSON.stringify(res.message))
            .catch(error => setValue(error.message))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Search text</label>
                </div>
                <div>
                <input type="text" name="text" defaultValue="Search text" ref={register} />
                </div>
                <input type="submit" />
            </form>

            <div>{ value }</div>
        </div>
    )
};

export default RecommendationForm

