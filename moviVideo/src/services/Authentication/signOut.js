import { signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { useAuth } from "../../Config/AuthContext";

export const signOut = async () => {

  try {
    await firebaseSignOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out: hi ", error);
  }
};
