import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.meuapp.assistentejuridicogithubpages5',
  appName: 'assistente juridico github pages (5)',
  webDir: 'dist',
  server: { androidScheme: 'https' },
  plugins: {
    SQLiteConnection: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
    },
    Preferences: {
      group: 'NativeStorage',
    },
  },
};
export default config;
