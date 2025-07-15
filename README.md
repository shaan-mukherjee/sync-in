# Synk In 🗓️

**Synk In** is a web-based platform that consolidates and curates campus events in a clean, user-friendly interface. It helps students stay updated with all club-organized activities by listing them in chronological order with useful filtering and theming options.

## 🚩 Problem Statement
With numerous student-run clubs and organizations, our college often face a problem of event visibility. Students miss out on relevant activities simply because they aren't aware of them. Information is fragmented across posters, messages, and informal channels, leading to poor engagement.

## ✅ Solution Overview
Synk In offers a centralized event dashboard where all upcoming campus events can be listed and browsed. Events are displayed chronologically and include key metadata like organizing club, event type (hackathon, cultural, lecture, etc.), and date. Users can filter events by type. The UI is optimized using modern frontend frameworks, and updates reflect in real-time thanks to Firebase.

## ✨ Key Features
- **🔍 Chronological Event Display** - Events are listed in order of date and time, ensuring upcoming events appear first.
- **🏷️ Type-Based Filtering** - Instantly filter events by type (e.g., Cultural, Hackathon, Lecture) to focus on what interests you.
- **⚡ No Login Required** - Simplified experience to just open and browse, no friction or sign-in process.
- **🔄 Real-Time Firestore Sync** - Automatically fetches updated event data from Firebase Firestore without needing page reloads.

## 🔧 Tech Stack and Google Technologies Used
- **Firebase Firestore** – For storing and fetching event data in real-time.
- **Firebase Hosting** – For fast, secure and reliable web hosting.
- **Google IDX (Cloud Workstations)** – Used for streamlined, cloud-based development.

## 🚀 Future Enhancements
- **Google Authentication** – To personalize the experience with login support, favorites, and reminders.
- **Gemini API** – For AI-powered event recommendations based on user interests, history, and context.

## 📂 Folder Structure
```
src/
├── App.jsx
├── EventCard.jsx
├── firebase.js
├── index.css
├── main.jsx
└── tailwind.config.js
```
