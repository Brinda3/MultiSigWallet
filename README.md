# MultiSig Wallet

This repository contains a Solidity smart contract for a **MultiSig Wallet**, allowing multiple owners to collectively manage and execute transactions securely. The contract is deployed using **Truffle**.

## Features
- **Multi-Owner Functionality:** Supports multiple owners, ensuring no single owner has unilateral control.
- **Transaction Submission & Confirmation:** Owners can submit and confirm transactions before execution.
- **Transaction Execution:** Only transactions with the required number of confirmations can be executed.
- **Owner Management:** Owners can add or remove other owners.
- **Adjustable Confirmations:** The required number of confirmations can be updated dynamically.
- **Event Logging:** Tracks key operations like deposits, transaction submissions, confirmations, executions, and revocations.

## Contract Functions

### Core Functions
1. `submitTransaction(address _to, uint256 _value, bytes memory _data)`
   - Submits a new transaction.

2. `confirmTransaction(uint256 _txIndex)`
   - Confirms a transaction by an owner.

3. `executeTransaction(uint256 _txIndex)`
   - Executes a transaction if the required confirmations are met.

4. `revokeConfirmation(uint256 _txIndex)`
   - Revokes a previously confirmed transaction.

### Owner Management
1. `addOwner(address _newOwner)`
   - Adds a new owner to the wallet.

2. `removeOwner(address _owner)`
   - Removes an existing owner.

3. `changeNumConfirmationsRequired(uint256 _newNumConfirmationsRequired)`
   - Updates the number of confirmations required for a transaction.

### Utility Functions
1. `getOwners()`
   - Returns the list of wallet owners.

2. `getTransactionCount()`
   - Returns the total number of transactions.

3. `getTransaction(uint256 _txIndex)`
   - Retrieves details of a specific transaction.

### Fallback Function
- The contract accepts Ether through a `receive()` function.

## Events
- `Deposit`: Emitted on Ether deposits.
- `SubmitTransaction`: Emitted when a transaction is submitted.
- `ConfirmTransaction`: Emitted when a transaction is confirmed.
- `RevokeConfirmation`: Emitted when a confirmation is revoked.
- `ExecuteTransaction`: Emitted when a transaction is executed.
- `OwnerAdded`: Emitted when a new owner is added.
- `OwnerRemoved`: Emitted when an owner is removed.
- `RequiredConfirmationsChanged`: Emitted when the required confirmations are updated.

## Deployment
This contract is deployed using **Truffle**. Follow these steps to deploy:

1. Clone this repository.
2. Install Truffle:
   ```bash
   npm install -g truffle
   ```
3. Compile the contract:
   ```bash
   truffle compile
   ```
4. Deploy to your network:
   ```bash
   truffle migrate --network <network_name>
   ```

## Usage

1. Deploy the contract with the initial owners and required confirmations.
2. Fund the contract by sending Ether to its address.
3. Use the available functions to manage transactions and owners.
4. Monitor the contract's events for real-time updates.

## Requirements
- Solidity `^0.8.21`
- Truffle Framework
- Node.js and npm
- Ganache (for local testing)

## Example Workflow
1. **Deposit Ether:** Send funds to the contract.
2. **Submit Transaction:** An owner submits a transaction.
3. **Confirm Transaction:** Other owners confirm the transaction.
4. **Execute Transaction:** After reaching the required confirmations, the transaction is executed.

## Security Considerations
- Ensure the initial owners and confirmation count are set correctly during deployment.
- Confirm transactions carefully, as executed transactions cannot be reversed.
- Use secure key management practices for owner accounts.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

Feel free to contribute, open issues, or provide suggestions for improvements!
