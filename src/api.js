import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getFirestore, 
    collection,
     doc, 
    getDocs, 
    getDoc, 
    query,
    where
} from  "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAZQeH2LoSwygBtIZeD-eN_oFnDwf3WZIE",
  authDomain: "vanlife-4e036.firebaseapp.com",
  projectId: "vanlife-4e036",
  storageBucket: "vanlife-4e036.firebasestorage.app",
  messagingSenderId: "1036733055842",
  appId: "1:1036733055842:web:d161ebf275a77975e9a23b",
  measurementId: "G-6BN93SL475"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")


export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr)
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : `/api/vans`
//     const response = await fetch(url)
//     if(!response.ok) {
//         throw{
//             message : "Failed to fetch vans",
//             statusText : response.statusText,
//             status : response.status
//         }
//     }
//     const data = await response.json()
//     return data.vans
// }



export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr)
    return dataArr
}


// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if(!res.ok){
//         throw{
//             message : "Failed to fetch vans",
//             statusText : res.statusText,
//             status : res.status
//         }
//     }
//     const data = await res.json()
//     return  data.vans
// }



export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}