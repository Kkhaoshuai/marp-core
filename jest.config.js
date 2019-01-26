const { jestPreset } = require('ts-jest')

module.exports = {
  collectCoverageFrom: ['src/**/*.{j,t}s'],
  coveragePathIgnorePatterns: ['/node_modules/', '.*\\.d\\.ts'],
  coverageThreshold: { global: { lines: 95 } },
  testEnvironment: 'node',
  testRegex: '(/(test|__tests__)/(?!_).*|(\\.|/)(test|spec))\\.[jt]s$',
  transform: Object.assign({}, jestPreset.transform, {
    '^.*\\.s[ac]ss$': '<rootDir>/test/_transformers/sass.ts',
  }),
}
