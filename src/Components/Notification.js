import React from 'react';
import '../style/Notification.css';

export default function Notification({ message, showNotification }) {
    return (
        showNotification && (
            <div
                className={`notification ${
                    /found/.test(message) ? 'found' : 'not-found'
                }`}
            >
                {message}
            </div>
        )
    );
}
