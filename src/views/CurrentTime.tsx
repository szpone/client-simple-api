import React, { useEffect, useState} from 'react';
import Header from "../components/Header";

const CurrentTime: React.FC<Homepage> = () => {
    const [currentTime, setCurrentTime] = useState<Promise<any>>();

    useEffect(() => {
        fetch("http://localhost:8000/")
            .then(res => {
                res.json()
                    .then(response => setCurrentTime(response.message))

            })
    });

    return (
        <div>
            <Header content={"No watch? No problem! Here's current time!"}/>

            <div>{ currentTime }</div>
        </div>
    )
};

export default CurrentTime