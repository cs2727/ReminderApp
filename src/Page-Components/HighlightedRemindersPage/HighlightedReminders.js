import React from 'react';
import './HighlightedReminders.css';
import PageStructure from '../../Universal-Components/PageStructure';
import ReminderList from '../../Universal-Components/ReminderList';

function HighlightedReminders() {
  return (
    <PageStructure>
      <ReminderList />
    </PageStructure>
  );
}

export default HighlightedReminders;
