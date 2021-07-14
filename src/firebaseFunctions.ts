import firebase, { db } from "./firebase"
import { List, AppState } from "./AppStateContext"

export const Auth = () => (
    firebase.auth().signInAnonymously()
        .then(() => {
            // Signed in..

        })
        .catch((error) => {
            console.log(error)
            // ...
        }))

export const Watch: firebase.Unsubscribe = () =>
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            AddUser(uid)
            return uid
            // ...
        } else {
            console.log("nothing")
            // User is signed out
            // ...
        }
    })



export const AddUser = (id: string) => {
    db.collection("users").doc(id).set({
        id
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

export const AddList = (list: List, uid: string) => {
    db.collection("lists").doc(list.id).set({
        uid,
        id: list.id,
        tasks: [...list.tasks ?? ""],
        text: list.text

    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

export const AddManyList = (list: AppState, uid: string) => {
    list.lists.map(arr => AddList(arr, uid))
}



export const id = (fun: any) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            fun(user.uid)
        } else {
            console.log("nothing")
        }
    });
}



const listRef = db.collection('lists')
const ShowTrueData = (snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
    let data: any[] = []
    snapshot.forEach(shijo => {
        let list = shijo.data()
        delete list.uid
        data.push({
            ...list
        })
    })
    let datin = { lists: [...data] }
    return datin
}

export const GetData = (id: string) => {
    return listRef.where('uid', '==', id).get().then(ShowTrueData)

}