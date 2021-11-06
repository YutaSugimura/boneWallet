# BoneWallet

A simple Ethereum wallet using Ethers.js

## Execution Environment

- yarn v3.0.0
- node 14.15.4

## Setup

```zsh
  yarn install

  # ios
  npx pod-install ios
```

2. Add .env file

```zsh
  cp .env.template .env
```

3. write .env

```.env
  INFURA_PROJECT_ID=
  INFURAPROJECT_SECRET=
```

4. start

```zsh
  yarn start

  # Transfer
  yarn ios
  # or
  yarn android
```

# Stack

- React Native
- Ethers

# react-native performance and randombytes

https://github.com/ethers-io/ethers.js/issues/1503
