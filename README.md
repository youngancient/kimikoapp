# Kimiko: Onchain Medical Adherence System

## Overview

Kimiko is an on-chain medical adherence system designed to help patients manage medications. Adhering to medications, tracking doctor visits, and maintaining lifestyle changes can be overwhelming, but Kimiko aims to simplify this process by rewarding patients who stay on track with their health. Patients can also decide to share these rewards with others.

With Kimiko, patients earn **tokens** and unlock **exclusive NFTs** as they follow their prescribed treatment plans, making healthcare adherence fun and rewarding!

In building this project, I used Alchemy as an RPC Provider as defined in my hardhat config.

- Kimiko Contract Repo: https://github.com/youngancient/kimiko-contract
- Scroll Alchemy RPC usage in Hardhat config: https://github.com/youngancient/kimiko-contract/blob/main/hardhat.config.ts
- Verified contract deployment: https://sepolia.scrollscan.com//address/0x8251aEA64aa7d28B9f536f7eb1E1db0BbC8b6386#code

- Kimitoken contract deployment:  https://sepolia.scrollscan.com//address/0x437e05E34AA72700773DDA2dd97cc64a1Deb2A93#code

---

## Features

- **Onchain Medication Tracking**: Patients can log and track their medication adherence directly on the blockchain.
  
- **Doctor-Patient Integration**: Doctors can add patients, assign medications, and monitor their adherence.
  
- **Real-Time Rewards**: Patients earn tokens to complete doses on time. Completing a full course of treatment grants even more rewards.
  
- **NFT Incentives**: Exclusive NFTs are unlocked when patients consistently follow their medication schedules, making the adherence journey exciting.
  
- **Role-Based Progression**: Patients level up through various roles based on their adherence score, from **Novice** to **Champ**.

---

## User Roles

### 1. **Doctor**
   - Can add new patients.
   - Assign medications with specific dosages, intervals, and durations.
   - Monitor patient progress and adherence.

### 2. **Patient**
   - Follow prescribed medications.
   - Log when medications are taken.
   - Earn tokens and unlock NFTs for adherence.
   - Progress through roles based on adherence score:
     - **Novice**
     - **Active**
     - **Consistent**
     - **Top Gun**
     - **Champ** (Top-level role)

---

## Token & NFT Rewards

- **Token Rewards**: For each successfully completed medication course, patients earn **10 KMK tokens**.
  
- **Exclusive NFTs**: After accumulating enough adherence points and reaching the **Champ** role, patients can mint exclusive NFTs as a recognition of their dedication to health.

---

## Smart Contract Functionality

- **Doctor Management**: 
  - Add doctors with unique IDs and specializations.
  
- **Patient Management**: 
  - Doctors can onboard patients, assigning them to specific medication schedules.
  - Patients track their doses and adherence directly on-chain.
  
- **Medication Adherence**: 
  - Medications are assigned with a defined interval and duration.
  - Patients can only take medication within the allowed interval. Missing doses will negatively impact their adherence score.
  
- **Rewards System**: 
  - Patients earn rewards for completing their medications on time.
  - The rewards can be claimed in tokens and transferred to the patient’s beneficiary account.
  
- **Role Progression**: 
  - Patients who adhere to their schedule accumulate points and progress through roles, unlocking higher rewards and privileges.

---

## Getting Started

### Prerequisites
- Basic knowledge of Solidity and blockchain concepts.
- Ethereum-compatible wallet for interacting with the smart contract.

### Setup
1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/kimiko-medical-adherence.git
