import Knex from "knex";
import { MikroORM } from "@mikro-orm/core";
import AmongUsSession from "./among-us-session";
import PlayerLink from "./player-link";
import SessionChannel from "./session-channel";

const dbConfig = require("../../knexfile.js").production;

// Run latest migrations on startup.
Knex(dbConfig).migrate.latest();

export let orm!: MikroORM;

export async function connectToDatabase() {
    orm = await MikroORM.init({
        entities: [AmongUsSession, SessionChannel, PlayerLink],
        baseDir: __dirname,
        ...dbConfig,
    });
}
