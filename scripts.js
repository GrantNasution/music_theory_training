const synth = new Tone.Synth().toDestination();
const notes = ["C", "D", "E", "F", "G", "A", "B"];
const start = document.querySelector("button");
const scoreText = document.querySelector("p");
const input = document.querySelector("input");
const defOctave = 4;
const maxTotal = 10;
let note;
let score;
let total;

start.addEventListener("click", startGame);

// Generates random note given an integer octave 0-8
function generateNote(octave) {
    return notes[Math.floor(Math.random() * 7)] + octave;
}

// Sets text of score
function setScore() {
    scoreText.textContent = score + "/" + total;
}

// Processes user input and executes next step in the game
function gameTick(e) {
    if (e.code == "Enter") {
        if(input.value.toUpperCase() == note[0]) {
            score+=1;
        }
        setScore();
        playNote();
        total+=1;
    }
    if(total > maxTotal) {
        resetGame();
    }
}

// Plays different note than previous
function playNote() {
    let newNote;
    do {
        newNote = generateNote(defOctave);
    } while (note == newNote)
    note = newNote;
    console.log(note[0]);
    synth.triggerAttackRelease(note, "4n");
}

function startGame() {
    total = 0;
    score = 0;
    setScore();
    playNote();
    total+=1;

    input.removeAttribute("disabled");
    input.addEventListener("keypress", gameTick)
}

function resetGame() {
    input.disabled = true;
}