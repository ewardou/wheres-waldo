import React from 'react';
import { getImageURL, getCoordinatesInfo } from '../firebase';
import { useState, useEffect } from 'react';
import { Marker } from './Marker';
import '../style/Map.css';

function Map({ setMessage, handleNotification }) {
    const [url, setUrl] = useState('');
    const [left, setLeft] = useState('');
    const [top, setTop] = useState('');
    const [visible, setVisible] = useState('');
    const [xCoordinate, setXCoordinate] = useState(0);
    const [yCoordinate, setYCoordinate] = useState(0);

    useEffect(() => {
        async function updateImage() {
            const newUrl = await getImageURL();
            setUrl(newUrl);
        }
        updateImage();
    }, []);

    function setCoordinate(e) {
        const rect = e.target.getBoundingClientRect();
        console.log(rect.left);
        console.log(rect.right);
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
        if (
            xCoordinate >= coordinates.initialX &&
            xCoordinate <= coordinates.finalX &&
            yCoordinate >= coordinates.initialY &&
            yCoordinate <= coordinates.finalY
        ) {
            setMessage(`You have found ${e.target.textContent}`);
            Marker(left, top, e.target.textContent);
        } else {
            setMessage(`This isn't ${e.target.textContent}`);
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
                        <button onClick={checkCoordinates}>Hunter</button>
                    </li>
                    <li>
                        <button onClick={checkCoordinates}>Jin</button>
                    </li>
                    <li>
                        <button onClick={checkCoordinates}>Ryu</button>
                    </li>
                </ul>
            </span>
        </div>
    );
}

export default Map;
