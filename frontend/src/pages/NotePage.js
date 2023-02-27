import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';


const NotePage = () => {

  let { id } = useParams();
  let noteId = id;
  let [note, setNote] = useState(null);
  let navigate = useNavigate();

  useEffect(() =>{
    getNote();
  }, [noteId]);
  
  let getNote = async () => {
    if (noteId === "new"){
      return 0
    }
    const response = await fetch(`/api/notes/${noteId}`);
    const data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    fetch(`/api/notes/create`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(note)
    });
  };

  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/update`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(note)
    });
  };

  const handleSubmit = () =>{
    if (noteId !== 'new' && !note.body){
      deleteNote()

    }else if(noteId !== 'new'){
      updateNote()
      
    }else if(noteId === 'new' && note.body !== null){
      createNote()

      
    }

    navigate('/');
    window.location.reload();
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/delete`, {
      method: "DELETE",
      header : {
        'Content-Type': 'application/json'
      }
    })

    navigate('/');
    
  };



  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
