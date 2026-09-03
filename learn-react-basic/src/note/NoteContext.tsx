import * as React from "react";
import type {NoteObject} from "./Note.tsx";
import type {ActionReducer} from "./NoteApp.tsx";
import type {Dispatch} from "react";

export const NotesContext = React.createContext<NoteObject[] | null>(null);

export const NotesDispatchContext = React.createContext<Dispatch<ActionReducer> | null>(null);