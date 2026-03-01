"use client";

import { useState } from "react";
import { BIRTHDAY_GIRL_USERNAME } from "./data/memories";
import type { Message } from "./data/memories";

/** Detect if a URL is an image/GIF we should render inline */
function isImageUrl(url: string): boolean {
  try {
    const lower = url.toLowerCase();
    if (/\.(gif|jpg|jpeg|png|webp)(\?|$)/i.test(lower)) return true;
    const host = new URL(url).hostname.toLowerCase();
    return host.includes("tenor.com") || host.includes("giphy.com") || host.includes("imgur.com");
  } catch {
    return false;
  }
}

/** Split message text into segments: plain text and image URLs */
function parseMessageSegments(text: string): Array<{ type: "text"; value: string } | { type: "image"; value: string }> {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const segments: Array<{ type: "text"; value: string } | { type: "image"; value: string }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = urlRegex.exec(text)) !== null) {
    const url = match[0].replace(/[.,;:!?)]+$/, ""); // trim trailing punctuation
    if (lastIndex < match.index) {
      segments.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    if (isImageUrl(url)) {
      segments.push({ type: "image", value: url });
    } else {
      segments.push({ type: "text", value: match[0] });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    segments.push({ type: "text", value: text.slice(lastIndex) });
  }
  return segments.length ? segments : [{ type: "text", value: text }];
}

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
      className="flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center gap-1.5 rounded border border-b-2 border-gray-400 bg-linear-to-b from-[#f4f4f4] to-[#e0e0e0] px-2.5 py-1.5 text-xs text-gray-800 shadow-sm active:border-b active:border-t-2 active:border-gray-400 sm:min-h-0 sm:min-w-0"
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
    <div className="aim-pixelated w-full max-w-2xl overflow-hidden rounded-lg border-2 border-[#0054a6] bg-white shadow-2xl sm:rounded-lg">
      {/* Title bar */}
      <div className="flex h-10 min-h-10 shrink-0 items-center justify-between gap-2 bg-linear-to-b from-[#0054a6] to-[#003d7a] px-2 sm:h-8">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#0078d7]">
            <span className="text-[10px] text-white">▶</span>
          </div>
          <span className="truncate text-sm font-medium text-white">
            Instant Message {activeUser ? ` – ${BIRTHDAY_GIRL_USERNAME} & ${activeUser}` : ""}
          </span>
        </div>
        <div className="flex shrink-0 gap-0.5">
          <TitleBarButton>−</TitleBarButton>
          <TitleBarButton>□</TitleBarButton>
          <TitleBarButton>×</TitleBarButton>
        </div>
      </div>

      {/* Menu bar - compact on mobile */}
      <div className="flex gap-4 border-b border-gray-300 bg-[#f0f0f0] px-2 py-2 text-sm sm:gap-6 sm:px-3 sm:py-1.5">
        <button type="button" className="min-h-[44px] min-w-[44px] touch-manipulation hover:underline sm:min-h-0 sm:min-w-0">File</button>
        <button type="button" className="min-h-[44px] min-w-[44px] touch-manipulation hover:underline sm:min-h-0 sm:min-w-0">Edit</button>
        <button type="button" className="min-h-[44px] min-w-[44px] touch-manipulation hover:underline sm:min-h-0 sm:min-w-0">Insert</button>
        <button type="button" className="min-h-[44px] min-w-[44px] touch-manipulation hover:underline sm:min-h-0 sm:min-w-0">People</button>
      </div>

      {/* Tabs - horizontal scroll on mobile */}
      {partyGoers.length > 0 && (
        <div className="border-b border-gray-300 bg-[#e8e8e8] px-1 pt-1">
          <div className="-mb-px flex overflow-x-auto overflow-y-hidden scroll-smooth px-0.5 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            {partyGoers.map((user) => (
              <button
                key={user}
                type="button"
                onClick={() => setActiveUser(user)}
                className={
                  "touch-manipulation shrink-0 rounded-t border-b-0 px-3 py-2 text-sm sm:py-1.5 " +
                  (activeUser === user
                    ? "relative -mb-px border border-gray-300 border-b-0 bg-white font-medium text-gray-900 shadow-sm"
                    : "border border-transparent text-gray-600 hover:bg-white/60 hover:text-gray-900")
                }
                style={{ minHeight: 44 }}
              >
                {user}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Status message */}
      <div className="border-b border-gray-200 bg-[#f5f5f5] px-2 py-2 text-right text-xs text-gray-600 sm:px-3 sm:py-1.5">
        <span className="font-bold text-[#0000cc]">{BIRTHDAY_GIRL_USERNAME}</span>
        {" "}is: Turning 30 🎉
      </div>

      {/* Conversation area */}
      <div className="min-h-[200px] flex-1 border-b border-gray-300 bg-white p-3 sm:min-h-[220px] sm:p-4">
        {messages.length === 0 ? (
          <p className="text-sm text-gray-500">No messages in this conversation yet.</p>
        ) : (
          messages.map((msg, i) => {
            const segments = parseMessageSegments(msg.text);
            const hasOnlyImage = segments.length === 1 && segments[0].type === "image";
            return (
              <div key={i} className="mb-2 text-sm leading-snug sm:mb-1.5 sm:leading-normal">
                <span
                  className={
                    msg.from === BIRTHDAY_GIRL_USERNAME
                      ? "font-bold text-[#0000cc]"
                      : "font-bold text-[#cc0000]"
                  }
                >
                  {msg.from}:
                </span>
                {hasOnlyImage ? (
                  <div className="mt-1">
                    <img
                      src={segments[0].value}
                      alt=""
                      className="max-h-40 max-w-full rounded border border-gray-300 object-contain sm:max-h-48"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <>
                    {" "}
                    {segments.map((seg, j) =>
                      seg.type === "text" ? (
                        <span key={j} className="text-gray-900">{seg.value}</span>
                      ) : (
                        <span key={j} className="mt-1 block">
                          <img
                            src={seg.value}
                            alt=""
                            className="max-h-40 max-w-full rounded border border-gray-300 object-contain sm:max-h-48"
                            loading="lazy"
                          />
                        </span>
                      )
                    )}
                  </>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Formatting toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-300 bg-[#f8f8f8] px-2 py-2 sm:py-1.5">
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
        <div className="h-16 w-full resize-none rounded border border-gray-300 bg-white p-2 text-sm text-gray-500 outline-none sm:h-20">
          Type your message here...
        </div>
      </div>

      {/* Bottom action bar - touch-friendly on mobile */}
      <div className="flex items-center gap-1 bg-[#e8e8e8] p-2 pb-[env(safe-area-inset-bottom)] sm:pb-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-gray-400 bg-linear-to-b from-[#6b9fd1] to-[#4a7bb8]">
          <span className="text-lg">👤</span>
        </div>
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
          <BottomBarButton icon="☀️" label="Warn" />
          <BottomBarButton icon="🚫" label="Block" />
          <BottomBarButton icon="➕" label="Add Buddy" />
          <BottomBarButton icon="💬" label="Talk" />
          <BottomBarButton icon="ℹ️" label="Get Info" />
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center gap-1.5 rounded border-2 border-b-4 border-green-600 bg-linear-to-b from-[#7cb87c] to-[#5a9a5a] px-3 py-1.5 text-xs font-medium text-white shadow-md sm:min-h-0 sm:min-w-0"
          >
            <span>✈️</span>
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
