import React, { useContext, useEffect } from 'react';
import { remindersContext } from '../Contexts/RemindersContext';
import ReminderItem from './ReminderItem';
import './ReminderList.css';

function ReminderList() {
  const {
    reminders,
    highlightedReminders,
    sortedReminders,
    sortedHighlightedReminders,
    updatingRemindersStates,
    updatingSortedRemindersStates,
  } = useContext(remindersContext);

  const pathname = window.location.pathname;
  let sortedRemindersState;

  if (pathname === '/') {
    sortedRemindersState = sortedReminders;
  } else {
    sortedRemindersState = sortedHighlightedReminders;
  }

  // This useEffect will invoke the cb function if we add/highlight/unhighlight/delete reminders & highlightedreminders
  useEffect(() => {
    if (pathname === '/') {
      updatingSortedRemindersStates('reminders', reminders);
    } else {
      updatingSortedRemindersStates(
        'highlightedReminders',
        highlightedReminders
      );
    }
  }, [reminders, highlightedReminders]);

  //JSX Code
  return (
    <div className="remindersContainer">
      {sortedRemindersState.length !== 0 ? (
        <ul className="reminderList">
          {sortedRemindersState.map((reminder) => {
            return (
              <ReminderItem
                itemData={reminder}
                remindersData={reminders}
                highlightedRemindersData={highlightedReminders}
                updatingRemindersStateData={updatingRemindersStates}
                pathname={pathname}
              />
            );
          })}
        </ul>
      ) : (
        <h1 className="remindersNotRenderedHeader">
          {pathname === '/'
            ? 'Reminders Loading/No Reminders'
            : 'Reminders Loading/No Highlighted Reminders'}
        </h1>
      )}
    </div>
  );
}

export default ReminderList;
