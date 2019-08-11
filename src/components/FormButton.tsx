import React from "react";
import { Button } from 'react-bootstrap';
import { SendButton } from "./interfaces";


const FormButton: React.FC<SendButton> = props => {
    return (
        <div>
            <Button variant={props.variant} type={props.type}>{ props.content }</Button>
        </div>
    )
};

export default FormButton