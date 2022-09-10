import './App.css';
import NavComponent from './Universal-Components/NavComponent';
import Reminders from './Page-Components/RemindersPage/Reminders';
import RegisteringReminders from './Page-Components/RegisteringRemindersPage/RegisteringReminders';
import HighlightedReminders from './Page-Components/HighlightedRemindersPage/HighlightedReminders';
import RemindersContext from './Contexts/RemindersContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <RemindersContext>
        <Routes>
          {/* Page where all reminders will be shown */}
          <Route path="/" element={<Reminders />}></Route>
          {/* Page where we can register/create new reminders */}
          <Route
            path="/RegisteringReminders"
            element={<RegisteringReminders />}
          ></Route>
          {/* Page where our favorite/highlighted reminders will be shown */}
          <Route
            path="/HighlightedReminders"
            element={<HighlightedReminders />}
          ></Route>
        </Routes>
      </RemindersContext>
    </div>
  );
}

export default App;
