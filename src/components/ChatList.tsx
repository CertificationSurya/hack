import { useEffect, useState } from "react";
import ChatCard from "./ChatCard";

// hooks
import { useSocket } from "../context/SocketHook";
import { useAuth } from "../context/AuthHook";

//utils
import { serverApi } from "../utils/axios";

import type { ChattedUserType } from "../definations/frontendTypes";

const ChatList = () => {
    const { user } = useAuth();
    const { socket } = useSocket();
    
    const [unseenSenderId, setUnseenSenderId] = useState([] as string[])
    const [conversationPeople, setConversationPeople] = useState([] as ChattedUserType[]);

    useEffect(() => {
        const fetchUsers = async () => {

            if (user.userId) {
                try {
                    const res = await serverApi.get(`/users/conversation/${user.userId}`);
                    console.log(res)
                      setConversationPeople(res.data.chattedUsers);
                    // setConversationPeople(res.data.users);
                } catch (error) {
                    console.error("Error fetching users:", error);
                }
            }
        };

        fetchUsers();
    }, [user])

    useEffect(()=> {
        socket?.on("newConversationStart", (newConvoUser)=> {
            setConversationPeople(prev => [newConvoUser, ...prev]);
        })
        // TODO: new message notification
        socket?.on("receiveMessage", (saveMessage)=> {
            console.log("receivedMessage", saveMessage)
            if (!saveMessage.seen){
                setUnseenSenderId(prev => [saveMessage.senderId, ...prev]);
            }
            // setConversationPeople(prev => [newConvoUser, ...prev]);
        })
    },[socket])


    return (
        <div className={`h-screen w-60 overflow-y-scroll scrollbar scrollbar-thumb-rounded flex flex-col gap-5 py-4`}>
            {conversationPeople.map(convoPeople => (
                <ChatCard isUnseen={unseenSenderId.includes(convoPeople._id)} key={convoPeople._id} convoPeople={convoPeople} />
            ))}

        </div>
    );
};

export default ChatList;