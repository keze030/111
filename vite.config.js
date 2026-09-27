// Vite 的配置文件。
// Vite 只是一个"开发时帮你启动项目"的工具，这个文件一般不需要改动。
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,      // 监听 0.0.0.0，让手机 / iPad 等局域网设备也能访问
    port: 5173,      // 项目启动后在浏览器的 5173 端口访问
    open: false      // 不自动弹浏览器窗口（由我或你来手动打开）
  }
})
