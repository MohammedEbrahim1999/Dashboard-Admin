import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid"; 
import { Paper, Stack } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";

// Function to render events in the calendar
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

// Function to render events in the sidebar
function renderSidebarEvent(event) {
    return (
        <li key={event.id}>
            <b>
                {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </b>
            <i>{event.title}</i>
        </li>
    );
}

const Calendar = () => {
    const [weekendsVisible, setWeekendsVisible] = useState(true);
    const [currentEvents, setCurrentEvents] = useState([]);

    // Load events from localStorage on component mount
    useEffect(() => {
        const savedEvents = localStorage.getItem("calendarEvents");
        if (savedEvents) {
            setCurrentEvents(JSON.parse(savedEvents)); // Set events from localStorage if they exist
        }
    }, []);

    // Save events to localStorage whenever an event is added or deleted
    const saveEventsToLocalStorage = (events) => {
        localStorage.setItem("calendarEvents", JSON.stringify(events));
    };

    // Handle when a date is selected to add a new event
    const handleDateSelect = (selectInfo) => {
        let title = prompt("Please enter a new title for your event");
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // Clear date selection

        if (title) {
            const newEvent = {
                id: String(Date.now()), // Use a timestamp as a unique ID
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            };

            const updatedEvents = [...currentEvents, newEvent];
            setCurrentEvents(updatedEvents); // Update state with new event
            saveEventsToLocalStorage(updatedEvents); // Save updated events to localStorage
        }
    };

    // Handle event click (for deletion)
    const handleEventClick = (clickInfo) => {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
            const updatedEvents = currentEvents.filter(event => event.id !== clickInfo.event.id);
            setCurrentEvents(updatedEvents); // Update state
            saveEventsToLocalStorage(updatedEvents); // Save updated events to localStorage
        }
    };

    return (
        <Stack direction={"row"}>
            <Paper className="demo-app-sidebar">
                <Stack direction={"column"} justifyContent={"center"}>
                    <div className="demo-app-sidebar-section">
                        <h2>Instructions</h2>
                        <ul>
                            <li>Select dates and you will be prompted to create a new event</li>
                            <li>Drag, drop, and resize events</li>
                            <li>Click an event to delete it</li>
                        </ul>
                    </div>
                    <div className="demo-app-sidebar-section">
                        <h2 style={{ textAlign: "left" }}>
                            All Events ({currentEvents.length})
                        </h2>
                        <ul>{currentEvents.map(renderSidebarEvent)}</ul>
                    </div>
                </Stack>
            </Paper>

            <div className="demo-app-main">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}
                    events={currentEvents} // Load events from state
                    select={handleDateSelect} // Handle date select for new events
                    eventContent={renderEventContent} // Custom render function
                    eventClick={handleEventClick} // Handle event click for deletion
                />
            </div>
        </Stack>
    );
};

export default Calendar;
