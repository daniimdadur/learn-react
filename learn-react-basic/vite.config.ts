import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  },
  build : {
    rollupOptions : {
      input : {
        index : "index.html",
        hello_world : "hello-world.html",
        task : "task.html",
        counter : "counter.html",
        note : "note.html",
        snapshot : "snapshot.html",
        profile : "profile.html",
        contact: "contact.html"
      }
    }
  }
})
