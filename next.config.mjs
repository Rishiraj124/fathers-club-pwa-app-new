/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const withPWA = withPWAInit({
  dest: 'public', //creates service workers in the destination
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false, // means dont disable the PWA on any environment
  workboxOptions: {
    disableDevLogs: true,
  },
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default withPWA(nextConfig);
