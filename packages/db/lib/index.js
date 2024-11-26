"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.schema = exports.connectionString = void 0;
exports.createConnectionString = createConnectionString;
exports.createDrizzleDB = createDrizzleDB;
const pg_1 = require("pg");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const schema = __importStar(require("./schema"));
exports.connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
function createConnectionString(user, password, host, port, dbName) {
    return `postgres://${user}:${password}@${host}:${port}/${dbName}`;
}
const connectionCLient = new pg_1.Pool({ connectionString: exports.connectionString });
exports.schema = __importStar(require("./schema"));
exports.db = (0, node_postgres_1.drizzle)({ client: connectionCLient, schema });
function createDrizzleDB(...args) {
    const connectionString = createConnectionString(...args);
    const connectionPool = new pg_1.Pool({ connectionString });
    return (0, node_postgres_1.drizzle)(connectionPool, { schema });
}
//# sourceMappingURL=index.js.map