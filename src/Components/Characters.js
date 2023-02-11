import React from 'react';
import { useState, useEffect } from 'react';
import { getImageURL } from '../firebase';
import '../style/Characters.css';

export default function Characters({ char1, char2, char3 }) {
    const [urlChar1, setUrlChar1] = useState('');
    const [urlChar2, setUrlChar2] = useState('');
    const [urlChar3, setUrlChar3] = useState('');

    useEffect(() => {
        (async function () {
            const newUrl1 = await getImageURL(char1.toLowerCase());
            const newUrl2 = await getImageURL(char2.toLowerCase());
            const newUrl3 = await getImageURL(char3.toLowerCase());
            setUrlChar1(newUrl1);
            setUrlChar2(newUrl2);
            setUrlChar3(newUrl3);
        })();
    }, []);

    return (
        <div className="characters">
            <div id={char1}>
                <img src={urlChar1} alt={char1} />
                <p>{char1}</p>
            </div>
            <div id={char2}>
                <img src={urlChar2} alt={char2} />
                <p>{char2}</p>
            </div>
            <div id={char3}>
                <img src={urlChar3} alt={char3} />
                <p>{char3}</p>
            </div>
        </div>
    );
}
