# Bole4us: The Urban Heat Experience

Bole4us is a decentralized, peer-to-peer marketplace designed to optimize the logistics and commerce of local street food (Bole). It bridges the gap between students (consumers), local vendors, and independent delivery agents through a "Trust-but-Verify" operational model.

## 🚀 Core Philosophy: Trust-but-Verify

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
- **Features**: Wallet (Coming Soon), Map-based discovery, Loyalty XP.
- **Registration**: Dedicated Student signup at `/register`.

### 2. Vendors (The Grill Masters)
- **Flow**: Manage Inventory -> Receive Orders -> Verify PoP -> Signal Ready -> Payout Agents.
- **Features**: Operations Center, Agent Debt Module (Vendor-to-Agent Payouts), Product Storefronts.
- **Registration**: Dedicated Vendor portal at `/register/vendor`.

### 3. Agents (Logistics Partners)
- **Flow**: Scan Signals Hub -> Grab Mission -> Update Status -> Track Earnings (Vendor Debts).
- **Features**: Velocity Hub (MapLibre Logistics), Mission Control, Earning Analytics.
- **Registration**: Dedicated Agent portal at `/register/agent`.

### 4. Admins (Command Center)
- **Flow**: Monitor Health -> Manage Participants -> Verify High-Value Disputes.
- **Features**: Global Analytics, User Registry (Block/Flag/Warning), Fleet Oversight.

---

## 🛠️ Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Lucide-React.
- **Logistics**: MapLibre GL JS (via CDN) for real-time visualization.
- **Icons**: Lucide & Material Symbols.
- **Typography**: Outfit & Inter.

---

## 📡 API Endpoints Specification (Backend Handoff)

### 🔐 Authentication & Identity
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/v1/auth/register` | Unified registration (handling role params). |
| POST | `/api/v1/auth/login` | JWT-based auth. |
| GET | `/api/v1/admin/users` | List all users for registry management (Admin only). |
| PATCH | `/api/v1/admin/users/:id/action` | Warning, Flagging, or Banning users (Admin only). |

### 🍔 Vendor & Product Operations
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/v1/vendors` | List active vendors with map coordinates. |
| GET | `/api/v1/vendors/:id/products` | Detailed menu and category breakdown. |
| PATCH | `/api/v1/vendor/payouts/:agentId` | Submit bank transfer proof to an agent (for vendor debt). |
| GET | `/api/v1/vendor/analytics` | Revenue and volume metrics. |

### 🏍️ Agent & Logistics (Velocity Hub)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/v1/agent/active-signals` | Live pool of unclaimed orders within range. |
| POST | `/api/v1/agent/missions/:id/claim` | Grab a mission from the pool. |
| GET | `/api/v1/agent/missions/history` | Archive of completed deployments. |
| GET | `/api/v1/agent/analytics` | Earnings per mission and success rate. |

### 💳 Orders & Payments
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/v1/orders` | Create order record (Food + Logistics). |
| POST | `/api/v1/orders/:id/pop` | Upload screenshot (Student -> Vendor). |
| GET | `/api/v1/orders/:id/track` | Live timeline state. |

---

## 🎨 Design System
- **Primary**: `#FF4D00` (Safety Orange / Fire)
- **Secondary**: Zinc-900 (Deep Matte Charcoal)
- **Rounding**: `3rem` (Extreme rounding for premium feel).
- **Logos**: Uses `/logo.png` (transparent background) across all headers.

---

## 🛠️ Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```
