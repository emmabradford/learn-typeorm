import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {
    const user = new User();

    user.lastName = "Wei";
    user.firstName = "Ying";
    user.email = "Wuxian@BurialMounds.com";
    user.role = "Yiling Laozu";

    await user.save()

    console.log("Mo xuanyu is dead. Wei Ying is back, baby! DOon't tell Lan Zhan");

}).catch(error => console.log(error));
