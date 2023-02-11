import React from 'react';
import Map from './Components/Map';
import Notification from './Components/Notification';
import Characters from './Components/Characters';
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
            <header style={{ backgroundColor: 'blue' }}>
                <Characters char1={'Jin'} char2={'Hunter'} char3={'Ryu'} />
                <p>
                    Illustration made by{' '}
                    <a
                        href="https://www.instagram.com/_itspear/"
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        Pear
                    </a>
                </p>
            </header>
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
