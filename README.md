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

## Quick Links

- [Features](#features)
- [UserRoles](#features)
- [Token & NFT Rewards](#features)
- [Smart Contract Functionality](#features)
- [UI Walkthrough](#features)

---

## Features

- **Onchain Medication Tracking**: Patients can log and track their medication adherence directly on the blockchain.
  
- **Doctor-Patient Integration**: Doctors can add patients, assign medications, and monitor their adherence.
  
- **Real-Time Rewards**: Patients earn tokens to complete doses on time. Completing a full course of treatment grants even more rewards.
  
- **NFT Incentives**: Exclusive NFTs are unlocked when patients consistently follow their medication schedules, making the adherence journey exciting.
  
- **Role-Based Progression**: Patients level up through various roles based on their adherence score, from **Novice** to **Champ**.

---

## UserRoles

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

## UI Walkthrough

- Landing Page

  ![LandingPage](https://github.com/user-attachments/assets/9a9647b6-0cbb-411d-8c23-f83a93a3e10d)

- Connect Wallet

  ![Connect Wallet](https://github.com/user-attachments/assets/71dfc440-b642-48e2-bcc3-543063339d8b)

- SignIn Role

  ![SignIn](https://github.com/user-attachments/assets/7b49c08a-2dae-4672-a86a-8526561e2ee3)

- For Doctors

  ![For Doctors](https://github.com/user-attachments/assets/813a73ba-c807-4d34-b5f3-5260b11e2d80)

- Doctor Dashboard

![Doctor Dashboard](https://github.com/user-attachments/assets/4af5af3a-8489-4011-bcd5-dfb7f301edd8)

- Doctor Add patient

![Doctor Add patient](https://github.com/user-attachments/assets/d3907541-e1db-4fb4-a448-2206d9d29232)

- Doctor Add Patient Medication

  ![Add Medications](https://github.com/user-attachments/assets/d5ecda5c-357d-4680-8564-7890c5638c06)

- View Patients and Medications

![View Patients and Medications](https://github.com/user-attachments/assets/6b793625-be92-4d3a-a7c3-f729bc6308b9)

- For Patients

![Patient Dashboard](https://github.com/user-attachments/assets/6504625c-d226-42b2-9c0c-9e98c52a4fc6)

