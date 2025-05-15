import { ref } from "vue"

export namespace websocket {
  export const connection = ref<WebSocket>();

  export const connect = (): void => {
    connection.value = new window.WebSocket("ws://localhost");
  }

  export const send = (message: Object): void => {
    if (!connection.value) {
      return;
    }

    connection.value.send(JSON.stringify(message));
  }
} // namespace websocket