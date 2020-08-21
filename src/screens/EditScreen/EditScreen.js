import React, { useContext } from "react";

import { Context } from "../../context/NoteContext";

import NoteForm from "../../components/NoteForm/NoteForm";

import { styles } from "./styles";

const EditScreen = ({ navigation }) => {
   const { state, editNote } = useContext(Context);

   const note = state.find((note) => note.id === navigation.getParam("id"));

   return (
      <NoteForm
         initialValues={{ title: note.title, content: note.content }}
         onSubmit={(title, content) => {
            editNote(note.id, title, content, () => navigation.pop());
         }}
      />
   );
};

export default EditScreen;
