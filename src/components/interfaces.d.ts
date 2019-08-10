import { ButtonProps } from "react-bootstrap";

interface CustomHeader {
    readonly content: string
}

interface SendButton extends ButtonProps {
    readonly content: string
}