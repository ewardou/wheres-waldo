import React from 'react';
import Map from './Components/Map';
import Notification from './Components/Notification';
import { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    function handleNotification() {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    }

    return (
        <div className="App">
            <div style={{ height: '200px', backgroundColor: 'blue' }}>Fill</div>
            <Notification
                message={message}
                showNotification={showNotification}
            />
            <Map
                setMessage={setMessage}
                handleNotification={handleNotification}
            />
        </div>
    );
}

export default App;
