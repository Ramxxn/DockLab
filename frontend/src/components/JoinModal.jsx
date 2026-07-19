import React, { useEffect, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";

const JoinModal = ({ onJoin }) => {
    const [name, setName] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(crypto.randomUUID());
    }, []);

    const avatar = createAvatar(adventurer, {
        seed,
    }).toDataUri();

    const generateNewAvatar = () => {
        setSeed(crypto.randomUUID());
    };

    const handleJoin = () => {
        if (!name.trim()) return;

        onJoin({
            name: name.trim(),
            avatar,
        });

        const user = {
            name: name.trim(),
            avatar,
        };

        localStorage.setItem("docklab-user", JSON.stringify(user));

        onJoin(user);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="w-[400px] rounded-xl bg-zinc-900 p-6 shadow-2xl">
                <h2 className="mb-6 text-center text-2xl font-bold">
                    Join Collaboration
                </h2>

                <div className="mb-6 flex flex-col items-center">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="mb-3 h-28 w-28 rounded-full border-4 border-zinc-700"
                    />

                    <button
                        onClick={generateNewAvatar}
                        className="rounded bg-zinc-800 px-3 py-2 text-sm hover:bg-zinc-700"
                    >
                        Random Avatar
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                    className="mb-5 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500"
                />

                <button
                    onClick={handleJoin}
                    disabled={!name.trim()}
                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-zinc-700"
                >
                    Join
                </button>
            </div>
        </div>
    );
};

export default JoinModal;