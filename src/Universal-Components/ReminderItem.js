import React, { useRef } from 'react';
import './ReminderItem.css';
import listItemMenuImg from '../Images/loadingDot.png';

function ReminderItem({
  itemData,
  addingData,
  pathname,
  highlightedRemindersData,
}) {
  let counter = 1;
  const listItemMenuButtonContainer = useRef();
  const buttonTextContent = pathname === '/' ? 'Highlight' : 'UnHighlight';

  // this function will toggle the list Item Menu On/Off
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

  // this function will highlight/unhighlight the reminder depending on the text-content of the button clicked
  function listItemMenuFunctionalities() {
    listItemMenuButtonContainer.current.style.display = 'none';

    if (buttonTextContent === 'Highlight') {
      addingData('highlightedreminders', itemData);
      alert('reminder is highlighted');
      return;
    }

    for (let i = 0; i < highlightedRemindersData.length; i++) {
      if (itemData[0] === highlightedRemindersData[i][0]) {
        highlightedRemindersData.splice(i, 1);
      }
    }

    addingData('highlightedreminders', highlightedRemindersData);
    alert('reminder unhighlighted');
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
          <button onClick={listItemMenuFunctionalities}>
            {buttonTextContent}
          </button>
          <button>Delete</button>
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
