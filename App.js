import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { Provider } from "./src/context/NoteContext";
import IndexScreen from "./src/screens/IndexScreen/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen/CreateScreen";
import EditScreen from "./src/screens/EditScreen/EditScreen";

const navigator = createStackNavigator(
   {
      Index: IndexScreen,
      Show: ShowScreen,
      Create: CreateScreen,
      Edit: EditScreen,
   },
   {
      initialRouteName: "Index",
      defaultNavigationOptions: {
         title: "Notes",
      },
   }
);

const App = createAppContainer(navigator);

export default () => {
   return (
      <Provider>
         <App />
      </Provider>
   );
};
