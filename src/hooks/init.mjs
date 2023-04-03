import { MODULE_ID } from "../CONSTANTS.mjs";

export function init() {
  console.log(`${MODULE_ID} | Initializing Module`);

  registerSettings();
};

/* ----------------------------------------- */

function registerSettings() {
  game.settings.register(MODULE_ID, "whisper_notification", {
    name: "Show notifications when you get whispers?",
    hint: "This will allow you to get a notification banner if a whisper is sent to you.",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });
  
  game.settings.register(MODULE_ID, "enhance_visibility_whispers", {
    name: "Make private messages stand out in chat?",
    hint: "This will color the messages to pop out in chat for you.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
};
