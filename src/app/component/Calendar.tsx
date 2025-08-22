"use client";

import React, {useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import type {EventInput} from "@fullcalendar/core";

export default function Calendar() {
    const [events] = useState<EventInput[]>([
        {
            id: "1",
            title: "BoomDevs Team Meeting",
            start: "2025-08-09T10:00:00",
            end: "2025-08-09T11:00:00",
            backgroundColor: "#3b82f6",
            textColor: "#fff",
            extendedProps: {description: "Weekly sync", location: "Zoom"},
        },
        {
            id: "2",
            title: "Deadline (BoomDevs Team Meeting)",
            start: "2025-08-09",
            backgroundColor: "#ef4444",
            textColor: "#fff",
            extendedProps: {description: "Urgent delivery", location: "Office HQ"},
        },
        {
            id: "3",
            title: "Sugar Reduced In Coffee",
            start: "2025-08-15T09:00:00",
            end: "2025-08-15T09:30:00",
            backgroundColor: "#3b82f6",
            textColor: "#fff",
            extendedProps: {description: "Lifestyle improvement", location: "Home"},
        },
        {
            id: "4",
            title: "Deployed Dashboard",
            start: "2025-08-21",
            backgroundColor: "#3b82f6",
            textColor: "#fff",
            extendedProps: {description: "Production release", location: "GitHub"},
        },
        {
            id: "5",
            title: "Treat",
            start: "2025-08-22T19:00:00",
            end: "2025-08-22T21:00:00",
            backgroundColor: "#3b82f6",
            textColor: "#fff",
            extendedProps: {description: "Celebration with friends", location: "Cafe Rio"},
        },
        {
            id: "6",
            title: "Deadline (BoomDevs App Design)",
            start: "2025-08-22",
            backgroundColor: "#ef4444",
            textColor: "#fff",
            extendedProps: {description: "Final project submission", location: "Office HQ"},
        },
        {
            id: "7",
            title: "BoomDevs Meeting",
            start: "2025-08-23T16:00:00",
            end: "2025-08-23T17:00:00",
            backgroundColor: "#3b82f6",
            textColor: "#fff",
            extendedProps: {description: "Collaboration session", location: "Discord"},
        },
        {
            id: "8",
            title: "Work Deadline",
            start: "2025-08-25",
            backgroundColor: "#ef4444",
            textColor: "#fff",
            extendedProps: {description: "Client milestone", location: "Office HQ"},
        },
        {
            id: "9",
            title: "Team Meeting",
            start: "2025-09-09T10:00:00",
            end: "2025-09-09T11:00:00",
            backgroundColor: "#3b82f6",
            textColor: "#fff",
            extendedProps: {description: "Monthly sync", location: "Zoom"},
        },
        {
            id: "10",
            title: "Deadline",
            start: "2025-09-10",
            backgroundColor: "#ef4444",
            textColor: "#fff",
            extendedProps: {description: "Feature delivery", location: "Office HQ"},
        },
        {
            id: "11",
            title: "Sugar Reduced In Coffee",
            start: "2025-09-15T09:00:00",
            end: "2025-09-15T09:30:00",
            backgroundColor: "#3b82f6",
            textColor: "#fff",
            extendedProps: {description: "Habit tracking", location: "Home"},
        },
        {
            id: "12",
            title: "Deployed Dashboard",
            start: "2025-09-21",
            backgroundColor: "#3b82f6",
            textColor: "#fff",
            extendedProps: {description: "V2 release", location: "GitHub"},
        },
        {
            id: "13",
            title: "BoomDevs Meeting",
            start: "2025-09-23T16:00:00",
            end: "2025-09-23T17:00:00",
            backgroundColor: "#3b82f6",
            textColor: "#fff",
            extendedProps: {description: "Tech discussions", location: "Discord"},
        },
        {
            id: "14",
            title: "Work Deadline",
            start: "2025-09-25",
            backgroundColor: "#ef4444",
            textColor: "#fff",
            extendedProps: {description: "Phase delivery", location: "Office HQ"},
        },
    ]);

    return (
        <div
            className=" bg-white w-full max-w-[1280px] mx-auto px-2 rounded-md drop-shadow-md mt-5 mb-6
             sm:px-4 md:px-6 py-4">
            <div className="text-sm sm:text-base md:text-lg">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    events={events}
                    eventClick={(info) => {
                        alert(
                            `Event: ${info.event.title}\nDescription: ${info.event.extendedProps.description}\nLocation: ${info.event.extendedProps.location}`
                        );
                    }}
                    height="auto"
                />
            </div>
        </div>
    );
}