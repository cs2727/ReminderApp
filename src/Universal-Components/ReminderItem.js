import React, { useRef } from 'react';
import './ReminderItem.css';
import listItemMenuImg from '../Images/loadingDot.png';

function ReminderItem({
  itemData, // reminder Item
  remindersData, // reminder state context array
  highlightedRemindersData, // highlighted reminder context state array
  updatingRemindersStateData, //
  pathname,
}) {
  let counter = 1;
  const listItemMenuButtonContainer = useRef();
  const buttonTextContent = pathname === '/' ? 'Highlight' : 'UnHighlight';

  // this function will toggle the list Item Menu On/Off when it's Image is clicked ------------------------>
  function togglingListItemMenu() {
    const oddOrEven = counter % 2;

    switch (oddOrEven) {
      case 1:
        listItemMenuButtonContainer.current.style.display = 'flex';
        break;

      default:
        listItemMenuButtonContainer.current.style.display = 'none';
    }

    counter++;
  }

  // this function will highlight/unhighlight the reminder --------------------------------->
  function togglingHighlightFunctionality() {
    listItemMenuButtonContainer.current.style.display = 'none';

    // The code below is for when we highlight a reminder, it will update the HighlightedReminders State array
    // by adding this reminder Item to it
    if (buttonTextContent === 'Highlight') {
      updatingRemindersStateData('highlightedreminders', itemData);
      alert('reminder is highlighted');
      return;
    }

    // The code below is for when we unhighlight a reminder, it will update the HighlightedReminders state array
    // by removing this reminder Item from it
    for (let i = 0; i < highlightedRemindersData.length; i++) {
      if (itemData[0] === highlightedRemindersData[i][0]) {
        highlightedRemindersData.splice(i, 1);
      }
    }

    updatingRemindersStateData(
      'highlightedreminders',
      highlightedRemindersData
    );
    alert('reminder unhighlighted');
  }

  // this function will delete a reminder --------------------------------->
  function deletingReminderFunctionality() {
    //The code below will delete this reminder Item from both the reminders & highlightedReminders state array
    for (let i = 0; i < remindersData.length; i++) {
      if (itemData[0] === remindersData[i][0]) {
        remindersData.splice(i, 1);
      }
    }

    for (let i = 0; i < highlightedRemindersData.length; i++) {
      if (itemData[0] === highlightedRemindersData[i][0]) {
        highlightedRemindersData.splice(i, 1);
      }
    }

    updatingRemindersStateData('reminders', remindersData);
    updatingRemindersStateData(
      'highlightedreminders',
      highlightedRemindersData
    );
    alert('Reminder deleted!');
  }

  // JSX Code
  return (
    <li key={itemData[0]}>
      <div className="listItemMenuContainer">
        <img
          src={listItemMenuImg}
          alt="loading dot img"
          onClick={togglingListItemMenu}
        />
        <div
          className="listItemMenuButtonContainer"
          ref={listItemMenuButtonContainer}
        >
          <button onClick={togglingHighlightFunctionality}>
            {buttonTextContent}
          </button>
          <button onClick={deletingReminderFunctionality}>Delete</button>
        </div>
      </div>

      <h2>{itemData[1]}</h2>
      <h2>{itemData[2]}</h2>
      <h2>{itemData[3]}</h2>
      <details>
        <summary>Notes</summary>
        <p>{itemData[4]}</p>
      </details>
    </li>
  );
}

export default ReminderItem;
