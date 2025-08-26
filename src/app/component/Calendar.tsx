import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from "@fullcalendar/core";
import { defaultEvents } from "@/app/eventsData"; // Import default events

export default function Calendar() {
    const [events, setEvents] = useState<EventInput[]>([]);

    useEffect(() => {
        const storedEvents = localStorage.getItem("calendar-events");
        let loadedEvents: EventInput[] = [];

        if (storedEvents) {
            loadedEvents = JSON.parse(storedEvents);
        }


        const mergedEvents = loadedEvents.map((event: any) => {
            const defaultEvent = defaultEvents.find((d) => d.id === event.id);

            if (defaultEvent) {
                return {
                    ...defaultEvent,
                    ...event,
                    backgroundColor: event.backgroundColor || defaultEvent.backgroundColor || undefined,
                    textColor: event.textColor || defaultEvent.textColor || undefined,
                };
            }
            return event;
        });

        if (mergedEvents.length === 0) {
            setEvents(defaultEvents);
            localStorage.setItem("calendar-events", JSON.stringify(defaultEvents));
        } else {
            setEvents(mergedEvents);
        }
    }, []);

    useEffect(() => {
        if (events.length > 0) {
            localStorage.setItem("calendar-events", JSON.stringify(events));
        }
    }, [events]);

    // Add new event
    const handleDateClick = (info: any) => {
        const title = prompt("Enter event title:");
        if (!title) return;

        const description = prompt("Enter event description:") || "";
        const location = prompt("Enter event location:") || "";

        const newEvent: EventInput = {
            id: String(new Date().getTime()),
            title,
            start: info.dateStr,
            backgroundColor: "#10b981",
            textColor: "#fff",
            extendedProps: { description, location },
        };

        setEvents((prev) => [...prev, newEvent]);
    };

    // Delete event
    const handleDelete = (eventId: string) => {
        setEvents((prev) => prev.filter((e) => e.id !== eventId));
    };

    const renderEventContent = (eventInfo: any) => {
        const { title, extendedProps } = eventInfo.event;
        const { description, location } = extendedProps || {};

        return (
            <div className="flex flex-col gap-1 p-2  rounded-md">
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-white truncate" style={{ width: '120px' }}>
                        {title}
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent opening event click
                            handleDelete(eventInfo.event.id);
                        }}
                        className="ml-2 text-xs text-white hover:text-red-200 px-2 py-1 rounded-full"
                        style={{ padding: "5px 10px", marginLeft: "10px" }}
                    >
                        🗑
                    </button>
                </div>
                {description && <p className="text-xs text-white">{description}</p>}
                {location && <p className="text-xs text-white">{location}</p>}
            </div>
        );
    };

    return (
        <div className="w-full max-w-[1280px] mx-auto px-2 sm:px-4 md:px-6 py-4">
            <div className="text-sm sm:text-base md:text-lg">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    events={events}
                    dateClick={handleDateClick}
                    eventContent={renderEventContent} // custom event renderer
                    height="auto"
                />
            </div>
        </div>
    );
}
