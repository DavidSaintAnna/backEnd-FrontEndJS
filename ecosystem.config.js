module.exports = {
    apps: [{
            name: "server",
            script: "./server.js",
            cwd: "backend/",
            watch: true,
            env_development: {
                NODE_ENV: "development"
            }
        },
        {
            name: "app",
            script: "./app.js",
            cwd: "frontend/",
            watch: true,
            env_development: {
                NODE_ENV: "development"
            }
        }
    ]
}