import React, { useEffect, useState} from 'react';

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
            <h1> No watch? No problem! Here's current time! </h1>

            <div>{ currentTime }</div>
        </div>
    )
};

export default CurrentTime