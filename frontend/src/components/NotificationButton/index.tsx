import icon from '../../assets/img/notification-icon.svg';

import './styles.css';

function NotificationButton() {
    return (
        <div className="dsmeta-notification-btn">
            <img src={icon} alt="Notification"></img>
        </div>
    )
}

export default NotificationButton;