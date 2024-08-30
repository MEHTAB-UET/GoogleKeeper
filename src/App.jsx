import { useState } from "react";
import "./app.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CreateNote from "./Components/Note/CreateNote";
import { CreatorBox } from "./Components/Note/CreatorBox";

function App() {
  const [array, setArray] = useState([]);

  function addNote(note) {
    setArray((pre) => {
      const newNote = { ...note, id: Date.now() };
      return [...pre, newNote];
    });
  }

  return (
    <>
      <div className="app">
        {" "}
        <Header />
        <CreatorBox onAdd={addNote} />
        <CreateNote noteData={array} />
        <Footer />
      </div>
    </>
  );
}

export default App;
