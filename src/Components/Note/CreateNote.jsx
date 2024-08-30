import React from "react";
import Note from "./Note";

// const CreateNote = ({ noteData }) => {
//   return(  <>
//     {noteData.map(({ id, taskTitle, taskDesc }) => (
//       <Note key={id} title={taskTitle} description={taskDesc} />
//     ))}
//   </>;)

// };

const CreateNote = ({ noteData }) => {
  return (
    <>
      {noteData.map(({ id, taskTitle, taskDesc }) => (
        <Note key={id} title={taskTitle} description={taskDesc} />
      ))}
    </>
  );
};

export default CreateNote;
