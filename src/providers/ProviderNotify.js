import { createContext, useState } from 'react';
import { Notify } from '../components/Notify';

export const NotifyContext = createContext(['error']);

export const NotifyProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const handleClose = (notificationIndex) => {
    setNotifications((prevState) =>
      prevState.filter((notification, index) => {
        return index !== notificationIndex;
      })
    );
  };

  return (
    <NotifyContext.Provider value={{ notifications, setNotifications }}>
      <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
        {notifications.map((notification, index) => (
          <Notify
            key={index}
            id={index}
            type={notification.type}
            message={notification.message}
            onClose={handleClose}
          />
        ))}
      </div>

      {children}
    </NotifyContext.Provider>
  );
};
