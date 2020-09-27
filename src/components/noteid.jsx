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
            prevNote: null,
            //** Change This! **//
            scale: Util.getScale('c'),
            input: null,
            info: "click play to start",
            gameStart: false,
        }

        this.startGame = this.startGame.bind(this);
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
                <p>{this.state.info + (this.state.prevNote ? this.state.prevNote : "").toUpperCase()}</p>
                <Score score={this.state.score} total={this.state.total} />
                <input type="text" onKeyPress={event => this.checkInput(event)} onChange={e => {this.setInput(e.target.value);}}
                disabled = {(this.state.gameStart) ? "" : "disabled"}/>
                <div>
                    <button onClick={() => {if(this.state.currNote) {synth.triggerAttackRelease(this.state.currNote, "4n");}}}>Replay</button>
                    <button disabled={(this.state.gameStart) ? "disabled" : ""} onClick={this.startGame}>Play</button>
                </div>
            </div>
        );
    }

    startGame() {
        this.setState({
            gameStart: true,
            info: "Prev: ",
        });
        this.gameTick();
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
            this.setState({prevNote: this.state.currNote.charAt(0)});
            if(this.state.input == this.state.currNote.charAt(0))  {
                this.setState({ score: this.state.score + 1 });
            }
            e.target.value="";
            this.gameTick();
        }
    }

    async setInput(value) {
        await this.setState({input: value});
    }
    
}

export default NoteID;