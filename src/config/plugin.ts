import { EggPlugin } from "midway";
export default {
  static: true, // default is true
  cors: {
    enable: true,
    package: "egg-cors",
  },
  io: {
    enable: true,
    package: "egg-socket.io",
  },
} as EggPlugin;
