export const SAVE_CHARACTER = 'SAVE_CHARACTER'

export const saveCharacter = (character) => { //action creator 
    return { type: SAVE_CHARACTER, payload: character } //action object, //feature is a whole object btw 
}