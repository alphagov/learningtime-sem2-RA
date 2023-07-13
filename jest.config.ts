import { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    coveragePathIgnorePatterns: ['<rootDir>/.yarn'],
    testMatch: ['<rootDir>/src/**/*.test.ts']
}

export default config
