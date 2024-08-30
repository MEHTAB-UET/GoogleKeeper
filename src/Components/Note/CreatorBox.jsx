import React, { useState } from "react";
import "./box.css";

export const CreatorBox = (props) => {
  const [note, setNote] = useState({
    id: "",
    taskTitle: "",
    taskDesc: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submit(e) {
    props.onAdd(note);
    setNote({ taskTitle: "", taskDesc: "" });
    // e.preventDeafault();
  }

  return (
    <>
      <div className="container">
        <div className="inputfield">
          <input
            type="text"
            name="taskTitle"
            value={note.taskTitle}
            id="1"
            placeholder="Add Title"
            className="inputTitle"
            onChange={handlechange}
          />
          <textarea
            name="taskDesc"
            value={note.taskDesc}
            placeholder="Add Note..."
            className="descInput"
            onChange={handlechange}
          ></textarea>
          <button className="btn" onClick={submit}>
            +
          </button>
        </div>
      </div>
    </>
  );
};
