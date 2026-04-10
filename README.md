# Bole4us: The Urban Heat Experience

Bole4us is a decentralized, peer-to-peer marketplace designed to optimize the logistics and commerce of local street food (Bole). It bridges the gap between students (consumers), local vendors, and independent delivery agents through a "Trust-but-Verify" operational model.

## 🚀 core Philosophy: Trust-but-Verify

Unlike traditional escrow-based systems, Bole4us utilizes a **Direct-to-Vendor** payment model to ensure immediate liquidity for small businesses.
1. **Direct Transfer**: Users pay vendors directly via bank transfer.
2. **Proof of Payment (PoP)**: Users upload a screenshot of the transaction.
3. **Vendor ACK**: Vendors manually acknowledge the receipt before food preparation begins.
4. **Agent Marketplace**: Delivery is handled by agents who "grab" active signals from a community pool.

---

## 🏗️ Architecture & Roles

The platform is built as a Role-Based Access Control (RBAC) system with four distinct personas:

### 1. Students (Consumers)
- **Flow**: Explore Vendors -> Build Feast -> Checkout (Logistics + Food) -> Upload PoP -> Track Live Timeline.
- **Features**: Wallet (Heat Credits), Loyalty XP, Leaderboards.

### 2. Vendors (The Grill Masters)
- **Flow**: Manage Inventory -> Receive Orders -> Verify PoP -> Signal Ready -> Payout Agents.
- **Features**: Operations Center, Agent Debt Module, Payout Flow.

### 3. Agents (Logistics Partners)
- **Flow**: Scan Signals Hub -> Grab Mission -> Update Status -> Withdraw Earnings.
- **Features**: Mission Control, Gains Tracker (Debt from multiple vendors).

### 4. Admins (Command Center)
- **Flow**: Monitor Health -> Manage Vendors -> Verify High-Value Disputes.
- **Features**: Global Analytics, Fleet Management.

---

## 🛠️ Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Lucide-React.
- **Icons**: Lucide & Material Symbols.
- **Typography**: Outfit & Inter.
- **Framework**: SPA with React Router.

---

## 📡 API Endpoints Specification (Handoff to Backend)

The following endpoints are required to support the current frontend implementation.

### 🔐 Authentication & Identity
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/v1/auth/register` | User/Vendor/Agent registration with role-specific fields. |
| POST | `/api/v1/auth/login` | JWT-based authentication. |
| GET | `/api/v1/auth/profile` | Retrieve profile based on Auth token. |
| PUT | `/api/v1/auth/settings` | Update profile and bank details. |

### 🍔 Vendor Operations
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/v1/vendors` | List all active vendors with status and rating. |
| GET | `/api/v1/vendors/:id` | Detailed vendor menu and info. |
| GET | `/api/v1/vendor/orders` | Active orders for the authenticated vendor. |
| PATCH | `/api/v1/vendor/orders/:id/verify` | Acknowledge PoP and start prep. |
| GET | `/api/v1/vendor/debts` | List of delivery fees owed to agents. |
| POST | `/api/v1/vendor/payouts` | Submit payout proof to an agent. |
| PATCH | `/api/v1/vendor/inventory` | Toggle item availability. |

### 🏍️ Agent Marketplace
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/v1/agent/active-pool` | List all unclaimed orders in the agent's quadrant. |
| POST | `/api/v1/agent/grab/:id` | Claim an order for delivery. |
| PATCH | `/api/v1/agent/missions/:id` | Update mission status (at_vendor, delivering, etc). |
| GET | `/api/v1/agent/earnings` | Summary of total gains and vendor debts. |

### 💳 Payments & Orders
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/v1/orders` | Create order and link to vendor/logistics. |
| POST | `/api/v1/orders/:id/pop` | Upload PoP screenshot (S3/Cloudinary link). |
| GET | `/api/v1/orders/:id` | Track order timeline and status. |
| GET | `/api/v1/wallet/history` | List of all credit changes and transaction traces. |

---

## 🎨 Design System
The UI follows a **High-Contrast Dark/Light** aesthetic:
- **Primary**: `#FF4D00` (Safety Orange / Fire)
- **Secondary**: Zinc-900 (Deep Matte Charcoal)
- **Background**: White (#FFFFFF) / Zinc-50 for subtle depth.
- **Components**: 3rem border-radius (High rounding) for a friendly yet premium feel.

---

## 🛠️ Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
