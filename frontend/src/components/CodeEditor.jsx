import React, { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { SocketIOProvider } from "y-socket.io"
import { MonacoBinding } from "y-monaco"
import * as Y from "yjs"

const CodeEditor = ({ user, setMembers }) => {

    const providerRef = useRef(null);
    const bindingRef = useRef(null);
    const ydocRef = useRef(null);

    const handleEditorDidMount = (editor) => {
        const ydoc = new Y.Doc();

        const provider = new SocketIOProvider(
            "http://localhost:3000",
            "roomId",
            ydoc,
            {
                autoConnect: true
            }
        );

        providerRef.current = provider;
        ydocRef.current = ydoc;

        provider.awareness.setLocalStateField("user", user);

        provider.awareness.on("change", () => {
            const users = [];

            provider.awareness.getStates().forEach((state, clientId) => {
                if (state.user) {
                    users.push({
                        id: clientId,
                        ...state.user,
                    });
                }
            });

            setMembers(users);
        });

        console.log("working on the w3ebwsnksdksldflcld");


        const yText = ydoc.getText("document");

        bindingRef.current = new MonacoBinding(
            yText,
            editor.getModel(),
            new Set([editor]),
            provider.awareness
        );
    };


    useEffect(() => {
    if (!providerRef.current || !user) return;

    providerRef.current.awareness.setLocalStateField("user", user);
}, [user]);



useEffect(() => {
    return () => {
        bindingRef.current?.destroy();
        providerRef.current?.destroy();
        ydocRef.current?.destroy();
    };
}, []);


    return (
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
                    <Editor
                        theme="vs-dark"
                        defaultLanguage="javascript"
                        height="100%"
                        defaultValue="// Start the project..."
                        onMount={handleEditorDidMount}
                    />
                </div>
            </div>
        </section>
    );
};

export default CodeEditor;