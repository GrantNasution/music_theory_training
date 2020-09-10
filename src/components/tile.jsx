import React from 'react';

function Tile(props) {
    return (
        <a class="Tile" >
            {props.value}
        </a>
    );   
}

export default Tile;