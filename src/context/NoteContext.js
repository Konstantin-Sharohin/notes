import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
   switch (action.type) {
      case "GET_NOTES":
         return action.payload;
      case "EDIT_NOTE":
         return state.map((note) => {
            return note.id === action.payload.id ? action.payload : note;
         });
      case "DELETE_NOTE":
         return state.filter((note) => note.id !== action.payload);
      default:
         return state;
   }
};

const getNotes = (dispatch) => {
   return async () => {
      const response = await jsonServer.get("/notes");

      dispatch({ type: "GET_NOTES", payload: response.data });
   };
};

const addNote = (dispatch) => {
   return async (title, content, callback) => {
      await jsonServer.post("/notes", { title, content });

      if (callback) {
         callback();
      }
   };
};

const deleteNote = (dispatch) => {
   return async (id) => {
      await jsonServer.delete(`/notes/${id}`);

      dispatch({ type: "DELETE_NOTE", payload: id });
   };
};

const editNote = (dispatch) => {
   return async (id, title, content, callback) => {
      await jsonServer.put(`/notes/${id}`, { title, content });

      dispatch({
         type: "EDIT_NOTE",
         payload: { id, title, content },
      });
      if (callback) {
         callback();
      }
   };
};

export const { Context, Provider } = createDataContext(
   blogReducer,
   { getNotes, addNote, editNote, deleteNote },
   []
);
