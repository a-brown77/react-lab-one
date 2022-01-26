import { useState } from "react";
import "./VoteHere.css";

interface VoteEntry {
  chocolate: number;
  vanilla: number;
  strawberry: number;
}

export function Vote() {
  //methods will always expect one argument in an update state method
  const [voteTracker, setVoteTracker] = useState<VoteEntry>({
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
  });

  const [totalVotes, setTotalVotes] = useState<number>(0);

  function addVote(vote: string) {
    // make a copy of the state to update
    // example of immutability, voteTrackers value is never mutated only replaced
    let voteTrackerCopy = voteTracker;
    console.log("initialized", voteTracker);
    if (vote === "Strawberry") {
      voteTrackerCopy.strawberry++;
    } else if (vote === "Vanilla") {
      voteTrackerCopy.vanilla++;
    } else if (vote === "Chocolate") {
      voteTrackerCopy.chocolate++;
    }
    setVoteTracker(voteTrackerCopy);
    console.log("updated", voteTracker);
    incrementTotal();
  }

  function incrementTotal() {
    setTotalVotes(totalVotes + 1);
  }

  return (
    <div className="vote-cont">
      <h1>Vote Here</h1>
      <div className="buttons-cont">
        <button onClick={() => addVote("Chocolate")}>Chocolate</button>
        <button onClick={() => addVote("Vanilla")}>Vanilla</button>
        <button onClick={() => addVote("Strawberry")}>Strawberry</button>
      </div>
      <div className="percent-cont">
        <div className="chocolate-bar">
          {totalVotes === 0
            ? "No votes yet"
            : (voteTracker.chocolate / totalVotes) * 100}
        </div>
        <div className="vanilla-bar">
          {totalVotes === 0
            ? "No votes yet"
            : (voteTracker.vanilla / totalVotes) * 100}
        </div>
        <div className="strawberry-bar">
          {totalVotes === 0
            ? "No votes yet"
            : (voteTracker.strawberry / totalVotes) * 100}
        </div>
      </div>
    </div>
  );
}
