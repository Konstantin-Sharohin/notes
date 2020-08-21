import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Context } from "../../context/NoteContext";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";

const ShowScreen = ({ navigation }) => {
   const { state } = useContext(Context);

   const note = state.find((note) => note.id === navigation.getParam("id"));

   return note ? (
      <View style={styles.container}>
         <Text style={styles.title}>{note.title}</Text>
         <Text style={styles.content}>{note.content}</Text>
      </View>
   ) : (
      <Text>Loading</Text>
   );
};

ShowScreen.navigationOptions = ({ navigation }) => {
   return {
      headerRight: () => (
         <TouchableOpacity
            onPress={() => {
               navigation.navigate("Edit", { id: navigation.getParam("id") });
            }}
         >
            <FontAwesome name="pencil" style={styles.headerIcon} />
         </TouchableOpacity>
      ),
   };
};

export default ShowScreen;
