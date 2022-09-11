import React, { useContext } from 'react';
import './RegisteringReminders.css';
import { remindersContext } from '../../Contexts/RemindersContext';
import PageStructure from '../../Universal-Components/PageStructure';

function RegisteringReminders() {
  const { reminders, updatingRemindersStates } = useContext(remindersContext);

  // This function will add a new reminder ------------------------->
  function updatingReminders(eventInstance) {
    eventInstance.preventDefault();

    const reminderItem = [];
    const formElement = eventInstance.target;

    for (const element of formElement.children) {
      if (element.localName === 'input' || element.localName === 'textarea') {
        reminderItem.push(element.value);
        element.value = '';
      }
    }

    // adding Id element to reminderItem array
    reminderItem.unshift(reminderItem[1] + reminderItem[2]);

    // This is stop us from adding a reminder that is already created - verification check
    for (const reminder of reminders) {
      if (reminderItem[2] === reminder[2] && reminderItem[3] === reminder[3]) {
        alert('There is already a reminder created at this date & time!');
        break;
      }
    }

    // update the reminders state array with new reminder
    updatingRemindersStates('reminders', reminderItem);

    alert('Reminder Successfully Added');
  }

  // JSX Code
  return (
    <PageStructure>
      <form onSubmit={updatingReminders}>
        {/* Reminder Name */}
        <label>Reminder Name:</label>
        <input
          type="text"
          placeholder="Dentist Appointment"
          maxlength="15"
          required
        />
        {/* Reminder Date */}
        <label htmlFor="reminderDate">Reminder Date:</label>
        <input type="date" id="reminderDate" required />
        {/* Reminder Time */}
        <label htmlFor="reminderTime">Reminder Time:</label>
        <input
          type="text"
          id="reminderTime"
          placeholder="15:30"
          pattern="\d{2}:\d{2}"
          required
        />
        {/* Reminder Notes */}
        <label htmlFor="reminderNotes">Reminder Notes:</label>
        <textarea
          id="reminderNotes"
          rows="5"
          cols="20"
          maxLength="60"
          required
        ></textarea>
        {/* Submit Button */}
        <div className="submitBtnContainer">
          <input type="submit" className="submitBtn" />
        </div>
      </form>
    </PageStructure>
  );
}

export default RegisteringReminders;
