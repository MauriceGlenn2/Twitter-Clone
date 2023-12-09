import {
  closeLoginModal,
  closeSignupModal,
  openLoginModal,
  openSignupModal,
} from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

  return (
    <>
      <button
        onClick={() => dispatch(openLoginModal())}
        className="bg-transparent border font-bold border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
      >
        Log in
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] bg-black border
         border-gray-700 rounded-lg 
         text-white md:w-[500px] md:h-[560px]
         flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="text-center mt-4 font-bold text-4xl">
              Sign in to your account
            </h1>
            <input
              placeholder="Email"
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              type={"email"}
            />
            <input
              placeholder="Password"
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              type={"password"}
            />
            <button className="bg-white mt-8 rounded-md text-black w-full font-bold text-lg p-2">
              Sign in
            </button>
            <h1 className="text-center mt-8 font-bold text-lg ">Or</h1>
            <button className="bg-white rounded-md text-black w-full font-bold text-lg p-2 mt-8">
              Sign in as guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
