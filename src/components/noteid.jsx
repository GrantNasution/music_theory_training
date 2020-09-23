import React from 'react'
import { Link } from 'react-router-dom';
import * as Tone from 'tone';
import * as Util from '../utils/utils';
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

        this.gameTick = this.gameTick.bind(this);
        this.newNote = this.newNote.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.setInput = this.setInput.bind(this);
    }

    render() {
        return (
            <div>
                <Link to="/">Return</Link>
                <Title value="Note ID Game" />
                <Score score={this.state.score} total={this.state.total} />
                <input type="text" onKeyPress={this.checkInput} onChange={event => this.setInput(event.target.value)}></input>
                <div>
                    <button onClick={() => {if(this.state.currNote) {synth.triggerAttackRelease(this.state.currNote, "4n");}}}>Reset</button>
                    <button onClick={this.gameTick}>Play</button>
                </div>
            </div>
        );
    }

    async gameTick() {
        this.setState({ total: this.state.total + 1 });
        await this.newNote();
        synth.triggerAttackRelease(this.state.currNote, "4n");
    }

    async newNote() {
        let newNote;
        do {
            newNote = Util.randNote(this.state.scale, 4);
        } while (this.state.currNote == newNote)
        await this.setState({ currNote: newNote });
    }

    checkInput(e) {
        if(e.key === "Enter") {
            console.log(this.state.input + " == " + this.state.currNote);
            if(this.state.input == this.state.currNote.charAt(0))  {
                this.setState({ score: this.state.score + 1 });
            }
            this.gameTick();
        }
    }

    async setInput(value) {
        await this.setState({input: value});
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


export default NoteID;