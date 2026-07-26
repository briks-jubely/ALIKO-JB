import { create } from "zustand";

export const useAlikoNavStore = create((set)=>({

active:"HOME",

setActive:(page)=>set({active:page}),

aiOpen:false,

openAI:()=>set({aiOpen:true}),

closeAI:()=>set({aiOpen:false})

}));
