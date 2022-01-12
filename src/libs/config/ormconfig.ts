import "reflect-metadata";

import { ConnectionOptions } from "typeorm";

import { getEnv } from "libs/utils/env";

const ormConfig: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: getEnv("DB_HOST"),
  port: parseInt(getEnv("DB_PORT"), 10),
  username: getEnv("DB_USERNAME"),
  password: getEnv("DB_PASSWORD"),
  database: getEnv("DB_DATABASE"),
  synchronize: false,
  logging: Boolean(getEnv("DB_ENABLE_LOGGING")),
  entities: ["src/models/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  }
}

export default ormConfig;