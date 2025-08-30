import React from "react";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Note from "./Note/Note"
import CreateArea from "./CreateArea/CreateArea";



function App(){

    const [notesList, setNotesList] = React.useState([]);


    function addNote(noteInfo){
        setNotesList((prevNote)=>{
            return [...prevNote, {
                title: noteInfo.title,
                content: noteInfo.content
            }]
        });
    }
    function deleteNote(id){
      setNotesList((prevList) => {
        return prevList.filter((item, index) =>{
          return index!=id;
        })
      })
    }
    

    
    return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      <ul>
        {notesList.map((note, index)=>(
          <Note
            key={index}
            id={index}
            content={note.content}
            title={note.title}
            onDelete={deleteNote}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );

}


export default App;