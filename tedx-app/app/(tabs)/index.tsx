import { StatusBar } from 'expo-status-bar';
import React from 'react';
//- import { StyleSheet, Text, View } from 'react-native';
import { Button, Text, View } from 'react-native';
import RNCalendarEvents from 'react-native-add-calendar-event';
import moment from 'moment'; // Use moment for date formatting

const addToCalendar = () => {
  const eventConfig = {
    title: 'Event Title',
    startDate: moment().add(1, 'days').toISOString(), // Start date/time in ISO format
    endDate: moment().add(1, 'days').add(1, 'hours').toISOString(), // End date/time in ISO format
  };

  RNCalendarEvents.presentEventCreatingDialog(eventConfig)
    .then(eventId => {
      // handle success - receives the event id
      console.log('Event created with id: ', eventId);
    })
    .catch(error => {
      // handle error
      console.log('Error creating event: ', error);
    });
};


export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Add to Calendar" onPress={addToCalendar} />
    </View>
  );
}


