import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCW45hodUM5B799uWX0PuY7uBC6oQKg_-4',
    authDomain: 'where-s-waldo-6cc13.firebaseapp.com',
    projectId: 'where-s-waldo-6cc13',
    storageBucket: 'where-s-waldo-6cc13.appspot.com',
    messagingSenderId: '585614004325',
    appId: '1:585614004325:web:968c1ae302f676eba0768c',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export async function getImageURL(fileName) {
    const imageRef = ref(storage, `${fileName}.png`);
    const url = await getDownloadURL(imageRef);
    return url;
}

export async function getCoordinatesInfo(e) {
    const character = e.target.textContent;
    const querySnapshot = await getDocs(collection(db, 'coordinates'));
    let coordinates;
    querySnapshot.forEach((doc) => {
        if (doc.id === `${character}-position`) {
            coordinates = doc.data();
        }
    });
    return coordinates;
}

export async function getLeaderboard() {
    const querySnapshot = await getDocs(collection(db, 'leaderboard'));
    return querySnapshot.docs.map((doc) => doc.data());
}

export async function addScoreToBoard(name, score) {
    await addDoc(collection(db, 'leaderboard'), {
        name: name,
        score: score,
    });
}
