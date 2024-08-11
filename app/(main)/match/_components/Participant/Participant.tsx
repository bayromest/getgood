import { ParticipantDto } from "@/types/MatchDto";
import React from "react";
import Prop from "../Prop";
import Pings from "./Pings";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Participant = ({ participant }: { participant: ParticipantDto }) => {
  return (
    <div className="p-8 border rounded">
      <div className="flex item-center justify-between">
        <div className="">
          <span className="font-extrabold">{participant.riotIdGameName}</span>#
          {participant.riotIdTagline}
        </div>
        <div className="">
          {participant.kills}/{participant.deaths}/{participant.assists}
        </div>
      </div>
      <div className="grid grid-cols-5 py-8 gap-2">
        <Prop name="Champion" value={participant.championName} />
        <Prop name="baronKills" value={participant.baronKills} />
        <Prop name="bountyLevel" value={participant.bountyLevel} />
        <Prop name="champExperience" value={participant.champExperience} />
        <Prop name="champLevel" value={participant.champLevel} />
        {/* <Prop name="championId" value={participant.championId} /> */}
        <Prop name="championTransform" value={participant.championTransform} />
        <Prop
          name="consumablesPurchased"
          value={participant.consumablesPurchased}
        />
        <Prop
          name="damageDealtToBuildings"
          value={participant.damageDealtToBuildings}
        />
        <Prop
          name="damageDealtToObjectives"
          value={participant.damageDealtToObjectives}
        />
        <Prop
          name="damageDealtToTurrets"
          value={participant.damageDealtToTurrets}
        />
        <Prop
          name="damageSelfMitigated"
          value={participant.damageSelfMitigated}
        />
        <Prop
          name="detectorWardsPlaced"
          value={participant.detectorWardsPlaced}
        />
        <Prop name="doubleKills" value={participant.doubleKills} />
        <Prop name="dragonKills" value={participant.dragonKills} />
        <Prop
          name="eligibleForProgression"
          value={participant.eligibleForProgression}
        />
        <Prop name="firstBloodAssist" value={participant.firstBloodAssist} />
        <Prop name="firstBloodKill" value={participant.firstBloodKill} />
        <Prop name="firstTowerAssist" value={participant.firstTowerAssist} />
        <Prop name="firstTowerKill" value={participant.firstTowerKill} />
        <Prop
          name="gameEndedInEarlySurrender"
          value={participant.gameEndedInEarlySurrender}
        />
        <Prop
          name="gameEndedInSurrender"
          value={participant.gameEndedInSurrender}
        />
        <Prop name="goldEarned" value={participant.goldEarned} />
        <Prop name="goldSpent" value={participant.goldSpent} />
        <Prop
          name="individualPosition"
          value={participant.individualPosition}
        />
        <Prop name="inhibitorKills" value={participant.inhibitorKills} />
        <Prop
          name="inhibitorTakedowns"
          value={participant.inhibitorTakedowns}
        />
        <Prop name="inhibitorsLost" value={participant.inhibitorsLost} />
        <Prop name="item0" value={participant.item0} />
        <Prop name="item1" value={participant.item1} />
        <Prop name="item2" value={participant.item2} />
        <Prop name="item3" value={participant.item3} />
        <Prop name="item4" value={participant.item4} />
        <Prop name="item5" value={participant.item5} />
        <Prop name="item6" value={participant.item6} />
        <Prop name="itemsPurchased" value={participant.itemsPurchased} />
        <Prop name="killingSprees" value={participant.killingSprees} />
        <Prop
          name="largestCriticalStrike"
          value={participant.largestCriticalStrike}
        />
        <Prop
          name="largestKillingSpree"
          value={participant.largestKillingSpree}
        />
        <Prop name="largestMultiKill" value={participant.largestMultiKill} />
        <Prop
          name="longestTimeSpentLiving"
          value={participant.longestTimeSpentLiving}
        />
        <Prop name="magicDamageDealt" value={participant.magicDamageDealt} />
        <Prop
          name="magicDamageDealtToChampions"
          value={participant.magicDamageDealtToChampions}
        />
        <Prop name="magicDamageTaken" value={participant.magicDamageTaken} />
        <Prop
          name="neutralMinionsKilled"
          value={participant.neutralMinionsKilled}
        />
        <Prop name="nexusKills" value={participant.nexusKills} />
        <Prop name="nexusTakedowns" value={participant.nexusTakedowns} />
        <Prop name="nexusLost" value={participant.nexusLost} />
        <Prop name="objectivesStolen" value={participant.objectivesStolen} />
        <Prop
          name="objectivesStolenAssists"
          value={participant.objectivesStolenAssists}
        />
        <Prop name="participantId" value={participant.participantId} />
        <Prop name="playerSubteamId" value={participant.playerSubteamId} />
        <Prop name="tripleKills" value={participant.tripleKills} />
        <Prop name="unrealKills" value={participant.unrealKills} />
        <Prop name="doubleKills" value={participant.doubleKills} />
        <Prop name="tripleKills" value={participant.tripleKills} />
        <Prop name="quadraKills" value={participant.quadraKills} />
        <Prop name="pentaKills" value={participant.pentaKills} />
        <Prop
          name="largestKillingSpree"
          value={participant.largestKillingSpree}
        />
        <Prop name="playerAugment1" value={participant.playerAugment1} />
        <Prop name="playerAugment2" value={participant.playerAugment2} />
        <Prop name="playerAugment3" value={participant.playerAugment3} />
        <Prop name="playerAugment4" value={participant.playerAugment4} />
        <Prop name="win" value={participant.win} />
        <Prop name="spell1Casts" value={participant.spell1Casts} />
        <Prop name="spell2Casts" value={participant.spell2Casts} />
        <Prop name="spell3Casts" value={participant.spell3Casts} />
        <Prop name="spell4Casts" value={participant.spell4Casts} />
        <Prop name="profileIcon" value={participant.profileIcon} />
      </div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Pings</AccordionTrigger>
          <AccordionContent>
            <Pings participant={participant} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Participant;
