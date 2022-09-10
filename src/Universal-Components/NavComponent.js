import React from 'react';
import { Link } from 'react-router-dom';
import './NavComponent.css';
import reminderImg from '../Images/reminder.png';
import registeringReminderImg from '../Images/registeringReminder.png';
import highlightedReminderImg from '../Images/highlightedReminder.png';

function NavComponent() {
  return (
    <nav>
      <ul>
        <li key="1">
          <Link to="/">
            <img src={reminderImg} />
          </Link>
        </li>
        <li key="2">
          <Link to="/RegisteringReminders">
            <img src={registeringReminderImg} height="128" width="128" />
          </Link>
        </li>
        <li key="3">
          <Link to="/HighlightedReminders">
            <img src={highlightedReminderImg} height="128" width="128" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavComponent;
