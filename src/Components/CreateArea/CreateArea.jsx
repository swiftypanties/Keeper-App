import React from "react";

function CreateArea(props) {

  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");

  function handleContentChange(event) {
    const newContent = event.target.value;
    setContent(newContent);

  }
  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  return (
    <div>
      <form>
        <input onChange={handleTitleChange} name="title" placeholder="Title" value={title}/>
        <textarea onChange={handleContentChange} name="content" placeholder="Take a note..." rows="3" value={content}/>
        <button 
          type="button"
          onClick={()=>{
          props.onAdd(
            {
              title: title,
              content: content
            }
          );
          setContent("");
          setTitle("");
          }}
          >Add</button>

      </form>
    </div>
  );
}

export default CreateArea;

