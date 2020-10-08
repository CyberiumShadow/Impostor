export const enum LobbyRegion {
    ASIA = "Asia",
    NORTH_AMERICA = "North America",
    EUROPE = "Europe",
}

export const enum SessionState {
    LOBBY = "lobby",
    PLAYING = "playing",
    DISCUSSING = "discussing",
}

export const SERVER_IPS = {
    [LobbyRegion.EUROPE]: "172.105.251.170",
    [LobbyRegion.NORTH_AMERICA]: "198.58.99.71",
    [LobbyRegion.ASIA]: "139.162.111.196",
};

export const SHORT_REGION_NAMES = {
    [LobbyRegion.EUROPE]: "EU",
    [LobbyRegion.NORTH_AMERICA]: "NA",
    [LobbyRegion.ASIA]: "AS",
};

export const COLOR_EMOTES: { [key: number]: string } = {
    [0]: "crewmate_red:763817185583038494",
    [1]: "crewmate_blue:763817185285767239",
    [2]: "crewmate_green:763817185419329546",
    [3]: "crewmate_pink:763817185390493717",
    [4]: "crewmate_orange:763817185226653769",
    [5]: "crewmate_yellow:763817185452883970",
    [6]: "crewmate_black:763817185424048128",
    [7]: "crewmate_white:763817185222459396",
    [8]: "crewmate_purple:763817185675051038",
    [9]: "crewmate_brown:763817185298350131",
    [10]: "crewmate_cyan:763817185234780202",
    [11]: "crewmate_lime:763817185494695936",
};

export const DEAD_COLOR_EMOTES: { [key: number]: string } = {
    [0]: "crewmate_red_dead:763817185473986580",
    [1]: "crewmate_blue_dead:763817185113276460",
    [2]: "crewmate_green_dead:763817185285242933",
    [3]: "crewmate_pink_dead:763817185507934280",
    [4]: "crewmate_orange_dead:763817185708605440",
    [5]: "crewmate_yellow_dead:763817185503346748",
    [6]: "crewmate_black_dead:763817185335312405",
    [7]: "crewmate_white_dead:763817185508065310",
    [8]: "crewmate_purple_dead:763817185151680514",
    [9]: "crewmate_brown_dead:763817185142505553",
    [10]: "crewmate_cyan_dead:763817185419591690",
    [11]: "crewmate_lime_dead:763817185361395753",
};

export const BOT_INVITE_LINK =
    "https://discord.com/api/oauth2/authorize?client_id=763830936570953769&permissions=8&scope=bot";

export const COLOR_EMOTE_IDS = Object.values(COLOR_EMOTES).map(x => x.split(":")[1]);

export const EMOTE_IDS_TO_COLOR: { [key: string]: number } = {};
Object.entries(COLOR_EMOTES).forEach(x => (EMOTE_IDS_TO_COLOR[x[1].split(":")[1]] = +x[0]));

export const GROUPING_DISABLED_EMOJI = "<:warningNo:729662084077453394>";
export const GROUPING_ENABLED_EMOJI = "<:warningYes:729662084366991410>";
export const GROUPING_TOGGLE_EMOJI = ":warningModify:729662084346019842";
export const LEAVE_EMOJI = ":fastfoward:729687243790483517";
