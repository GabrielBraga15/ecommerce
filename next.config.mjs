/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Adicione outros domínios conforme necessário
  },
  webpack(config) {
    // Adicione suas configurações personalizadas do Webpack aqui
    return config;
  },
};

export default nextConfig;
