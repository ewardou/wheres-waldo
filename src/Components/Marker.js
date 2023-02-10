import flag from '../icons/flag.svg';
import '../style/Marker.css';

export function Marker(x, y, name) {
    const marker = document.createElement('img');
    const para = document.createElement('p');
    para.textContent = name;
    marker.setAttribute('src', flag);
    const container = document.createElement('div');
    container.append(marker, para);
    container.classList.add('marker');
    container.setAttribute('style', `top:${y}px; left:${x}px`);

    document.body.appendChild(container);
}
