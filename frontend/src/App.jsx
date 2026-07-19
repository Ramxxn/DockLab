import React, { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import CodeEditor from "./components/CodeEditor";
import JoinModal from "./components/JoinModal";

const App = () => {

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("docklab-user");
    return saved ? JSON.parse(saved) : null;
  });

  const [members, setMembers] = useState([]);

  return (
    <>
      {
        !user && (
          <JoinModal
            onJoin={setUser}
          />
        )
      }

      <main className="flex h-screen bg-zinc-900 text-white">
        <Sidebar
        members={members}
        onLeave={() => {
          localStorage.removeItem("docklab-user");
          window.location.reload();
          setUser(null);
        }} />
        <CodeEditor user={user} setMembers={setMembers} />
      </main>

    </>

  );
};

export default App;