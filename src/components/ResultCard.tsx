import React from "react";
import { ResultsContainer } from "./interfaces";
import Card from "react-bootstrap/Card";

const ResultCard: React.FC<ResultsContainer> = props => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{props.newsTitle}</Card.Title>
                    <Card.Subtitle> {props.date}</Card.Subtitle>
                    <Card.Link href={props.link}>Source</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )

};

export default ResultCard