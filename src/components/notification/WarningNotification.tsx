import NotificationIcon from '../../assets/svg/NotificationIcon';
import './style.css';

interface WarningNotificationProps {
  message: string;
}

export default function WarningNotification(props: WarningNotificationProps) {
  return (
    <div className="notification warning">
      <div className="notification-icon">
        <NotificationIcon width={35} height={35} color="#FF8541" />
      </div>
      <div className="notification-message">
        <p>{props.message}</p>
        <span>Odontooth</span>
      </div>
    </div>
  );
}
