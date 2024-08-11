import { ParticipantDto } from "@/types/MatchDto";
import React from "react";
import Prop from "../Prop";

const Pings = ({ participant }: { participant: ParticipantDto }) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
      <Prop name="allInPings" value={participant.allInPings} />
      <Prop name="assistMePings" value={participant.assistMePings} />
      <Prop name="commandPings" value={participant.commandPings} />
      <Prop name="enemyVisionPings" value={participant.enemyVisionPings} />
      <Prop name="visionClearedPings" value={participant.visionClearedPings} />
      <Prop name="enemyMissingPings" value={participant.enemyMissingPings} />
      <Prop name="holdPings" value={participant.holdPings} />
      <Prop name="pushPings" value={participant.pushPings} />
      <Prop name="getBackPings" value={participant.getBackPings} />
      <Prop name="onMyWayPings" value={participant.onMyWayPings} />
      <Prop name="needVisionPings" value={participant.needVisionPings} />
    </div>
  );
};

export default Pings;
