import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  enabled: process.env.NODE_ENV === "production",
  theme: {},
  content: [],
};
