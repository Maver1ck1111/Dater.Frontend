import { useEffect, useState } from "react";
import "./ChatsPage.css";
import api from "../../Api/Axios";
import { jwtDecode } from "jwt-decode";

interface Chat {
  id: string;
  name: string;
}

export default function Chats() {
  const [chatInfo, setProfileInfo] = useState<Chat[]>([]);
  const [profilePicSrc, setProfilePicSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getChats() {
      setIsLoading(true);
      const token = localStorage.getItem("AccessToken");
      if (!token) return;

      const decode = jwtDecode<any>(token);
      const chats = await api.get(`/getChats/${decode.sub}`);

      if (chats.statusText !== "OK") return;

      setProfileInfo(chats.data);

      const response = await api.get(`/profile/getPhotoByID/${decode.sub}/0`, {
        responseType: "blob",
      });

      if (response.statusText === "OK") {
        setProfilePicSrc(URL.createObjectURL(response.data));
      }

      setProfilePicSrc(URL.createObjectURL(response.data));

      setIsLoading(false);
    }

    getChats();
  }, []);

  const handleJoinChat = (chatId: string) => {
    console.log("Joining chat:", chatId);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="chats-page">
      <h1 className="chats-title">Your Chats</h1>
      <div className="chats-list">
        {chatInfo.map((val) => {
          return (
            <div className="chat-card" key={val.id}>
              <img src={profilePicSrc} alt={val.name} className="chat-avatar" />
              <div className="chat-info">
                <h2>{val.name}</h2>
                <button
                  className="join-btn"
                  onClick={() => handleJoinChat(val.id)}
                >
                  Join Chat
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
