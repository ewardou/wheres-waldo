import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

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

const imageRef = ref(storage, 'thehobbit.jpg');

export async function getStorageInfo() {
    const url = await getDownloadURL(imageRef);
    return url;
}
