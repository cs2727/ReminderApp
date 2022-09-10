import React, { createContext, useState } from 'react';

export const remindersContext = createContext();

function RemindersContext(props) {
  // states not ordered
  const [reminders, setReminders] = useState([]);
  const [highlightedReminders, setHighlightedReminders] = useState([]);

  // states ordered
  const [sortedReminders, setSortedReminders] = useState([]);
  const [sortedHighlightedReminders, setSortedHighlightedReminders] = useState(
    []
  );

  // this function will update the reminders state - called when new reminder is added!
  function registeringNewReminder(whichState, reminderItem) {
    let state;
    let changingState;

    if (whichState === 'reminders') {
      state = reminders;
      changingState = setReminders;
    } else {
      state = highlightedReminders;
      changingState = setHighlightedReminders;
    }

    if (state.length !== 0 && reminderItem.length > 0) {
      changingState([reminderItem, ...state]);
    } else if (state.length === 0 && reminderItem.length > 0) {
      changingState([reminderItem]);
    } else {
      changingState([]);
    }
  }

  // this function will update the sortedReminders state - called when reminder state changes
  function sortingRemindersBasedOnDates(whichOrderedState, reminders) {
    console.log(highlightedReminders);
    if (reminders.length === 0) {
      return;
    }

    for (const reminder of reminders) {
      let date = reminder[2] + ' ' + reminder[3];
      reminder.push(new Date(date));
    }

    reminders.sort((a, b) => {
      return a[5] - b[5];
    });

    for (const reminder of reminders) {
      reminder.pop();
    }

    console.log(reminders);

    if (whichOrderedState === 'reminders') {
      setSortedReminders(reminders);
    } else {
      setSortedHighlightedReminders(reminders);
    }
  }

  // Context Data we are passing to all component children of this Provider component
  const contextData = {
    reminders,
    highlightedReminders,
    sortedReminders,
    sortedHighlightedReminders,
    registeringNewReminder,
    sortingRemindersBasedOnDates,
  };

  return (
    <remindersContext.Provider value={contextData}>
      {props.children}
    </remindersContext.Provider>
  );
}

export default RemindersContext;
