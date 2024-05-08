export default {
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/file-mock.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@app/(.*)$': '<rootDir>/$1',
    'next/router': '<rootDir>/__mocks__/next/router.js',
    'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
  },
  modulePaths: ['<rootDir>'],
  preset: 'ts-jest',
  rootDir: 'src',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
}
