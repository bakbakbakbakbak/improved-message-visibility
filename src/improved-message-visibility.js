import { MODULE_ID } from "./CONSTANTS.mjs";
import { renderChatMessage } from "./hooks/renderChatMessage.mjs";
import { createChatMessage } from "./hooks/createChatMessage.mjs";
import { init } from "./hooks/init.mjs";

Hooks.once("init", init);
Hooks.once('ready', async function () {
    console.log(`${MODULE_ID} | Module Ready`);
});
Hooks.on("createChatMessage", createChatMessage);
Hooks.on("renderChatMessage", renderChatMessage);
