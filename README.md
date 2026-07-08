# 🎬 Cinema Ticket Booking System

A lightweight, interactive, and fully responsive Cinema Ticket Booking web application built with HTML, CSS, and Vanilla JavaScript. The application features a smooth, single-page application (SPA) flow from login to seat selection, payment simulation, and ticket generation.

---

## 🚀 How to Run the Project

Since this is a static frontend application, it runs entirely in the browser and does not require any backend language (such as Python, PHP, or Node.js) to function.

### Method 1: Open Directly in Browser (Easiest & No Setup Required)
1. Go to your project folder.
2. Double-click the **`index.html`** file (or right-click and select **Open with** > **Google Chrome** / **Microsoft Edge** / **Firefox** / **Safari**).
3. The booking system will open and run immediately.

### Method 2: VS Code Live Server (Best for Development)
If you are using Visual Studio Code:
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions marketplace.
3. Open **`index.html`**, right-click anywhere in the editor, and select **"Open with Live Server"** (or click the **"Go Live"** button in the bottom-right corner).
4. The site will open automatically on `http://127.0.0.1:5500/index.html`.

### Method 3: Using Node.js (If installed)
If you have Node.js installed and want a local web server, run this in your terminal:
```bash
npx http-server . -p 8000
```
Then open your browser and go to `http://localhost:8000`.

---

## 📱 User Flow

1. **Login Page**: Enter an email and password to log in.
2. **Movie Selection**: Browse and select from 6 movies (Avatar, Leo, Jailer, Batman, Dune, Interstellar).
3. **Seat Selection**: Click to select one or multiple seats (interactive seat grid).
4. **Payment Page**: Enter ATM card details, PIN, and Email ID. The total price is calculated dynamically (₹180 per seat).
5. **Ticket Confirmation**: Displays the final cinema ticket containing the movie title, seat numbers, total paid amount, email address, and a barcode.

---

## 📁 File Structure

```
├── index.html   # Main layout, forms, and pages structure
├── style.css    # Modern glassmorphism-themed styles and page animations
├── script.js   # SPA navigation logic, seat selection, and price calculation
└── README.md    # Project documentation and run guide
```

---

## 🛠 Features

- **Single Page Application (SPA)**: Smooth page transitions using dynamic CSS classes without reloading.
- **Glassmorphism Design**: Interactive buttons, input fields, and layouts styling using semi-transparent containers with backdrop-blur effects.
- **Dynamic Price Calculation**: Automatically calculates ticket cost based on selected seats.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile screens.
