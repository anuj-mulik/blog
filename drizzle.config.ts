import 'dotenv/config';
import type {Config} from 'drizzle-kit';

export default {
    schema: './db/schema.ts',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        connectionString: 'postgres://postgres.hisxsxjkafzniqwezzsm:bumzy4-bokmot-zedjIt@aws-0-us-west-1.pooler.supabase.com:6543/postgres'
    },
} satisfies Config;