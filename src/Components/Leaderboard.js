import React from 'react';
import { useState, useEffect } from 'react';
import { getLeaderboard, addScoreToBoard } from '../firebase';
import '../style/Leaderboard.css';
import { Link } from 'react-router-dom';

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

    async function buttonHandler(e) {
        if (!value) return alert('Please enter a name');
        const score = document.querySelector('.stopwatch').textContent;
        e.target.setAttribute('disabled', '');
        await addScoreToBoard(value, score);
        updateTable();
    }

    useEffect(() => {
        updateTable();
    }, []);
    return (
        <div className="leaderboard">
            <div>
                <p>Thank you for playing!</p>
                <label htmlFor="name">Please enter your name: </label>
                <input
                    type={'text'}
                    id="name"
                    onChange={updateValue}
                    value={value}
                />
                <button onClick={(e) => buttonHandler(e)}>Submit</button>
                <div>
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
                <Link to="/">
                    <button
                        onClick={() => {
                            document
                                .querySelectorAll('.marker')
                                .forEach((mark) => mark.remove());
                        }}
                    >
                        Back to menu
                    </button>
                </Link>
            </div>
        </div>
    );
}
