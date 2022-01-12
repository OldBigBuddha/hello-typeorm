import "reflect-metadata";
import { exit } from "process";

import * as Repository from "repositories/Repository";
import * as UserRepository from "repositories/UserRepository";

import UserEntity from "entities/UserEntity";

async function main(): Promise<void> {
    try {

        console.log("Connecting to DB...");
        await Repository.init();
        console.log("Connected!");

        console.log("=== Ping Test ===");
        console.log("Run `SELECT 1`...");
        await Repository.ping();
        console.log("Ping Test is successful");

        console.log("=== Insert ===");
        console.log("Inserting a new user into the database...");

        const entity = UserEntity.factory({
            firstName: "Shinra",
            lastName: "Yamakawa",
            age: 20,
        });

        const savedUser = await UserRepository.save(entity);

        console.log("Saved a new user with id: " + savedUser.id);

        console.log("=== FindAll ===");
        const users = await UserRepository.findAll();
        console.log("Loaded users: ", users);
        console.log(`There are ${users.length} users.`);

        console.log("=== count ===");
        const count = await UserRepository.count();
        console.log(`All user count: ${count}`);
    } catch (e) {
        console.error(e);
    }
}

main().finally(() => {
    Repository.close().then(() => {
        console.log("DB connection closed successfully.");
        exit(0);
    }).catch((e) => {
        console.error("DB connection close faild.");
        console.error(e);

        exit(1);
    })
});
