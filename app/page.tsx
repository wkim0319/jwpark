import { conversations } from "./data/memories";
import AimWindow from "./AimWindow";

export default function Home() {
  const partyGoers = Object.keys(conversations);

  return (
    <div
      className="min-h-screen bg-[#008080]"
      style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
    >
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center p-4">
        <AimWindow partyGoers={partyGoers} conversations={conversations} />
      </div>
    </div>
  );
}
