import React from 'react';
import Title from './title';
import Tile from './tile';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <div id="WP-Title">
                    <Title value="Music Theory"></Title>
                    <Title value="Games"></Title>
                </div>
                <div class="Row" id="WP-Options">
                    <Tile value="Ear"></Tile>
                    <Tile value="Sheet"></Tile>
                </div>
            </>
        );
    }
}


export default HomePage;