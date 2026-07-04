export class AlikoSocket {
  constructor(onMessage) {
    this.onMessage = onMessage;
    this.ws = null;
  }

  connect() {
    this.ws = new WebSocket("ws://localhost:8082");

    this.ws.onopen = () => {
      console.log("⚡ Connected to ALIKO Realtime Engine");
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.onMessage(data);
    };

    this.ws.onclose = () => {
      console.log("❌ Disconnected. Reconnecting...");
      setTimeout(() => this.connect(), 2000);
    };
  }

  send(data) {
    if (this.ws?.readyState === 1) {
      this.ws.send(JSON.stringify(data));
    }
  }
}
