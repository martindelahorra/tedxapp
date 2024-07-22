import React, { useEffect } from 'react';
import { Button, View, Text, Platform } from 'react-native';
import * as Calendar from 'expo-calendar';

const createCalendarEvents = async () => {
  const { status } = await Calendar.requestCalendarPermissionsAsync();
  if (status === 'granted') {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    let calendarId;

    // Check if a calendar already exists, otherwise create one
    if (calendars.length > 0) {
      calendarId = calendars[0].id;
    } 

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const eventDetails1 = {
      title: 'Event 1',
      startDate: new Date(tomorrow.setHours(10, 0, 0)),
      endDate: new Date(tomorrow.setHours(11, 0, 0)),
      timeZone: 'GMT',
      location: 'Location 1',
    };

    const eventDetails2 = {
      title: 'Event 2',
      startDate: new Date(tomorrow.setHours(14, 0, 0)),
      endDate: new Date(tomorrow.setHours(15, 0, 0)),
      timeZone: 'GMT',
      location: 'Location 2',
    };

    if (calendarId) {
      const eventId1 = await Calendar.createEventAsync(calendarId, eventDetails1);
      console.log(`Event 1 created with ID: ${eventId1}`);
      const eventId2 = await Calendar.createEventAsync(calendarId, eventDetails2);
      console.log(`Event 2 created with ID: ${eventId2}`);
    } else {
      console.log('Calendar ID is undefined');
    }
    

    
  } else {
    console.log('Calendar permission not granted');
  }
};

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Create sepakers calendar:</Text>
      <Button title="Create Events" onPress={createCalendarEvents} />
    </View>
  );
};

export default App;