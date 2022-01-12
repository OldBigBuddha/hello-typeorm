import { generateUuidV4 } from "libs/utils/uuid";
import { generateRandomString } from "libs/utils/string";

interface MustProperties {
  firstName: string;
  lastName: string;
  age: number;
}

interface ValueObject extends MustProperties {
  id?: number;
  uuid: string;
  rnd: string;
}

const RND_LENGTH = 16;

export default class UserEntity {
  private readonly values: ValueObject;

  private constructor(values: ValueObject) {
    this.values = values;
  }

  static factory(properties: MustProperties): UserEntity {
    return new UserEntity({
      uuid: generateUuidV4(),
      ...properties,
      rnd: generateRandomString(RND_LENGTH),
    })
  }

  static _factoryWithAllProperties(values: ValueObject): UserEntity {
    return new UserEntity(values);
  }

  get id(): number {
    if (this.values.id === undefined) {
      throw new Error("This entity doesn't have id.");
    }

    return this.values.id;
  }

  get uuid(): string {
    return this.values.uuid;
  }

  get firstName(): string {
    return this.values.firstName;
  }

  get lastName(): string {
    return this.values.lastName;
  }

  get age(): number {
    return this.values.age;
  }

  get rnd(): string {
    return this.values.rnd;
  }

  /**
   * このエンティティが永続化済みかを調べる
   * @returns 永続化されていれば（id が存在すれば）True
   */
  isPresisted(): boolean {
    return this.values.id !== undefined;
  }
}