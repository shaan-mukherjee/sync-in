**🎉 Synk In**
A smart, minimal, and responsive campus event recommender web app designed to help students discover upcoming events tailored to their interests.

**📌 Overview**
Synk In is a single-page web application that displays and filters upcoming campus events. Designed for simplicity and accessibility, the app helps students stay updated on club activities, workshops, cultural events, and more; everything in one place.

**🚀 Features**

🔍 Filter Events by Category - Filter events based on type (e.g., tech, cultural, workshops, hackathons, etc.).
📅 Chronological Event Display - Events are listed in order of date and time.
📱 Responsive UI - Clean and responsive design that works across devices.
💾 Firestore Integration - Events are fetched dynamically from a Firebase Firestore database.


**🛠️ Tech Stack**

Frontend	Firebase	Styling
React.js	Firestore	Tailwind CSS
Vite	Firebase Hosting (optional)	Responsive Design

**🧠 Future Scope**

🔐 User Authentication and Preference Saving
📅 Calendar View of Events
🔎 Search by Club/Event Name
🔁 Gemini API Integration for personalized recommendations
📤 Admin Panel for Club Event Uploads

**📂 Folder Structure**

src/
├── assets/             # Images or icons
├── App.jsx             # Main component
├── Events.jsx          # Event display logic
├── Interests.jsx       # Interests filtering UI
├── Login.jsx           # (optional - future)
├── firebase.js         # Firebase config
├── App.css, index.css  # Styling files
├── main.jsx            # Entry point

**🔧 Installation & Setup**

git clone https://github.com/yourusername/synk-in.git
cd synk-in
npm install
npm run dev
💡 Please make sure to set up your Firebase project and Firestore DB as per your structure.

**📁 Firestore Structure**

events (collection)
│
├── eventId (document)
│   ├── title: "AI in Healthcare"
│   ├── club: "Tech Club"
│   ├── date: "2025-07-17"
│   ├── time: "15:00"
│   ├── type: "Tech"


Built with 💙 for campus communities
