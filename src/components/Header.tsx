import React from "react";

import { CustomHeader } from "./interfaces";

const Header: React.FC<CustomHeader> = props => {
    return (
        <div>
            <h2> { props.content }</h2>
        </div>
    )
};

export default Header