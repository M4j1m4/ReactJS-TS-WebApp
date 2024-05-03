// react-simple-chatbot.d.ts
declare module 'react-simple-chatbot' {
    // Add type declarations for the components and functions you're using from the package
  }
  declare module 'react-simple-chatbot' {
    export const ChatBot: React.ComponentType<any>;
  }

  declare module 'react-simple-chatbot' {
    interface Step {
        id: string;
        message?: string;
        trigger?: string;
        options?: Array<{ value: string; label: string; trigger: string }>;
        end?: boolean;
    }

    interface ChatBotProps {
        steps: Step[];
        [key: string]: any;
    }

    const ChatBot: React.FC<ChatBotProps>;
    export default ChatBot;
}
