import { Message } from "@/lib/validators/message";
import { nanoid } from "nanoid";
import { ReactNode, createContext, useState } from "react";

export const MessagesContext = createContext<{
    messages: Message[]
    isMessageUpdating: boolean
    addMessage: (message: Message) => void
    removeMessage: (id: string) => void
    updateMessage: (id: string, updateFn: (prevText: string) => string) => void
    setIsMessageUpdating: (isUpdating: boolean) => void
}>({
    messages: [],
    isMessageUpdating: false, 
    addMessage: () => {},
    removeMessage: () => {}, 
    updateMessage: () => {}, 
    setIsMessageUpdating: () => {},
})

export function MessagesProvider({children}: {children: ReactNode}) {
    const [isMessageUpdating, setIsMessageUpdating ] = useState<boolean>(false);
    const [ messages, setMessages ] = useState<Message[]>([
        {
            id: nanoid(), 
            text: 'Hello, how can I help you?',
            isUserMessage: false
        }
    ])

    const addMessage = (message: Message) => {
        setMessages((prev: Message[]) => [...prev, message])
    }

    const removeMessage = (id: string) => {
        setMessages((prev: Message[]) => prev.filter((message: Message) => message.id !== id))
    }

    const updateMessage = (id: string, updateFn: (prevText: string) => string) => {
        setMessages((prev: Message[]) => prev.map((message) => {
            if(message.id === id) {
                return { ...message, text: updateFn(message.text)}
            }
            return message
        }))
    }

    return <MessagesContext.Provider value={{
        messages,
        isMessageUpdating,
        addMessage, 
        removeMessage,
        updateMessage,
        setIsMessageUpdating
    }}>
        {children}
    </MessagesContext.Provider>
}