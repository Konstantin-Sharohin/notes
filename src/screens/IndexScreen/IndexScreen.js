import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { Context } from "../../context/NoteContext";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

const IndexScreen = ({ navigation }) => {
   const { state, deleteNote, getNotes } = useContext(Context);

   useEffect(() => {
      getNotes();

      const listener = navigation.addListener("didFocus", () => {
         getNotes();
      });

      return () => {
         listener.remove();
      };
   }, []);

   return (
      <View>
         <FlatList
            data={state}
            keyExtractor={(note) => note.id.toString()}
            renderItem={({ item }) => {
               return (
                  <TouchableOpacity
                     onPress={() => {
                        navigation.navigate("Show", { id: item.id });
                     }}
                  >
                     <View style={styles.container}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity
                           onPress={() => {
                              deleteNote(item.id);
                           }}
                        >
                           <Feather name="trash" style={styles.icon} />
                        </TouchableOpacity>
                     </View>
                  </TouchableOpacity>
               );
            }}
         />
      </View>
   );
};

IndexScreen.navigationOptions = ({ navigation }) => {
   return {
      headerRight: () => (
         <TouchableOpacity
            onPress={() => {
               navigation.navigate("Create");
            }}
         >
            <Feather name="plus" style={styles.headerIcon} />
         </TouchableOpacity>
      ),
   };
};

export default IndexScreen;
