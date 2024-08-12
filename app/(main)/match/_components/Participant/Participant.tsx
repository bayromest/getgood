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
import Image from "next/image";

const Participant = ({
  participant,
  version,
}: {
  participant: ParticipantDto;
  version: string;
}) => {
  return (
    <div className="p-8 border rounded">
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-extrabold space-y-4">
            {participant.championName}
          </div>{" "}
          <p>|</p>{" "}
          <div className="flex items-center">
            <Image
              src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${participant.profileIcon}.png`}
              alt="Profile Pic"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="font-extrabold">{participant.riotIdGameName}</span>
            #{participant.riotIdTagline}
          </div>
        </div>
        <div className="">
          {participant.kills}/{participant.deaths}/{participant.assists}
        </div>
      </div>
      <div className="grid grid-cols-5 py-8 gap-2">
        <Prop
          name="baronBuffGoldAdvantageOverThreshold"
          value={participant.challenges.baronBuffGoldAdvantageOverThreshold}
        />
        <Prop
          name="controlWardTimeCoverageInRiverOrEnemyHalf"
          value={
            participant.challenges.controlWardTimeCoverageInRiverOrEnemyHalf
          }
        />
        <Prop
          name="earliestBaron"
          value={participant.challenges.earliestBaron}
        />
        <Prop
          name="earliestDragonTakedown"
          value={participant.challenges.earliestDragonTakedown}
        />
        <Prop
          name="earliestElderDragon"
          value={participant.challenges.earliestElderDragon}
        />
        <Prop
          name="earlyLaningPhaseGoldExpAdvantage"
          value={participant.challenges.earlyLaningPhaseGoldExpAdvantage}
        />
        <Prop
          name="fasterSupportQuestCompletion"
          value={participant.challenges.fasterSupportQuestCompletion}
        />
        <Prop
          name="fastestLegendary"
          value={participant.challenges.fastestLegendary}
        />
        <Prop
          name="hadAfkTeammate"
          value={participant.challenges.hadAfkTeammate}
        />
        <Prop
          name="highestChampionDamage"
          value={participant.challenges.highestChampionDamage}
        />
        <Prop
          name="highestCrowdControlScore"
          value={participant.challenges.highestCrowdControlScore}
        />
        <Prop
          name="highestWardKills"
          value={participant.challenges.highestWardKills}
        />
        <Prop
          name="junglerKillsEarlyJungle"
          value={participant.challenges.junglerKillsEarlyJungle}
        />
        <Prop
          name="killsOnLanersEarlyJungleAsJungler"
          value={participant.challenges.killsOnLanersEarlyJungleAsJungler}
        />
        <Prop
          name="laningPhaseGoldExpAdvantage"
          value={participant.challenges.laningPhaseGoldExpAdvantage}
        />
        <Prop
          name="legendaryCount"
          value={participant.challenges.legendaryCount}
        />
        <Prop
          name="maxCsAdvantageOnLaneOpponent"
          value={participant.challenges.maxCsAdvantageOnLaneOpponent}
        />
        <Prop
          name="maxLevelLeadLaneOpponent"
          value={participant.challenges.maxLevelLeadLaneOpponent}
        />
        <Prop
          name="mostWardsDestroyedOneSweeper"
          value={participant.challenges.mostWardsDestroyedOneSweeper}
        />
        {/* <Prop
            name="mythicItemUsed"
            value={participant.challenges.mythicItemUsed.join(", ")} // Display array as comma-separated values
          /> */}
        <Prop
          name="playedChampSelectPosition"
          value={participant.challenges.playedChampSelectPosition}
        />
        <Prop
          name="soloTurretsLategame"
          value={participant.challenges.soloTurretsLategame}
        />
        <Prop
          name="takedownsFirst25Minutes"
          value={participant.challenges.takedownsFirst25Minutes}
        />
        <Prop
          name="teleportTakedowns"
          value={participant.challenges.teleportTakedowns}
        />
        <Prop
          name="thirdInhibitorDestroyedTime"
          value={participant.challenges.thirdInhibitorDestroyedTime}
        />
        <Prop
          name="threeWardsOneSweeperCount"
          value={participant.challenges.threeWardsOneSweeperCount}
        />
        <Prop
          name="visionScoreAdvantageLaneOpponent"
          value={participant.challenges.visionScoreAdvantageLaneOpponent}
        />
        <Prop
          name="infernalScalePickup"
          value={participant.challenges.InfernalScalePickup}
        />
        <Prop
          name="fistBumpParticipation"
          value={participant.challenges.fistBumpParticipation}
        />
        <Prop
          name="voidMonsterKill"
          value={participant.challenges.voidMonsterKill}
        />
        <Prop name="abilityUses" value={participant.challenges.abilityUses} />
        <Prop name="Q casts" value={participant.spell1Casts} />
        <Prop name="W casts" value={participant.spell2Casts} />
        <Prop name="E casts" value={participant.spell3Casts} />
        <Prop name="R casts" value={participant.spell4Casts} />
        <Prop
          name="acesBefore15Minutes"
          value={participant.challenges.acesBefore15Minutes}
        />
        <Prop
          name="alliedJungleMonsterKills"
          value={participant.challenges.alliedJungleMonsterKills}
        />
        <Prop
          name="baronTakedowns"
          value={participant.challenges.baronTakedowns}
        />
        <Prop
          name="blastConeOppositeOpponentCount"
          value={participant.challenges.blastConeOppositeOpponentCount}
        />
        <Prop name="bountyGold" value={participant.challenges.bountyGold} />
        <Prop name="buffsStolen" value={participant.challenges.buffsStolen} />
        <Prop
          name="completeSupportQuestInTime"
          value={participant.challenges.completeSupportQuestInTime}
        />
        <Prop
          name="controlWardsPlaced"
          value={participant.challenges.controlWardsPlaced}
        />
        <Prop
          name="damagePerMinute"
          value={participant.challenges.damagePerMinute}
        />
        <Prop
          name="damageTakenOnTeamPercentage"
          value={participant.challenges.damageTakenOnTeamPercentage}
        />
        <Prop
          name="dancedWithRiftHerald"
          value={participant.challenges.dancedWithRiftHerald}
        />
        <Prop
          name="deathsByEnemyChamps"
          value={participant.challenges.deathsByEnemyChamps}
        />
        <Prop
          name="dodgeSkillShotsSmallWindow"
          value={participant.challenges.dodgeSkillShotsSmallWindow}
        />
        <Prop name="doubleAces" value={participant.challenges.doubleAces} />
        <Prop
          name="dragonTakedowns"
          value={participant.challenges.dragonTakedowns}
        />
        {/* <Prop
            name="legendaryItemUsed"
            value={participant.challenges.legendaryItemUsed.join(", ")} // Display array as comma-separated values
          /> */}
        <Prop
          name="effectiveHealAndShielding"
          value={participant.challenges.effectiveHealAndShielding}
        />
        <Prop
          name="elderDragonKillsWithOpposingSoul"
          value={participant.challenges.elderDragonKillsWithOpposingSoul}
        />
        <Prop
          name="elderDragonMultikills"
          value={participant.challenges.elderDragonMultikills}
        />
        <Prop
          name="enemyChampionImmobilizations"
          value={participant.challenges.enemyChampionImmobilizations}
        />
        <Prop
          name="firstDragonTakedown"
          value={participant.challenges.firstDragonTakedown}
        />
        <Prop
          name="firstInhibitorDestroyed"
          value={participant.challenges.firstInhibitorDestroyed}
        />
        <Prop
          name="goldPerMinute"
          value={participant.challenges.goldPerMinute}
        />
        <Prop
          name="goldToChampsPerMinute"
          value={participant.challenges.goldToChampsPerMinute}
        />
        <Prop
          name="highestChampionDamageTaken"
          value={participant.challenges.highestChampionDamageTaken}
        />
        <Prop
          name="jungleCampsClearedBefore10Minutes"
          value={participant.challenges.jungleCampsClearedBefore10Minutes}
        />
        <Prop
          name="killParticipation"
          value={participant.challenges.killParticipation}
        />
        <Prop
          name="killsPerMinute"
          value={participant.challenges.killsPerMinute}
        />
        <Prop
          name="magicDamageTaken"
          value={participant.challenges.magicDamageTaken}
        />
        <Prop
          name="minionsKilled"
          value={participant.challenges.minionsKilled}
        />
        <Prop name="monsterKills" value={participant.challenges.monsterKills} />
        <Prop
          name="multiKillOneSpell"
          value={participant.challenges.multiKillOneSpell}
        />
        <Prop
          name="objectiveDeaths"
          value={participant.challenges.objectiveDeaths}
        />
        <Prop name="perMinute" value={participant.challenges.perMinute} />
        <Prop
          name="phantomMinionKills"
          value={participant.challenges.phantomMinionKills}
        />
        <Prop name="powerRating" value={participant.challenges.powerRating} />
        <Prop
          name="visionWardsBoughtInGame"
          value={participant.challenges.visionWardsBoughtInGame}
        />
        <Prop name="wardsPlaced" value={participant.challenges.wardsPlaced} />
        <Prop
          name="wardsVisionScore"
          value={participant.challenges.wardsVisionScore}
        />
        <Prop name="wardKilled" value={participant.challenges.wardKilled} />
      </div>

      <div className="grid grid-cols-4 py-8 gap-2">
        <Prop name="Champion" value={participant.championName} />
        <Prop name="championId" value={participant.championId} />
        <Prop name="championTransform" value={participant.championTransform} />
        <Prop
          name="profileIcon"
          value={participant.profileIcon}
          profileIcon
          version={version}
        />
      </div>
      {/* 
        <div className="game-stats">
          <Prop name="champExperience" value={participant.champExperience} />
          <Prop name="champLevel" value={participant.champLevel} />
          <Prop name="bountyLevel" value={participant.bountyLevel} />
          <Prop name="goldEarned" value={participant.goldEarned} />
          <Prop name="goldSpent" value={participant.goldSpent} />
          <Prop name="timePlayed" value={participant.timePlayed} />
          <Prop
            name="eligibleForProgression"
            value={participant.eligibleForProgression}
          />
        </div>

        <div className="killing-stats">
          <Prop name="kills" value={participant.kills} />
          <Prop name="deaths" value={participant.deaths} />
          <Prop name="doubleKills" value={participant.doubleKills} />
          <Prop name="tripleKills" value={participant.tripleKills} />
          <Prop name="quadraKills" value={participant.quadraKills} />
          <Prop name="pentaKills" value={participant.pentaKills} />
          <Prop
            name="largestKillingSpree"
            value={participant.largestKillingSpree}
          />
          <Prop name="largestMultiKill" value={participant.largestMultiKill} />
          <Prop
            name="largestCriticalStrike"
            value={participant.largestCriticalStrike}
          />
          <Prop name="unrealKills" value={participant.unrealKills} />
        </div>

        <div className="damage-stats">
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
          <Prop name="totalDamageDealt" value={participant.totalDamageDealt} />
          <Prop
            name="totalDamageDealtToChampions"
            value={participant.totalDamageDealtToChampions}
          />
          <Prop name="magicDamageDealt" value={participant.magicDamageDealt} />
          <Prop
            name="magicDamageDealtToChampions"
            value={participant.magicDamageDealtToChampions}
          />
          <Prop name="trueDamageDealt" value={participant.trueDamageDealt} />
          <Prop
            name="trueDamageDealtToChampions"
            value={participant.trueDamageDealtToChampions}
          />
          <Prop
            name="physicalDamageDealt"
            value={participant.physicalDamageDealt}
          />
          <Prop
            name="physicalDamageDealtToChampions"
            value={participant.physicalDamageDealtToChampions}
          />
        </div>

        <div className="defensive-stats">
          <Prop
            name="damageSelfMitigated"
            value={participant.damageSelfMitigated}
          />
          <Prop name="magicDamageTaken" value={participant.magicDamageTaken} />
          <Prop
            name="physicalDamageTaken"
            value={participant.physicalDamageTaken}
          />
          <Prop name="trueDamageTaken" value={participant.trueDamageTaken} />
          <Prop name="totalDamageTaken" value={participant.totalDamageTaken} />
          <Prop
            name="totalHealsOnTeammates"
            value={participant.totalHealsOnTeammates}
          />
          <Prop name="totalUnitsHealed" value={participant.totalUnitsHealed} />
          <Prop
            name="totalDamageShieldedOnTeammates"
            value={participant.totalDamageShieldedOnTeammates}
          />
          <Prop name="totalHeal" value={participant.totalHeal} />
        </div>

        <div className="items-purchase">
          <Prop name="itemsPurchased" value={participant.itemsPurchased} />
          <Prop name="item0" value={participant.item0} item version={version} />
          <Prop name="item1" value={participant.item1} item version={version} />
          <Prop name="item2" value={participant.item2} item version={version} />
          <Prop name="item3" value={participant.item3} item version={version} />
          <Prop name="item4" value={participant.item4} item version={version} />
          <Prop name="item5" value={participant.item5} item version={version} />
          <Prop name="item6" value={participant.item6} item version={version} />
          <Prop
            name="consumablesPurchased"
            value={participant.consumablesPurchased}
          />
        </div>

        <div className="wards-and-vision">
          <Prop name="wardsPlaced" value={participant.wardsPlaced} />
          <Prop name="wardsKilled" value={participant.wardsKilled} />
          <Prop
            name="sightWardsBoughtInGame"
            value={participant.sightWardsBoughtInGame}
          />
          <Prop
            name="visionWardsBoughtInGame"
            value={participant.visionWardsBoughtInGame}
          />
          <Prop
            name="detectorWardsPlaced"
            value={participant.detectorWardsPlaced}
          />
          <Prop name="visionScore" value={participant.visionScore} />
        </div>

        <div className="objectives">
          <Prop name="dragonKills" value={participant.dragonKills} />
          <Prop name="baronKills" value={participant.baronKills} />
          <Prop name="inhibitorKills" value={participant.inhibitorKills} />
          <Prop name="nexusKills" value={participant.nexusKills} />
          <Prop name="turretKills" value={participant.turretKills} />
          <Prop name="objectivesStolen" value={participant.objectivesStolen} />
          <Prop
            name="objectivesStolenAssists"
            value={participant.objectivesStolenAssists}
          />
        </div>

        <div className="pings-and-communication">
          <Prop name="allInPings" value={participant.allInPings} />
          <Prop name="assistMePings" value={participant.assistMePings} />
          <Prop name="commandPings" value={participant.commandPings} />
          <Prop
            name="enemyMissingPings"
            value={participant.enemyMissingPings}
          />
          <Prop name="enemyVisionPings" value={participant.enemyVisionPings} />
          <Prop name="getBackPings" value={participant.getBackPings} />
          <Prop name="holdPings" value={participant.holdPings} />
          <Prop name="needVisionPings" value={participant.needVisionPings} />
          <Prop name="onMyWayPings" value={participant.onMyWayPings} />
          <Prop
            name="visionClearedPings"
            value={participant.visionClearedPings}
          />
          <Prop name="pushPings" value={participant.pushPings} />
        </div>

        <div className="role-and-position">
          <Prop
            name="individualPosition"
            value={participant.individualPosition}
          />
          <Prop name="teamPosition" value={participant.teamPosition} />
          <Prop name="placement" value={participant.placement} />
          <Prop name="subteamPlacement" value={participant.subteamPlacement} />
          <Prop name="playerSubteamId" value={participant.playerSubteamId} />
          <Prop name="role" value={participant.role} />
        </div>


        <div className="summoner-spells">
          <Prop name="summoner1Id" value={participant.summoner1Id} />
          <Prop name="summoner1Casts" value={participant.summoner1Casts} />
          <Prop name="summoner2Id" value={participant.summoner2Id} />
          <Prop name="summoner2Casts" value={participant.summoner2Casts} />
        </div>

        <div className="player-ids">
          <Prop name="riotIdGameName" value={participant.riotIdGameName} />
          <Prop name="riotIdTagline" value={participant.riotIdTagline} />
          <Prop name="summonerLevel" value={participant.summonerLevel} />
          <Prop name="summonerName" value={participant.summonerName} />
        </div>

        <div className="team-stats">
          <Prop name="teamId" value={participant.teamId} />
          <Prop
            name="teamEarlySurrendered"
            value={participant.teamEarlySurrendered}
          />
          <Prop
            name="gameEndedInEarlySurrender"
            value={participant.gameEndedInEarlySurrender}
          />
          <Prop
            name="gameEndedInSurrender"
            value={participant.gameEndedInSurrender}
          />
        </div>
        <div className="challenges">
          <Prop
            name="InfernalScalePickup"
            value={participant.challenges.InfernalScalePickup}
          />
        </div>
      </div> */}
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
