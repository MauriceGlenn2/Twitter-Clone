import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { setUser } from "@/redux/userSlice";
import { current } from "@reduxjs/toolkit";

export default function SignUpModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  //UseEffect listener checking if user is logged in or not
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      //important => gets email, displayName, UID, photoURL
      //do nothing if user is not logged in
      if (!currentUser) return;
      //if logged need to put in redux slice to use in other components, dispach with setUserSlice
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0], //username is everything before @
          name: null,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: null,
        })
      );
    });
    //turns off listener
    return unsbscribe;
  }, []);

  return (
    <>
      <button
        onClick={() => dispatch(openSignupModal())}
        className="bg-white font-bold border-white text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
      >
        Sign up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] bg-black border
         border-gray-700 rounded-lg 
         text-white md:w-[500px] md:h-[560px]
         flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <button className="bg-white rounded-md text-black w-full font-bold text-lg p-2">
              Sign in as guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">Or</h1>
            <h1 className="text-center mt-4 font-bold text-4xl">
              Create your account
            </h1>
            <input
              placeholder="Full Name"
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              type={"name"}
            />
            <input
              placeholder="Email"
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-white mt-8 rounded-md text-black w-full font-bold text-lg p-2"
              onClick={handleSignup}
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
