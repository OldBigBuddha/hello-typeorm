import * as randomstring from "randomstring";

/**
 * ランダムな文字列を生成する
 *
 * @param length 文字列の長さ
 * @returns ランダムな文字列
 */
export function generateRandomString(length: number): string {
  return randomstring.generate(length);
}