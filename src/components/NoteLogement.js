import { createElement } from "react";

function NoteLogement({ rate }) {

    let emptyArray = [];
    let rateArray = [];
    
    if (rate < 5) {
        for (let i = 0; i < 5 - rate; i++) {
            emptyArray.push(createElement("div",{ className: "empty", key: [i]},""))
        }
    }
    for (let i = 0; i < rate; i++) {
        rateArray.push(createElement("div",{ className: "fill", key: [i]},""))
        
    }
    
return (

    <div className='note-logement'>
        {rateArray}
        {emptyArray}
    </div>

) 

}

export default NoteLogement



