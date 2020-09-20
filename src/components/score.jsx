import React from "react";

function Score(props) {
    return (
        <div>
            {props.score} / {props.total}
        </div>
    );
}

export default Score;