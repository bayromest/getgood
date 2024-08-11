import { GetMatchById } from "@/actions/matches";
import { MatchDto } from "@/types/MatchDto";

interface MatchPageProps {
  params: { id: string };
}

const MatchPage = async ({ params }: MatchPageProps) => {
  const match: MatchDto = await GetMatchById(params.id);

  return (
    <div>
      <h1>Match Details</h1>

      <h2>Metadata</h2>
      <p>
        <strong>Data Version:</strong> {match.metadata.dataVersion}
      </p>
      <p>
        <strong>Match ID:</strong> {match.metadata.matchId}
      </p>
      <p>
        <strong>Participants:</strong> {match.metadata.participants.join(", ")}
      </p>

      <h2>General Information</h2>
      <p>
        <strong>Game Name:</strong> {match.info.gameName}
      </p>
      <p>
        <strong>Game Mode:</strong> {match.info.gameMode}
      </p>
      <p>
        <strong>Game Type:</strong> {match.info.gameType}
      </p>
      <p>
        <strong>Game Duration:</strong> {match.info.gameDuration} seconds
      </p>
      <p>
        <strong>Map ID:</strong> {match.info.mapId}
      </p>
      <p>
        <strong>Platform ID:</strong> {match.info.platformId}
      </p>
      <p>
        <strong>Queue ID:</strong> {match.info.queueId}
      </p>
      <p>
        <strong>Game Creation:</strong>{" "}
        {new Date(match.info.gameCreation).toLocaleString()}
      </p>
      <p>
        <strong>Game Start:</strong>{" "}
        {new Date(match.info.gameStartTimestamp).toLocaleString()}
      </p>
      <p>
        <strong>Game End:</strong>{" "}
        {match.info.gameEndTimestamp
          ? new Date(match.info.gameEndTimestamp).toLocaleString()
          : "N/A"}
      </p>
      <p>
        <strong>Game Version:</strong> {match.info.gameVersion}
      </p>
      <p>
        <strong>Tournament Code:</strong> {match.info.tournamentCode || "N/A"}
      </p>

      <h2>Participants</h2>
      {match.info.participants.map((participant) => (
        <div key={participant.participantId}>
          <h3>Participant {participant.participantId}</h3>
          <p>
            <strong>Summoner Name:</strong> {participant.summonerName}
          </p>
          <p>
            <strong>Champion Name:</strong> {participant.championName}
          </p>
          <p>
            <strong>Role:</strong> {participant.role}
          </p>
          <p>
            <strong>Lane:</strong> {participant.lane}
          </p>
          <p>
            <strong>Kills:</strong> {participant.kills}
          </p>
          <p>
            <strong>Deaths:</strong> {participant.deaths}
          </p>
          <p>
            <strong>Assists:</strong> {participant.assists}
          </p>
          <p>
            <strong>Gold Earned:</strong> {participant.goldEarned}
          </p>
          <p>
            <strong>Items Purchased:</strong> {participant.itemsPurchased}
          </p>
          <p>
            <strong>Champion ID:</strong> {participant.championId}
          </p>
          <p>
            <strong>Damage Dealt To Turrets:</strong>{" "}
            {participant.damageDealtToTurrets}
          </p>
          <p>
            <strong>Total Damage Taken:</strong> {participant.totalDamageTaken}
          </p>
          <p>
            <strong>Total Healing:</strong> {participant.totalHeal}
          </p>
          <p>
            <strong>Total Minions Killed:</strong>{" "}
            {participant.totalMinionsKilled}
          </p>
          <p>
            <strong>Vision Score:</strong> {participant.visionScore}
          </p>
          <p>
            <strong>Ward Placed:</strong> {participant.wardsPlaced}
          </p>
          <p>
            <strong>Ward Killed:</strong> {participant.wardsKilled}
          </p>
          {/* Render additional participant details as needed */}
        </div>
      ))}

      <h2>Teams</h2>
      {match.info.teams.map((team) => (
        <div key={team.teamId}>
          <h3>Team {team.teamId}</h3>
          <p>
            <strong>Win:</strong> {team.win ? "Yes" : "No"}
          </p>
          <h4>Bans:</h4>
          {team.bans.map((ban) => (
            <p key={ban.pickTurn}>
              Champion ID: {ban.championId} (Pick Turn: {ban.pickTurn})
            </p>
          ))}
          <h4>Objectives:</h4>
          <p>
            <strong>Baron:</strong> Kills: {team.objectives.baron.kills}, First:{" "}
            {team.objectives.baron.first ? "Yes" : "No"}, Deaths:{" "}
            {team.objectives.baron.deaths}, Steals:{" "}
            {team.objectives.baron.steals}
          </p>
          <p>
            <strong>Dragon:</strong> Kills: {team.objectives.dragon.kills},
            First: {team.objectives.dragon.first ? "Yes" : "No"}, Deaths:{" "}
            {team.objectives.dragon.deaths}, Steals:{" "}
            {team.objectives.dragon.steals}
          </p>
          <p>
            <strong>Rift Herald:</strong> Kills:{" "}
            {team.objectives.riftHerald.kills}, First:{" "}
            {team.objectives.riftHerald.first ? "Yes" : "No"}, Deaths:{" "}
            {team.objectives.riftHerald.deaths}, Steals:{" "}
            {team.objectives.riftHerald.steals}
          </p>
          <p>
            <strong>Inhibitor:</strong> Kills: {team.objectives.inhibitor.kills}
            , First: {team.objectives.inhibitor.first ? "Yes" : "No"}, Deaths:{" "}
            {team.objectives.inhibitor.deaths}, Steals:{" "}
            {team.objectives.inhibitor.steals}
          </p>
          <p>
            <strong>Tower:</strong> Kills: {team.objectives.tower.kills}, First:{" "}
            {team.objectives.tower.first ? "Yes" : "No"}, Deaths:{" "}
            {team.objectives.tower.deaths}, Steals:{" "}
            {team.objectives.tower.steals}
          </p>
        </div>
      ))}

      <h2>Challenges</h2>
      {match.info.participants.map((participant) => (
        <div key={participant.participantId}>
          <h3>Participant {participant.participantId} Challenges</h3>
          <p>
            <strong>Baron Buff Gold Advantage Over Threshold:</strong>{" "}
            {participant.challenges.baronBuffGoldAdvantageOverThreshold}
          </p>
          <p>
            <strong>Control Ward Time Coverage In River Or Enemy Half:</strong>{" "}
            {participant.challenges.controlWardTimeCoverageInRiverOrEnemyHalf}
          </p>
          <p>
            <strong>Earliest Baron:</strong>{" "}
            {participant.challenges.earliestBaron}
          </p>
          <p>
            <strong>Earliest Dragon Takedown:</strong>{" "}
            {participant.challenges.earliestDragonTakedown}
          </p>
          <p>
            <strong>Earliest Elder Dragon:</strong>{" "}
            {participant.challenges.earliestElderDragon}
          </p>
          <p>
            <strong>Early Laning Phase Gold Exp Advantage:</strong>{" "}
            {participant.challenges.earlyLaningPhaseGoldExpAdvantage}
          </p>
          {/* Render additional challenge details as needed */}
        </div>
      ))}

      {/* Add more sections for other details if necessary */}
    </div>
  );
};

export default MatchPage;
