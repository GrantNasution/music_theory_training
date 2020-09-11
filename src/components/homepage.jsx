import React from 'react';
import Title from './title';
import { Link } from 'react-router-dom';
import NoteID from './noteid';
import {Button} from 'react';

function HomePage() {
    return (
        <div>
            <div id="WP-Title">
                <Title value="Music Theory" />
                <Title value="Games" />
            </div>
            <div id="WP-Options" class="Row">
                <button class="Tile"><Link to="/NoteID">ear</Link></button>
                <button class="Tile"><Link to="/">sheet</Link></button>
                {/* <Tile value="ear"></Tile>
                <Tile value={(<Link to="/NoteID">ear</Link>)} />
                <Tile value={(<Link to="/">sheet</Link>)} /> */}
            </div>
        </div>
    );
}


export default HomePage;