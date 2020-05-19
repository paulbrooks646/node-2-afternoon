const express = require('express');
const app = express();
const SERVER_PORT = 3001;
const messages_controller = require("./controllers/messages_controller.js");

app.use(express.json());

app.post("/api/messages", messages_controller.create)

app.get("/api/messages", messages_controller.read)

app.put("/api/messages/:id", messages_controller.update)

app.delete("/api/messages/:id", messages_controller.delete)

app.listen(SERVER_PORT, () => {
    console.log(`I am using port ${SERVER_PORT}`);
})