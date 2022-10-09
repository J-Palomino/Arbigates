<a href="https://gates.wtf/">
  <img alt="gates.wtf" src="https://user-images.githubusercontent.com/34306844/194741838-79d8eda2-24d5-4190-98bb-4854923b6bdc.png" />
</a>

# Gates

**User verification using decentralised identity and custom conditions**

Gates is a web3 tool that makes it easy to create custom condtioned gates for your dapp, metaverse, or NFT project.

- ✨ Straight-forward API to check user access without violating privacy
- ⛩ Easily customizable conditions
- 🫡 Built on top of [Next.js](https://nextjs.org) and [wagmi](https://github.com/tmm/wagmi)

## About

Gates expands the concept of access management by combining on- and off-chain identities, arbitrary conditions, and increased customisability. Managing user access and creating personalised experiences has never been easier.

To protect users’ data, we’re utilising DID (decentralised identities) for Ceramic where only the user own and can modify their (encrypted) data. Enjoy!

## Quick start

To run an example locally, install dependencies.

```bash
yarn install
```

Then go into the `web` directory.

```bash
cd web
```

Then run the dev script.

```bash
yarn dev
```

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org) app
- `smart-contracts`: smart contracts with hardhat
- `web3-config`: deployments, generated types from contract and common web3 config
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting


## Contributions

Lorem ipsum.

## License

Licensed under the MIT License.
