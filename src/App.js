import React from 'react';
import { getStorageInfo } from './firebase';
import { useState, useEffect } from 'react';

function App() {
    const [url, setUrl] = useState('');
    useEffect(() => {
        async function updateImage() {
            const newUrl = await getStorageInfo();
            setUrl(newUrl);
        }
        updateImage();
    }, []);
    return (
        <div className="App">
            <img src={url} alt="jk" id="main" />
        </div>
    );
}

export default App;
