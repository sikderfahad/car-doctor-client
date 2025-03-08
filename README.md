# 🚗 Car Doctor

Welcome to **Car Doctor**, a professional car servicing platform built with the **MERN stack**. This application provides role-based access, secure authentication, and a seamless user experience.

🔗 **Live Site:** [Car Doctor](https://car-doctor-003.web.app)

## 🌟 Features

### 🔑 Authentication & Role Management

- **Powered by Firebase & Firestore** with full user authentication.
- **Three Role Levels:**
  - **User** (Basic access)
  - **Officer** (Manage services and orders)
  - **Admin** (Full access to all users and data)

### 🏠 Default Navigation

- **Without login**, users can only see **Home, Services, and Login** in the navigation bar.

---

## 🎭 Role-Based Activities

### 👤 User Role

✅ View all available car services.

✅ Order a service with a selected servicing date.

✅ View order history with service details (image, name, date, and status).

✅ Delete an order from order history.

### 🛠 Officer Role

✅ Access **all user features**.

✅ **Manage Services:** Add, remove, and update car services.

✅ **Manage Orders:** View all orders, approve/deny them, and update the servicing date.

✅ **Restricted Routes:** Officers can access **Add Service & All Orders** pages.

### 🏆 Admin Role

✅ Access **all user & officer features**.

✅ View all registered users on the **All Users** page.

✅ **Promote/Demote Users** (User ➝ Officer ➝ Admin).

✅ Full authority over services and orders.

---

## 🔥 Additional Features

🔹 **Secure Private Routes** handled from the **server-side**.

🔹 **Three-Layer Admin Security:** `verifyToken`, `VerifyFirebaseToken`, and `VerifyAdmin`.

🔹 **Modern Security:** JWT & Firestore SDK integration.

🔹 **Cloudinary** for high-speed media hosting.

🔹 **Optimized Performance:** Fast loading with Firebase hosting for the client & Vercel for the server.

🔹 **User Experience:** Includes **spinners, toast alerts, and Sweet Alerts**.

---

## 📂 Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase & Firestore
- **Hosting:** Firebase (Client), Vercel (Server)
- **Media Storage:** Cloudinary

---

## 🔗 Project Links

🔹 **Live Site:** [Car Doctor](https://car-doctor-003.web.app)

🔹 **Client Repository:** [GitHub](https://github.com/sikderfahad/car-doctor-client)

🔹 **Server Repository:** [GitHub](https://github.com/sikderfahad/car-doctor-server)

---

## 🙌 Thank You!

Thank you for visiting **Car Doctor**! If you find this project helpful, feel free to ⭐ **star the repository** and contribute. Happy coding! 🚀
