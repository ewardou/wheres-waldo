import React from 'react';
import { getImageURL, getCoordinatesInfo } from '../firebase';
import { useState, useEffect } from 'react';
import { Marker } from './Marker';
import '../style/Map.css';

function Map({
    setMessage,
    handleNotification,
    increaseCharactersCount,
    psConsole,
    consoleCharacters,
}) {
    const [char1, char2, char3] = consoleCharacters;
    const [url, setUrl] = useState('');
    const [left, setLeft] = useState('');
    const [top, setTop] = useState('');
    const [visible, setVisible] = useState('');
    const [xCoordinate, setXCoordinate] = useState(0);
    const [yCoordinate, setYCoordinate] = useState(0);

    useEffect(() => {
        async function updateImage() {
            const newUrl = await getImageURL(psConsole);
            setUrl(newUrl);
        }
        updateImage();
    }, []);

    function setCoordinate(e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setXCoordinate(x);
        setYCoordinate(y);
        setLeft(e.pageX - 25);
        setTop(e.pageY - 25);
    }

    async function checkCoordinates(e) {
        setVisible('');
        const coordinates = await getCoordinatesInfo(e);
        return (
            xCoordinate >= coordinates.initialX &&
            xCoordinate <= coordinates.finalX &&
            yCoordinate >= coordinates.initialY &&
            yCoordinate <= coordinates.finalY
        );
    }

    async function showResults(e) {
        const charFound = await checkCoordinates(e);
        const name = e.target.textContent;
        if (charFound) {
            setMessage(`You have found ${name}`);
            Marker(left, xCoordinate, top, name);
            e.target.setAttribute('style', 'display:none');
            document.getElementById(name).classList.add('found');
            increaseCharactersCount();
        } else {
            setMessage(`This isn't ${name}`);
        }
        handleNotification();
    }

    return (
        <div className="Map">
            {url ? (
                <img
                    src={url}
                    alt="jk"
                    id="main"
                    onClick={(e) => {
                        setCoordinate(e);
                        setVisible('visible');
                    }}
                />
            ) : (
                <p>Loading...</p>
            )}
            <span
                className={visible}
                style={{
                    left: `${left}px`,
                    top: `${top}px`,
                }}
            >
                <ul>
                    <li>
                        <button onClick={showResults}>{char1}</button>
                    </li>
                    <li>
                        <button onClick={showResults}>{char2}</button>
                    </li>
                    <li>
                        <button onClick={showResults}>{char3}</button>
                    </li>
                </ul>
            </span>
        </div>
    );
}

export default Map;
