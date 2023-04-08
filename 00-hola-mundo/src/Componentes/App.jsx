import "../CSS/App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (username) => `@${username}`;

  return (
    <>
      <TwitterFollowCard
        formatUserName={formatUserName}
        initialIsFollowing
        Usuario="AntMan"
      >
        Scott Lang
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        initialIsFollowing={false}
        Usuario="Daredevil"
      >
        Matt Murtdock
      </TwitterFollowCard>
      {/* <TwitterFollowCard {...Batman}> Batman </TwitterFollowCard> */}
    </>
  );
}
