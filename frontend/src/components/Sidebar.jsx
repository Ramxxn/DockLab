import React from "react";

const Sidebar = ({ members, onLeave }) => {
    return (
        <aside className="w-64 border-r border-zinc-800 bg-zinc-950 p-5">
            <h2 className="mb-4 text-xl font-semibold">Room Members</h2>

            <div className="space-y-3">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className="flex items-center gap-3 rounded-lg bg-zinc-800 px-4 py-3"
                    >
                        <img
                            src={member.avatar}
                            alt={member.name}
                            className="h-10 w-10 rounded-full"
                        />

                        <span>{member.name}</span>
                    </div>
                ))}
            </div>
            <button
                onClick={onLeave}
                className="mt-6 w-full rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700">
                Leave
            </button>
        </aside>
    );
};

export default Sidebar;