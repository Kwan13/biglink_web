import { ReactElement } from 'react';
import { XOctagon } from 'react-feather';
import './style.css';

interface ErrorNotificationProps {
  message: string;
}

export default function ErrorNotification({
  message,
}: ErrorNotificationProps): ReactElement {
  return (
    <div className="notification error">
      <div className="notification-icon">
        <XOctagon width={35} height={35} color="#E95252" />
      </div>
      <div className="notification-message">
        <p>{message}</p>
        <span>BIGLINK</span>
      </div>
    </div>
  );
}
