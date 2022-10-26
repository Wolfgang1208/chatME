import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';

// fetch conversations
// 1, realtime snapshot(db,table,curr-user.uid)=>doc.data()=>setChats()=>chats=doc.data() from firebase db 
// 2,
const Chats = () => {
  const [chats, setChats] = useState([])
  const { currentUser } = useContext(AuthContext)

  // at the beginning no userid -> error page empty -> getChats then setChats
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      });

      return () => {
        unsub();
      }
    }
    currentUser.uid && getChats();
  }, [currentUser.uid])

  // console.log(Object.entries(chats));
  return (
    <div className='chats'>
      {/* passing chats to objects here, ?.map((chat)=>) means for each chats*/}
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInf">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats