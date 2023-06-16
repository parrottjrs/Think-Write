import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { v4 as uuid } from "uuid";

export default function Editor() {
  const getNotes = () => {
    const maybeNotes = localStorage.getItem("notes");
    return maybeNotes ? JSON.parse(maybeNotes) : [];
  };

  let notes = getNotes();

  const [note, setNote] = useState({
    id: uuid(),
    text: JSON.parse(localStorage.getItem("text")),
  });

  const [text, setText] = useState(note.text);

  const saveNote = (updated) => {
    const existing = notes.find((note) => note.id == updated.id);

    if (existing) {
      existing.text = updated.text;
    } else {
      notes.push(updated);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
    setNote({
      ...note,
      text: text,
    });
    saveNote(note);
  }, [text]);

  return (
    <div className="w-100 flex flex-col">
      <ReactQuill theme="snow" value={text} onChange={setText} />
      <SaveButton />
    </div>
  );
}
