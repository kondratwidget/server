module.exports = {
    HOST: "dpg-cj2k2ip8g3n1jkja11bg-a",
    USER: "grady",
    PORT: 5432,
    PASSWORD: "5cYf1WKIq83cDD6BVxqDZQLjv3nzxEof",
    DB: "kondratdb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PORT: 5432,
//     PASSWORD: "postgres",
//     DB: "boomboom",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };