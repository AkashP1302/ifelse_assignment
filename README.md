# Senior Mobile Engineer Assignment – React Native App

This project is a coding assignment for the **Senior Mobile Engineer** role, built using **React Native** and **TypeScript**. The goal was to recreate a given UI design (shared via screenshots) while showcasing best practices in architecture, API integration, styling, and component-based development.

## 📱 Screenshots

Screenshots of the final UI output have been included in the `/OUTPUT` folder, as instructed.

---

## 🚀 Features

- 🧾 **API Integration** with RTK Query (Redux Toolkit)
- 💳 Dynamic Cards for Balance, Auto-fill Date, and Auto-fill Amount (fetched from API)
- ⏳ Loading Indicator during API calls (simulated 2-second delay)
- 📊 Placeholder for Activity Chart (Chart library ready to be integrated)
- 🧩 Modular Components & Clean Structure
- 🎨 Fully custom CSS-based styling (no third-party UI libraries)
- 📱 Responsive layout and consistent design

---

## ⚙️ Tech Stack

| Feature             | Tech Used                          |
| ------------------- | ---------------------------------- |
| Framework           | React Native                       |
| Language            | TypeScript                         |
| State Management    | Redux Toolkit + RTK Query          |
| Styling             | Custom Stylesheets (no frameworks) |
| API Call            | `http://01.fy25ey02.64mb.io/`      |
| Charting (Optional) | `react-native-svg-charts` (future) |
| Icons               | FontAwesome                        |

---

## 📡 API Integration

- **Endpoint:** `http://01.fy25ey02.64mb.io/`
- **Data:** Returns a JSON object with:
  - `balance`
  - `auto_fill_date`
  - `auto_fill_amount`
- **Authentication:** None required
- **Best Practices Used:**
  - RTK Query for scalable data fetching
  - Loading state management
  - Typed response using TypeScript
  - Centralized API slice

---

---

## ✨ Additional Highlights

- 💡 **Functional Components** only
- ✅ Clean and readable code with comments
- 🚫 No use of third-party CSS frameworks (as per instruction)
- 🔁 Easily extendable architecture

---

## 📥 How to Run

```bash
git clone https://github.com/AkashP1302/ifelse_assignment.git
cd ifelse_assig
npm install
npx react-native run-android   # or run-ios

```
