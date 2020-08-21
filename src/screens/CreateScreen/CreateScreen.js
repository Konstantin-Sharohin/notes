import React, { useContext } from "react";

import { Context } from "../../context/NoteContext";
import NoteForm from "../../components/NoteForm/NoteForm";

import { styles } from "./styles";

const CreateScreen = ({ navigation }) => {
   const { addNote } = useContext(Context);

   return (
      <NoteForm
         onSubmit={(title, content) => {
            addNote(title, content, () => navigation.navigate("Index"));
         }}
      />
   );
};

export default CreateScreen;
