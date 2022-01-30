import {Knex} from "knex";
import SchemaBuilder = Knex.SchemaBuilder;

export type driverType = 'sqlite3'

export interface KnexClient {
    schema: SchemaBuilder
    raw (query: string): Promise<unknown[]>
}

export type TypeResolvable = string | boolean | number | null | undefined

