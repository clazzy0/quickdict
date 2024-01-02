const CopyPlugin = require("copy-webpack-plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Avoid running the copying during server-side rendering
    if (!isServer) {
      if (!config.plugins) {
        config.plugins = []
      }

      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: "node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js",
              to: "[name][ext]",
            },
            {
              from: "node_modules/@ricky0123/vad-web/dist/*.onnx",
              to: "[name][ext]",
            },
            {
              from: "node_modules/onnxruntime-web/dist/*.wasm",
              to: "[name][ext]",
            },
          ],
        })
      )
    }

    // Return the altered config
    return config
  },
}

module.exports = nextConfig
