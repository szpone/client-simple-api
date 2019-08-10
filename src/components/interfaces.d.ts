import { ButtonProps } from "react-bootstrap";

interface CustomHeader {
    readonly content: string
}

interface SendButton extends ButtonProps {
    readonly content: string
}

interface ResultsContainer {
    readonly date: string;
    readonly link: string;
    readonly newsTitle: string
}