import { remultExpress } from "remult/remult-express";
import { SqlDatabase } from "remult";
import sqlite3 from "sqlite3";
import { Sqlite3DataProvider  } from "remult/remult-sqlite3";
import { Task } from "../demo/todo/Task.js";
  
export const api = remultExpress({
  dataProvider: new SqlDatabase( 
    new Sqlite3DataProvider (new sqlite3.Database('./mydb.sqlite')), 
  ),
  admin: true,
  entities: [Task],
});