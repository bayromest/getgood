// MatchDto definition
export interface MatchDto {
  metadata: MetadataDto;
  info: InfoDto;
}

// MetadataDto definition
interface MetadataDto {
  dataVersion: string;
  matchId: string;
  participants: string[]; // List of participant PUUIDs
}

// InfoDto definition
interface InfoDto {
  endOfGameResult?: string; // Indicates if the game ended in termination
  gameCreation: number; // Unix timestamp for when the game was created
  gameDuration: number; // Duration in milliseconds (pre-patch 11.20) or seconds (post-patch 11.20)
  gameEndTimestamp?: number; // Unix timestamp for when the match ended
  gameId: number; // Unique game identifier
  gameMode: string; // Game mode
  gameName: string; // Game name
  gameStartTimestamp: number; // Unix timestamp for when the match started
  gameType: string; // Game type
  gameVersion: string; // Game version (first two parts indicate the patch)
  mapId: number; // Map ID
  participants: ParticipantDto[];
  platformId: string; // Platform where the match was played
  queueId: number; // Queue ID
  teams: TeamDto[];
  tournamentCode?: string; // Tournament code used to generate the match
}

// ParticipantDto definition
interface ParticipantDto {
  allInPings: number; // Yellow crossed swords
  assistMePings: number; // Green flag
  assists: number;
  baronKills: number;
  bountyLevel: number;
  champExperience: number;
  champLevel: number;
  championId: number; // Validated with championName for matches before patch 11.4
  championName: string;
  commandPings: number; // Blue generic ping
  championTransform: number; // Kayn's transformations (0 - None, 1 - Slayer, 2 - Assassin)
  consumablesPurchased: number;
  challenges: ChallengesDto;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  detectorWardsPlaced: number;
  doubleKills: number;
  dragonKills: number;
  eligibleForProgression: boolean;
  enemyMissingPings: number; // Yellow question mark
  enemyVisionPings: number; // Red eyeball
  firstBloodAssist: boolean;
  firstBloodKill: boolean;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  holdPings: number;
  getBackPings: number; // Yellow circle with horizontal line
  goldEarned: number;
  goldSpent: number;
  individualPosition: string; // Player's position in isolation
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;
  killingSprees: number;
  kills: number;
  lane: string;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  missions?: MissionsDto; // Missions data
  neutralMinionsKilled: number; // Incremented on kills of kPet and kJungleMonster
  needVisionPings: number; // Green ward
  nexusKills: number;
  nexusTakedowns: number;
  nexusLost: number;
  objectivesStolen: number;
  objectivesStolenAssists: number;
  onMyWayPings: number; // Blue arrow pointing at ground
  participantId: number;
  playerScore0: number;
  playerScore1: number;
  playerScore2: number;
  playerScore3: number;
  playerScore4: number;
  playerScore5: number;
  playerScore6: number;
  playerScore7: number;
  playerScore8: number;
  playerScore9: number;
  playerScore10: number;
  playerScore11: number;
  pentaKills: number;
  perks?: PerksDto; // Perks data
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  placement: number;
  playerAugment1: number;
  playerAugment2: number;
  playerAugment3: number;
  playerAugment4: number;
  playerSubteamId: number;
  pushPings: number; // Green minion
  profileIcon: number;
  puuid: string;
  quadraKills: number;
  riotIdGameName: string;
  riotIdName: string;
  riotIdTagline: string;
  role: string;
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  subteamPlacement: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  teamEarlySurrendered: boolean;
  teamId: number;
  teamPosition: string; // Team's position
  timeCCingOthers: number;
  timePlayed: number;
  totalAllyJungleMinionsKilled: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalEnemyJungleMinionsKilled: number;
  totalHeal: number;
  totalHealsOnTeammates: number;
  totalMinionsKilled: number;
  totalTimeCCDealt: number;
  totalTimeSpentDead: number;
  totalUnitsHealed: number;
  tripleKills: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  turretTakedowns: number;
  turretsLost: number;
  unrealKills: number;
  visionScore: number;
  visionClearedPings: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}

