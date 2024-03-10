import 'server-only';

import {drizzle} from 'drizzle-orm/node-postgres'
import * as schema from './schema'

import {Pool} from "pg";

const connectionString = process.env.DATABASE_URL


const pool = new Pool({
    connectionString
});

const db = drizzle(pool, {schema});

export {db}

