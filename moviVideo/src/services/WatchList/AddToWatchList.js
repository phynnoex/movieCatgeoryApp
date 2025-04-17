import { doc,arrayUnion,getDoc,updateDoc,setDoc } from "firebase/firestore";
import { db } from "../../Config/firebase";

export const addToWatchlist = async (userId, movieId) => {
  const userRef = doc(db, "users", userId);

  //create user document

  await setDoc(userRef, { watchlist: arrayUnion(movieId) }, { merge: true });
};
