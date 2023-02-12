import React from 'react';
import { useState, useEffect } from 'react';
import { getLeaderboard, addScoreToBoard } from '../firebase';
import '../style/Leaderboard.css';

export default function Leaderboard() {
    const [value, setValue] = useState('');
    const [tableContent, setTableContent] = useState([]);

    function updateValue(e) {
        setValue(e.target.value);
    }

    async function updateTable() {
        const information = await getLeaderboard();
        const informationSorted = information.sort((a, b) => {
            if (a.score > b.score) {
                return 1;
            } else {
                return -1;
            }
        });
        const array = informationSorted.map((obj) => (
            <tr key={`${obj.name} ${obj.score}`}>
                <td>{obj.name}</td>
                <td>{obj.score}</td>
            </tr>
        ));
        setTableContent(array);
    }

    async function buttonHandler() {
        const score = document.querySelector('.stopwatch').textContent;
        await addScoreToBoard(value, score);
        updateTable();
    }

    useEffect(() => {
        updateTable();
    }, []);
    return (
        <div className="leaderboard">
            <label htmlFor="name">Your name: </label>
            <input
                type={'text'}
                id="name"
                onChange={updateValue}
                value={value}
            />
            <button onClick={() => buttonHandler()}>board</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>{tableContent}</tbody>
            </table>
        </div>
    );
}
