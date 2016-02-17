var config = module.exports;

config["My tests"] = {
    rootPath: "./",
    environment: "node", // or "node"
    sources: [
        "src/totil.js"
    ],
    tests: [
        "tests/*.js"
    ]
}