const Database = require('./config');

const initDb = {
  async init() {
    const db =  Database();

  
    await db.exec(`CREATE TABLE profile(
        id INTEGER PRIMARY KEY AUTOINCREMET,
        name TEXT,
        avatar TEXT,
        monthly_budget INT,
        days_per_week INT,
        hours_per_day INT,
        vacation_per_year INT,
        value_hour INT
    );`)

    await db.exec(`CREATE TABLE jobs(
        id INTEGER PRIMARY KEY AUTOINCREMET,
        name TEXT,
       daily_hours INT,
       total_hours INT,
       created_at  DATETIME,
    );`)

    await db.run(`
        INSERT INTO profile(
            name,
            avatar,
            monthly_budget,
            days_per_week,
            hours_per_day,
            vacation_per_year,
            value_hour
        ) VALUES (
            "Carlos Pio",
            "https://github.com/carlospio.png",
            3000,
            5,
            4,
            4,
           
        );`)

    await db.run(`
    INSER INTO jobs (
        name, 
        daily_hours, 
        total_hours, 
        created_at
    ) VALUES (
    
        "Pizzaria Guloso",
        2,
        1,
        1692487349443
    );`)

    await db.run(`
    INSER INTO jobs (
        name, 
        daily_hours, 
        total_hours, 
        created_at
    ) VALUES (
        "OneTwo Project",
        3,
        1692487349443
        47,
    );`)

    await db.close();
  },
};

initDb.init();








