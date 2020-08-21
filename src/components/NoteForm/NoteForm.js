import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { styles } from "./styles";

const NoteForm = ({ onSubmit, initialValues }) => {
   const [title, setTitle] = useState(initialValues.title);
   const [content, setContent] = useState(initialValues.content);

   return (
      <View style={styles.container}>
         <Text style={styles.label}>Enter Title:</Text>
         <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
         <Text style={styles.label}>Enter Content:</Text>
         <TextInput
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
         />
         <Button title="Save Note" onPress={() => onSubmit(title, content)} />
      </View>
   );
};

NoteForm.defaultProps = {
   initialValues: {
      title: "",
      content: "",
   },
};

export default NoteForm;
