import { Config } from 'jest';

const config: Config = {
  displayName: 'auth-shared',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: { '^.+\\.[tj]s$': 'ts-jest' },
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageDirectory: '../../coverage/packages/auth-shared',
};

export default config;
