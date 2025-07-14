import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCol = collection(db, "events");
        const snapshot = await getDocs(eventsCol);
        const eventList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventList);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {events.map((event) => (
            <div
              key={event.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>
                <strong>Organized by:</strong> {event.club}
              </p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  style={{ width: "100%", maxWidth: "300px", borderRadius: "8px" }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
