# MetaCord

MetaCord is a decentralized chat application that leverages blockchain technology for secure, transparent, and user-controlled communication. The project features a React.js frontend, Ethereum wallet authentication, and smart contract integration for managing users, chat rooms, and messages.

## Project Information

MetaCord aims to provide a modern alternative to traditional chat platforms by utilizing blockchain for data integrity, privacy, and decentralization. Users can connect their Ethereum wallet (such as MetaMask) to authenticate and interact with the platform. All chat rooms, messages, and user actions are managed through smart contracts, ensuring that data is immutable and only accessible by authorized users. The frontend is built with React.js for a responsive and intuitive user experience, while the backend smart contracts are written in Solidity and deployed on an EVM-compatible blockchain. MetaCord demonstrates how decentralized applications (dApps) can enhance security, transparency, and user control in digital communication.

## Features

- Ethereum wallet authentication via MetaMask
- Real-time chat room and message management
- Decentralized user and data handling using smart contracts
- Responsive and modern React.js interface
- Secure, immutable message storage on the blockchain

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) browser extension
- (Optional for smart contract development) [Hardhat](https://hardhat.org/) or [Truffle](https://trufflesuite.com/)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/MetaCord.git
   cd MetaCord
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the frontend development server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open the app in your browser**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Connect your MetaMask wallet to begin using MetaCord

## Smart Contract Development (Optional)

If you want to develop or deploy smart contracts:

1. **Install Hardhat**
   ```bash
   npm install --save-dev hardhat
   ```

2. **Compile contracts**
   ```bash
   npx hardhat compile
   ```

3. **Run local blockchain (optional)**
   ```bash
   npx hardhat node
   ```

4. **Deploy contracts**
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

## Project Structure

```
MetaCord/
├── src/
│   ├── components/
│   │   └── Navigation.js
│   ├── contracts/
│   │   └── MetaCord.sol
│   ├── App.js
│   └── index.js
├── public/
├── package.json
├── hardhat.config.js
└── README.md
```

## Usage

- Click "Connect" in the navigation bar to link your MetaMask wallet.
- Create or join chat rooms and send messages securely.
- All actions are managed and stored via blockchain smart contracts.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or new features.

---

**Note:** For full blockchain functionality, ensure your MetaMask is connected to the correct network and smart
