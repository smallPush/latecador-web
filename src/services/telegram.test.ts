import { expect, test, describe, spyOn, beforeEach, afterEach } from "bun:test";
import { sendTelegramMessage } from "./telegram";

describe("sendTelegramMessage", () => {
  const originalToken = process.env.VITE_TELEGRAM_BOT_TOKEN;
  const originalChatId = process.env.VITE_TELEGRAM_CHAT_ID;

  beforeEach(() => {
    process.env.VITE_TELEGRAM_BOT_TOKEN = "test-token";
    process.env.VITE_TELEGRAM_CHAT_ID = "test-chat-id";

    spyOn(console, 'error').mockImplementation(() => {});
    spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    process.env.VITE_TELEGRAM_BOT_TOKEN = originalToken;
    process.env.VITE_TELEGRAM_CHAT_ID = originalChatId;

    // @ts-ignore
    console.error.mockRestore();
    // @ts-ignore
    console.warn.mockRestore();

    // @ts-ignore
    if (global.fetch.mockRestore) {
        // @ts-ignore
        global.fetch.mockRestore();
    }
  });

  test("should send message successfully", async () => {
    const mockFetch = spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve(new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }))
    );

    await sendTelegramMessage("Hello Test");

    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.telegram.org/bottest-token/sendMessage",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          chat_id: "test-chat-id",
          text: "Hello Test",
          parse_mode: "HTML",
        }),
      })
    );
  });

  test("should warn if configuration is missing", async () => {
    delete process.env.VITE_TELEGRAM_BOT_TOKEN;
    const mockFetch = spyOn(global, "fetch").mockImplementation(() => Promise.resolve(new Response()));

    await sendTelegramMessage("Hello Test");

    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining("Telegram notifications are not configured")
    );
    expect(mockFetch).not.toHaveBeenCalled();
  });

  test("should log error if response is not ok", async () => {
    const errorData = { error_code: 400, description: "Bad Request" };
    spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve(new Response(JSON.stringify(errorData), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }))
    );

    await sendTelegramMessage("Hello Test");

    expect(console.error).toHaveBeenCalledWith(
      "Failed to send Telegram message:",
      errorData
    );
  });

  test("should log error if fetch throws", async () => {
    const error = new Error("Network failure");
    spyOn(global, "fetch").mockImplementation(() => Promise.reject(error));

    await sendTelegramMessage("Hello Test");

    expect(console.error).toHaveBeenCalledWith(
      "Error sending Telegram message:",
      error
    );
  });
});
