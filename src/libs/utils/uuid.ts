import * as uuid from "uuid";

/**
 * UUID V4 を生成する
 *
 * @returns UUID V4
 */
export function generateUuidV4(): string {
  return uuid.v4();
}