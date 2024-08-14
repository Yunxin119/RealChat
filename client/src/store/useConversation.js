import { create } from 'zustand'

// zustand is a react state management library, in this project we use it to manage the conversation state
// return an object
const useConversation = create((set) => ({
    selectedConversation: null, // the selected conversation is null by default
    setSelectedConversation: (selectedConversation) => set({selectedConversation}), // this is to set the selected conversation
    messages: [], // the messages array is empty by default
    setMessages: (messages) => set({messages}), // this is to set the messages
  }))

  export default useConversation;