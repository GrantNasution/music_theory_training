const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

export function getScale(opts) {
    return notes;
}

export function randNote(scale, octave) {
    return scale[Math.floor(Math.random() * 7)] + octave;
}