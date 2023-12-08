import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

//making a modal with mui
export default function SignUpModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

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
            />
            <input
              placeholder="Password"
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              type={"password"}
            />
            <button className="bg-white mt-8 rounded-md text-black w-full font-bold text-lg p-2">
             Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
