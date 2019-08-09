import React from "react";
import useForm from 'react-hook-form'


const RecommendationForm: React.FC<any> = () => {
    const { register, handleSubmit, watch, errors} = useForm();
    const onSubmit = (data: Record<string, any>) => { console.log(data) };

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
        </div>
    )
};

export default RecommendationForm

