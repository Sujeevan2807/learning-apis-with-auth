import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/learning-apis-with-auth/',
    build: {
       rollupOptions: {
        input: {
           main: resolve(__dirname, "index.html"),
           details : resolve(__dirname, "details.html"),
           login : resolve(__dirname, "login.html"),
        },
      },
     },
});
