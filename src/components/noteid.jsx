import React from 'react'
import { Link } from 'react-router-dom';
import * as Tone from 'tone';
import * as Util from '../utilities/utils';
import Title from './title';
import Score from './score';

const synth = new Tone.Synth().toDestination();

class NoteID extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            total: 0,
            currNote: null,
            //** Change This! **//
            scale: Util.getScale('c'),
            input: null,
        }

        this.startGame = this.startGame.bind(this);
        this.playNote = this.playNote.bind(this);
    }

    render() {
        return (
            <div>
                <Link to="/">Return</Link>
                <Title value="Note ID Game" />
                <Score score={this.state.score} total={this.state.total} /><input type="text"></input>
                {/* <input type="text" onKeyPress={checkInput} onChange={event  => setInput(event.target.value)}></input> */}
                <div></div>
                <button onClick={this.startGame}>Play</button>
            </div>
        );
    }

    startGame() {
        this.playNote();
    }

    playNote() {
        this.setState({ total: this.state.total + 1 });
        let newNote;
        do {
            newNote = Util.randNote(this.state.scale, 4);
        } while (this.state.currNote == newNote)
        this.setState({ currNote: newNote });
        synth.triggerAttackRelease(this.state.currNote, "4n");
    }
}

// function NoteID() {
//     return (
//         <div>
//             <Link to="/">Return</Link>
//             <Title value="Note ID Game" />
//             <Score score={score} total={total} />
//             <input type="text"></input>
//             {/* <input type="text" onKeyPress={checkInput} onChange={event  => setInput(event.target.value)}></input> */}
//             <div></div>
//             <button onClick={startGame}>Play</button>
//         </div>
//     );
// }

// function checkInput(e) {
//     if(e.key === "Enter") {
//         console.log("enter");
//         let scoreOpts;
//         if(input == currNote)  {
//             scoreOpts = {"score": "add"};
//         }
//         setScore(scoreOpts);
//     }
//     playNote();
// }


// function setInput(value) {
//     input = value;
// }

export default NoteID;