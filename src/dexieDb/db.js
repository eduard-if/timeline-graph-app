import Dexie from "dexie";

export const db = new Dexie('myFirstDatabase');
db.version(1).stores(
    {
        timelines: '++id, title, description'
    }
);