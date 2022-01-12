import UserEntity from "entities/UserEntity";

import { UserModel } from "models/UserModel";

/**
 * ユーザーを保存する
 *
 * @param user ユーザー
 */
export async function save(user: UserEntity): Promise<UserEntity> {
  const model = toModel(user);
  await model.save();
  return toEntity(model);
}

/**
 * 総ユーザー数を返す
 * @returns 件数
 */
export async function count(): Promise<number> {
  return await UserModel.count();
}

/**
 * ユーザーを全件取得する
 * @param limit 取得件数
 * @param offset オフセット
 * @returns ユーザー一覧
 */
export async function findAll(limit = 50, offset = 0): Promise<UserEntity[]> {
  const users = await UserModel.find({
    take: limit,
    skip: offset,
  });

  return users.map(toEntity);
}

/**
 * エンティティをモデルへ変換する
 *
 * @param entity エンティティ
 * @returns モデル
 */
function toModel(entity: UserEntity): UserModel {
    const model = new UserModel();

    if (entity.isPresisted()) {
        model.id = entity.id;
    }

    model.uuid = entity.uuid;
    model.firstName = entity.firstName;
    model.lastName = entity.lastName;
    model.age = entity.age;
    model.rnd = entity.rnd;

    return model;
}

/**
 * モデルをエンティティへ変換する
 *
 * @param model モデル
 * @returns エンティティ
 */
function toEntity(model: UserModel): UserEntity {
    return UserEntity._factoryWithAllProperties({
        id: model.id,
        uuid: model.uuid,
        firstName: model.firstName,
        lastName: model.lastName,
        age: model.age,
        rnd: model.rnd,
    })
}
