import { closeCommentModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModal() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
   console.log("Modal open state:", isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <Modal className="flex justify-center items-center"
      open={isOpen} 
      onClose={() => dispatch(closeCommentModal())}>
        <div className=" w-full h-full sm:w-[600px] 
        sm:h-[386px] rounded-lg bg-black border border-gray-500 ">
            <div>
                <div>
                    <img src="/assest/me " />
                </div>

            </div>

        </div>
      </Modal>
    </>
  );
}

//2:30:45