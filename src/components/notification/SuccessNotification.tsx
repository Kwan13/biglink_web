import { CheckCircle } from 'react-feather';
import './style.css';

interface SuccessNotificationProps {
  message: string;
}

export default function SuccessNotification({
  message,
}: SuccessNotificationProps) {
  return (
    <div className="notification success">
      <div className="notification-icon">
        <CheckCircle width={35} height={35} color="#6BFF95" />
      </div>
      <div className="notification-message">
        <p>{message}</p>
        <span>BIGLINK</span>
      </div>
    </div>
  );
}
