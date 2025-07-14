// src/App.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export default function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "events"), orderBy("date", "asc"));
        const querySnapshot = await getDocs(q);
        const eventData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventData);
        setFilteredEvents(eventData);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedType === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.type === selectedType));
    }
  }, [selectedType, events]);

  // Get unique types from event data
  const eventTypes = ["All", ...new Set(events.map((event) => event.type))];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Synk In 📅</h1>
      <h2 style={styles.subheading}>Upcoming Campus Events</h2>

      {/* Dropdown Filter */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        style={styles.dropdown}
      >
        {eventTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {filteredEvents.length > 0 ? (
        <ul style={styles.list}>
          {filteredEvents.map((event) => (
            <li key={event.id} style={styles.eventCard}>
              <p><strong>Event Title: </strong>{event.title}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Club:</strong> {event.club}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.loadingText}>No events found for "{selectedType}"</p>
      )}
    </div>
  );
}


const styles = {
  container: {
    padding: "2rem",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  heading: {
    color: "#333",
    fontSize: "2.5rem",
    marginBottom: "0.2rem",
  },
  subheading: {
    color: "#555",
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  dropdown: {
    padding: "0.5rem",
    fontSize: "1rem",
    marginBottom: "2rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  eventCard: {
    width: "90%",
    maxWidth: "500px",
    background: "#fefefe",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1.5rem",
    marginBottom: "1.2rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  eventTitle: {
    margin: "0.2rem 0 0.8rem",
  },
  loadingText: {
    marginTop: "2rem",
    color: "#777",
  },
};