interface MissionsDto {
  playerScore0: number;
  playerScore1: number;
  playerScore2: number;
  playerScore3: number;
  playerScore4: number;
  playerScore5: number;
  playerScore6: number;
  playerScore7: number;
  playerScore8: number;
  playerScore9: number;
  playerScore10: number;
  playerScore11: number;
}

// ChallengesDto definition
interface ChallengesDto {
  // _12AssistStreakCount: number;
  baronBuffGoldAdvantageOverThreshold: number;
  controlWardTimeCoverageInRiverOrEnemyHalf: number;
  earliestBaron: number;
  earliestDragonTakedown: number;
  earliestElderDragon: number;
  earlyLaningPhaseGoldExpAdvantage: number;
  fasterSupportQuestCompletion: number;
  fastestLegendary: number;
  hadAfkTeammate: number;
  highestChampionDamage: number;
  highestCrowdControlScore: number;
  highestWardKills: number;
  junglerKillsEarlyJungle: number;
  killsOnLanersEarlyJungleAsJungler: number;
  laningPhaseGoldExpAdvantage: number;
  legendaryCount: number;
  maxCsAdvantageOnLaneOpponent: number;
  maxLevelLeadLaneOpponent: number;
  mostWardsDestroyedOneSweeper: number;
  mythicItemUsed: number[]; // Ensure it is an array of numbers
  playedChampSelectPosition: number;
  soloTurretsLategame: number;
  takedownsFirst25Minutes: number;
  teleportTakedowns: number;
  thirdInhibitorDestroyedTime: number;
  threeWardsOneSweeperCount: number;
  visionScoreAdvantageLaneOpponent: number;
  InfernalScalePickup: number;
  fistBumpParticipation: number;
  voidMonsterKill: number;
  abilityUses: number;
  acesBefore15Minutes: number;
  alliedJungleMonsterKills: number;
  baronTakedowns: number;
  blastConeOppositeOpponentCount: number;
  bountyGold: number;
  buffsStolen: number;
  completeSupportQuestInTime: number;
  controlWardsPlaced: number;
  damagePerMinute: number;
  damageTakenOnTeamPercentage: number;
  dancedWithRiftHerald: number;
  deathsByEnemyChamps: number;
  dodgeSkillShotsSmallWindow: number;
  doubleAces: number;
  dragonTakedowns: number;
  legendaryItemUsed: number[];
  effectiveHealAndShielding: number;
  elderDragonKillsWithOpposingSoul: number;
  elderDragonMultikills: number;
  enemyChampionImmobilizations: number;
  firstDragonTakedown: number;
  firstInhibitorDestroyed: number;
  goldPerMinute: number;
  goldToChampsPerMinute: number;
  highestChampionDamageTaken: number;
  jungleCampsClearedBefore10Minutes: number;
  killParticipation: number;
  killsPerMinute: number;
  magicDamageTaken: number;
  minionsKilled: number;
  monsterKills: number;
  multiKillOneSpell: number;
  objectiveDeaths: number;
  perMinute: number;
  phantomMinionKills: number;
  powerRating: number;
  visionWardsBoughtInGame: number;
  wardsPlaced: number;
  wardsVisionScore: number;
  wardKilled: number;
}

// PerksDto definition
interface PerksDto {
  statPerks: StatPerksDto;
  styles: StyleDto[];
}

// StatPerksDto definition
interface StatPerksDto {
  defense: number;
  flex: number;
  offense: number;
}

// StyleDto definition
interface StyleDto {
  description: string;
  selections: SelectionDto[];
  style: number;
}

// SelectionDto definition
interface SelectionDto {
  perk: number;
  var1: number;
  var2: number;
  var3: number;
}

// TeamDto definition
interface TeamDto {
  bans: BanDto[];
  objectives: ObjectivesDto;
  teamId: number;
  win: boolean;
}

// BanDto definition
interface BanDto {
  championId: number;
  pickTurn: number;
}

// ObjectivesDto definition
interface ObjectivesDto {
  baron: ObjectiveDto;
  champion: ObjectiveDto;
  dragon: ObjectiveDto;
  inhibitor: ObjectiveDto;
  riftHerald: ObjectiveDto;
  tower: ObjectiveDto;
}

// ObjectiveDto definition
interface ObjectiveDto {
  first: boolean;
  kills: number;
}
