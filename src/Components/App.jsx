import React from "react";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import * as Note from "./Note/Note"
import notes from "../notes"


function App(){
    return(
        <div>
            <Header></Header>
            {notes.map(Note.createNote)}
            <Footer></Footer>
        </div>
    )

}


export default App;