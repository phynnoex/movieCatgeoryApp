import { doc,getDoc } from "firebase/firestore";
import { db } from "../../Config/firebase";

export const getWtachList = async (userId) => {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
        const watchlist = userDoc.data().watchlist;
        return watchlist;
    } else {
        console.log("No such document!");
        return [];
    }
}