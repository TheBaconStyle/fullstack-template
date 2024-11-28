import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
export declare const connectionString: string;
export declare function createConnectionString(user: string, password: string, host: string, port: string, dbName: string): string;
export * as schema from "./schema";
export declare const db: any;
export type DBType = NodePgDatabase<typeof schema>;
export declare function createDrizzleDB(...args: Parameters<typeof createConnectionString>): any;
