import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Tic-Tak-Toe',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
