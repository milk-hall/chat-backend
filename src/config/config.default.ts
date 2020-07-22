import { EggAppConfig, EggAppInfo, PowerPartial } from "midway";

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_{{keys}}";

  // add your config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    origin: "*", // 匹配规则  域名+端口  *则为全匹配
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      "/": {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };
  return config;
};
