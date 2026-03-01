"use client";

import { useState } from "react";
import { BIRTHDAY_GIRL_USERNAME } from "./data/memories";
import type { Message } from "./data/memories";

type AimWindowProps = {
  partyGoers: string[];
  conversations: Record<string, Message[]>;
};

function TitleBarButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-4 w-5 items-center justify-center rounded-sm border border-[#003d7a] bg-[#0054a6] text-xs text-white shadow-sm">
      {children}
    </div>
  );
}

function BottomBarButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="flex items-center gap-1.5 rounded border border-b-2 border-gray-400 bg-linear-to-b from-[#f4f4f4] to-[#e0e0e0] px-2.5 py-1.5 text-xs text-gray-800 shadow-sm active:border-b active:border-t-2 active:border-gray-400"
    >
      <span className="flex h-4 w-4 items-center justify-center text-[10px]">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

export default function AimWindow({ partyGoers, conversations }: AimWindowProps) {
  const [activeUser, setActiveUser] = useState(partyGoers[0] ?? null);
  const messages = activeUser ? conversations[activeUser] ?? [] : [];

  return (
    <div className="aim-pixelated w-full max-w-2xl overflow-hidden rounded-lg border-2 border-[#0054a6] bg-white shadow-2xl">
      {/* Title bar */}
      <div className="flex h-8 items-center justify-between bg-linear-to-b from-[#0054a6] to-[#003d7a] px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-[#0078d7]">
            <span className="text-[10px] text-white">▶</span>
          </div>
          <span className="text-sm font-medium text-white">
            Instant Message {activeUser ? ` – ${BIRTHDAY_GIRL_USERNAME} & ${activeUser}` : ""}
          </span>
        </div>
        <div className="flex gap-0.5">
          <TitleBarButton>−</TitleBarButton>
          <TitleBarButton>□</TitleBarButton>
          <TitleBarButton>×</TitleBarButton>
        </div>
      </div>

      {/* Menu bar */}
      <div className="flex gap-6 border-b border-gray-300 bg-[#f0f0f0] px-3 py-1.5 text-sm">
        <button type="button" className="hover:underline">File</button>
        <button type="button" className="hover:underline">Edit</button>
        <button type="button" className="hover:underline">Insert</button>
        <button type="button" className="hover:underline">People</button>
      </div>

      {/* Tabs - one per conversation */}
      {partyGoers.length > 0 && (
        <div className="flex border-b border-gray-300 bg-[#e8e8e8] px-1 pt-1">
          {partyGoers.map((user) => (
            <button
              key={user}
              type="button"
              onClick={() => setActiveUser(user)}
              className={
                activeUser === user
                  ? "relative -mb-px rounded-t border border-b-0 border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm"
                  : "rounded-t border border-transparent px-3 py-1.5 text-sm text-gray-600 hover:bg-white/60 hover:text-gray-900"
              }
            >
              {user}
            </button>
          ))}
        </div>
      )}

      {/* Status message */}
      <div className="border-b border-gray-200 bg-[#f5f5f5] px-3 py-1.5 text-right text-xs text-gray-600">
        <span className="font-bold text-[#0000cc]">{BIRTHDAY_GIRL_USERNAME}</span>
        {" "}is: Turning 30 🎉
      </div>

      {/* Conversation area */}
      <div className="min-h-[220px] border-b border-gray-300 bg-white p-4">
        {messages.length === 0 ? (
          <p className="text-sm text-gray-500">No messages in this conversation yet.</p>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className="mb-1.5 text-sm">
              <span
                className={
                  msg.from === BIRTHDAY_GIRL_USERNAME
                    ? "font-bold text-[#0000cc]"
                    : "font-bold text-[#cc0000]"
                }
              >
                {msg.from}:
              </span>{" "}
              <span className="text-gray-900">{msg.text}</span>
            </div>
          ))
        )}
      </div>

      {/* Formatting toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-300 bg-[#f8f8f8] px-2 py-1.5">
        <span className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs">A</span>
        <span className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs">A</span>
        <span className="rounded border border-gray-300 bg-white px-1 py-0.5 text-[10px]">▲▼</span>
        <span className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs font-bold">B</span>
        <span className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs italic">I</span>
        <span className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs underline">U</span>
        <span className="rounded border border-gray-300 bg-blue-100 px-1.5 py-0.5 text-xs text-blue-700">link</span>
        <span className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs">🖼</span>
        <span className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs">😊</span>
      </div>

      {/* Text input area */}
      <div className="border-b border-gray-300 bg-white p-2">
        <div className="h-20 w-full resize-none rounded border border-gray-300 bg-white p-2 text-sm text-gray-500 outline-none">
          Type your message here...
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="flex items-center gap-1 bg-[#e8e8e8] p-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-gray-400 bg-linear-to-b from-[#6b9fd1] to-[#4a7bb8]">
          <span className="text-lg">👤</span>
        </div>
        <div className="flex flex-1 flex-wrap items-center gap-1.5">
          <BottomBarButton icon="☀️" label="Warn" />
          <BottomBarButton icon="🚫" label="Block" />
          <BottomBarButton icon="➕" label="Add Buddy" />
          <BottomBarButton icon="💬" label="Talk" />
          <BottomBarButton icon="ℹ️" label="Get Info" />
          <button
            type="button"
            className="flex items-center gap-1.5 rounded border-2 border-b-4 border-green-600 bg-linear-to-b from-[#7cb87c] to-[#5a9a5a] px-3 py-1.5 text-xs font-medium text-white shadow-md"
          >
            <span>✈️</span>
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
