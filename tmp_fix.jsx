socket.onmessage = (event) => {
  try {
    const msg = JSON.parse(event.data);

    if (msg.type === "telemetry") {
      const data = msg.payload;

      console.log("LIVE DATA:", data);

      setLatestStage(data.stage || "UNKNOWN");

      setData((prev) => [
        ...prev.slice(-10),
        data
      ]);
    }
  } catch (e) {
    console.log("WS ERROR:", e);
  }
};
