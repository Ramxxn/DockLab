import React from "react";
import Editor from '@monaco-editor/react';


const App = () => {
  const members = ["Raman", "Alex", "John", "Emma"];

  return (
    <main className="flex h-screen bg-zinc-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-950 p-5">
        <h2 className="mb-4 text-xl font-semibold">Room Members</h2>

        <div className="space-y-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="rounded-lg bg-zinc-800 px-4 py-3 hover:bg-zinc-700 transition"
            >
              {member}
            </div>
          ))}
        </div>
      </aside>

      {/* Code Editor Area */}
      <section className="flex-1 p-6">
        <div className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-950">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
            <h1 className="text-lg font-semibold">Code Editor</h1>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm hover:bg-blue-700">
              Run
            </button>
          </div>

          {/* Editor */}
          <div className="flex-1 p-4">
            <Editor theme="vs-dark" defaultLanguage="javascript" height={`100%`} defaultValue="// Start the project..." />
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;