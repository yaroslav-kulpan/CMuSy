/* eslint-disable */
export default {
  displayName: 'cmusy-ui-plugin',
  preset: '../../jest.preset.js',
  testEnvironment: 'nodejs',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/cmusy-ui-plugin',
};
