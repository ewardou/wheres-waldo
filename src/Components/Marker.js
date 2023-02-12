import flag from '../icons/flag.svg';
import '../style/Marker.css';

export function Marker(left, x, top, y, name) {
    const marker = document.createElement('img');
    const para = document.createElement('p');
    para.textContent = name;
    marker.setAttribute('src', flag);
    const container = document.createElement('div');
    container.append(marker, para);
    container.classList.add('marker');
    container.setAttribute(
        'style',
        `top:max(${(top / window.innerHeight) * 100}%,${y}px); left:max(${
            (left / window.innerWidth) * 100
        }%,${x}px)`
    );

    document.body.appendChild(container);
}
