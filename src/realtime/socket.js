import { io } from "socket.io-client";

const socket = io("https://aliko-jb-git-282712708896.us-central1.run.app", {
  transports: ["websocket"],
});

export default socket;
