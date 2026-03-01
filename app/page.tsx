import { conversations } from "./data/memories";
import AimWindow from "./AimWindow";

export default function Home() {
  const partyGoers = Object.keys(conversations);

  return (
    <div
      className="min-h-dvh bg-[#008080]"
      style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
    >
      <div className="mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-center p-3 py-6 sm:p-4 safe-area-padding">
        <AimWindow partyGoers={partyGoers} conversations={conversations} />
      </div>
    </div>
  );
}
