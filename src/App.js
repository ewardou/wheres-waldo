import React from 'react';
import Map from './Components/Map';
import Notification from './Components/Notification';
import Characters from './Components/Characters';
import Stopwatch from './Components/Stopwatch';
import Leaderboard from './Components/Leaderboard';
import { useState } from 'react';
import './style/App.css';

function App() {
    const [message, setMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [charactersFound, setCharactersFound] = useState(0);
    const [stopwatchRunning, setStopwatchRunning] = useState(false);

    function handleNotification() {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    }

    function increaseCharactersCount() {
        if (charactersFound >= 2) {
            setStopwatchRunning(false);
            document.querySelector('.leaderboard').classList.add('visible');
        }
        setCharactersFound((prev) => prev + 1);
    }

    return (
        <div className="App">
            <header>
                <Characters
                    char1={'Jin'}
                    char2={'Hunter'}
                    char3={'Ryu'}
                    setStopwatchRunning={setStopwatchRunning}
                />
                <Stopwatch stopwatchRunning={stopwatchRunning} />
            </header>
            <Notification
                message={message}
                showNotification={showNotification}
            />
            <Map
                setMessage={setMessage}
                handleNotification={handleNotification}
                increaseCharactersCount={increaseCharactersCount}
            />
            <footer>
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
            </footer>
            <Leaderboard />
        </div>
    );
}

export default App;
