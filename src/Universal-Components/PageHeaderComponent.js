import React from 'react';
import './PageHeaderComponent.css';

function PageHeaderComponent() {
  let urlpathname = window.location.pathname;

  switch (urlpathname) {
    case '/':
      urlpathname = 'Reminders';
      break;

    case '/RegisteringReminders':
      urlpathname = 'Registering Reminders';
      break;

    default:
      urlpathname = 'Highlighted Reminders';
  }

  return <h1 className="pageHeader">{urlpathname}</h1>;
}

export default PageHeaderComponent;
