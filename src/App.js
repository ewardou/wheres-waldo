import React from 'react';
import Map from './Components/Map';
import Notification from './Components/Notification';
import Characters from './Components/Characters';
import Stopwatch from './Components/Stopwatch';
import Leaderboard from './Components/Leaderboard';
import { useState } from 'react';
import './style/App.css';
import { useParams } from 'react-router-dom';

const charPerConsole = {
    ps1: ['Cloud', 'Leon', 'Spike'],
    ps2: ['Dante', 'Jak', 'Kratos'],
    ps3: ['Cole', 'Sackboy', 'Ellie'],
    ps4: ['Jin', 'Hunter', 'Ryu'],
};

function App() {
    const { console } = useParams();
    const consoleCharacters = charPerConsole[console];
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
                    consoleCharacters={consoleCharacters}
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
                psConsole={console}
                consoleCharacters={consoleCharacters}
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
