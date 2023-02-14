import React from 'react';
import { getImageURL } from '../firebase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Menu.css';

export default function Menu() {
    const [urls, setUrls] = useState('');

    useEffect(() => {
        (async function () {
            const ps1 = await getImageURL('ps1');
            const ps2 = await getImageURL('ps2');
            const ps3 = await getImageURL('ps3');
            const ps4 = await getImageURL('ps4');
            setUrls({ ps1, ps2, ps3, ps4 });
        })();
    }, []);

    return urls ? (
        <div className="menu">
            <div>
                <p>Choose a level to play</p>
            </div>
            <Link to={'ps1'}>
                <img src={urls.ps1} alt="ps1" />
            </Link>
            <Link to={'ps2'}>
                <img src={urls.ps2} alt="ps2" />
            </Link>
            <Link to={'ps3'}>
                <img src={urls.ps3} alt="ps3" />
            </Link>
            <Link to={'ps4'}>
                <img src={urls.ps4} alt="ps4" />
            </Link>
        </div>
    ) : (
        <p className="menu">Loading...</p>
    );
}
