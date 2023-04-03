import { MODULE_ID } from "../CONSTANTS.mjs"

export async function createChatMessage(chatMessage, options, userId) {
  if (
    game.settings.get(MODULE_ID, "whisper_notification")
    && chatMessage.whisper.includes(game.user.id)
  ) {
    ui.notifications.info(
      `Got a whisper from ${game.users.get(userId).name}.`,
      { permanent: true }
    )
  }
};
