import React from 'react';
import { getStorageInfo } from '../firebase';
import { useState, useEffect } from 'react';
import '../style/Map.css';

function Map() {
    const [url, setUrl] = useState('');
    const [left, setLeft] = useState('');
    const [top, setTop] = useState('');
    const [visible, setVisible] = useState('');

    useEffect(() => {
        async function updateImage() {
            const newUrl = await getStorageInfo();
            setUrl(newUrl);
        }
        updateImage();
    }, []);

    function setCoordinate(e) {
        setLeft(e.pageX - 25);
        setTop(e.pageY - 25);
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
                        <button onClick={() => setVisible('')}>Dante</button>
                    </li>
                    <li>
                        <button onClick={() => setVisible('')}>Jin</button>
                    </li>
                    <li>
                        <button onClick={() => setVisible('')}>Kratos</button>
                    </li>
                </ul>
            </span>
        </div>
    );
}

export default Map;
