import { MODULE_ID } from "../CONSTANTS.mjs";

export function renderChatMessage(chatMessage, element, speaker) {
  if (game.settings.get(MODULE_ID, "enhance_visibility_whispers")) {
    // Default assume the message is from me
    let messageColor = game.users.get(chatMessage._source.user).color;

    // Color the message by the user that whispers you
    if (chatMessage.whisper.includes(game.user.id)) {
      messageColor = game.users.get(chatMessage._source.user).color;
    }

    // Color the message as the recipient if only one available
    if (chatMessage.whisper.filter(u => u !== game.user.id).length === 1) {
      messageColor = game.users.get(
        chatMessage.whisper.filter(u => u !== game.user.id).pop()
      ).color;
    }

    // Color the element using a class that we define in CSS file
    if (
      !$(element).find("div.item-card").length
      || !$(element).find("div.dice-roll").length
    ) { 
      $(element)
      .css({
        "background-color": messageColor,
        "border-color": messageColor
      })
      .addClass("enhance-message-visibility");  
    }
  }
};
