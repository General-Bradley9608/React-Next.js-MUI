module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "https://source.unsplash.com/random"],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
