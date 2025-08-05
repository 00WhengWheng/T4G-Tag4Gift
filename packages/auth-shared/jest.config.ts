
// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config.js');

  ...baseConfig,
  displayName: 'auth-shared',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  rootDir: '.',
};
