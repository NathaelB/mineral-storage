import Knex from 'knex'
import {driverType, KnexClient} from "./types";
import Application from "@mineralts/core-preview/build/application/Application";
import * as path from "path";

export default class Connection {

    public databaseClient: KnexClient | undefined



    public async initialize () {
        const driver: driverType = Application.getEnvironment().get('DRIVER') as driverType
        const databaseLocation: string = Application.getEnvironment().get('PATH') as string

        console.log(driver, databaseLocation)
        this.databaseClient = Knex({
            client: driver,
            useNullAsDefault: true,
            connection: {
                filename: path.join(process.cwd(), databaseLocation)
            }
        })

        return this.databaseClient
    }
}