import { createConnection, getConnection } from "typeorm";

import config from "libs/config";

export async function init(): Promise<void> {
  await createConnection(config.dbConnection);
}

export async function ping(): Promise<void> {
  await getConnection(config.dbConnection.name).query("SELECT 1");
}

export async function close(): Promise<void> {
  await getConnection(config.dbConnection.name).close();
}