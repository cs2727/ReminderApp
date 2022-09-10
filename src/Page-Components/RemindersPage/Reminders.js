import React from 'react';
import './Reminders.css';
import PageStructure from '../../Universal-Components/PageStructure';
import ReminderList from '../../Universal-Components/ReminderList';

function Reminders() {
  //JSX Code
  return (
    <PageStructure>
      <ReminderList />
    </PageStructure>
  );
}

export default Reminders;
