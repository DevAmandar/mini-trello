import { ReactNode, useContext, useRef, useState } from "react";
import { NavLink, Link } from "react-router";
import { BoardContext } from "../../context/BoardContext";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { Bounce, toast } from "react-toastify";
import Modal from "../../modal/Modal";
import EditTaskModal from "../../modal/EditTaskModal/EditTaskModal"
import ConfirmModal from "../../modal/ConfirmModal";

type Props = {
    boardIndex: number
    title: string
    description: string
    id: string
}
export default function Task({ id, boardIndex, title, description }: Props): ReactNode {

    const modalRef = useRef<HTMLDialogElement | null>(null)
    const confirmModalRef = useRef<HTMLDialogElement | null>(null)

    const [isRemoving, setIsRemoving] = useState(false)

    const { dispatchLists } = useContext(BoardContext)

    const handleRemoveBoard = () => {
        // debugger
        setIsRemoving(true)

        setTimeout(() => {
            dispatchLists({ type: 'remove_task', taskId: id })
            notify()
        }, 300)
    }

    const showConfirm = () => {
        confirmModalRef.current?.showModal()
    }

    const notify = () => toast.success('successfully deletes', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const showModal = () => {
        modalRef.current?.showModal()
    }
    return (
        <>
            <div className={`glass-card 
                        rounded-md w-[300px] text-gray-900 py-1.5
                        transition-all duration-300 ease-in-out                         
                        ${isRemoving ? 'opacity-0 translate-x-[-15px] outline-none overflow-hidden' : ''}
        `}>
                <div className="flex items-center justify-between p-2.5 mx-1.5 border-b-2 border-b-black">
                    <Link to={`boardPage/${boardIndex}`}>
                        <h2 className="font-bold to-gray-800">{title}</h2>
                    </Link>
                    <div className="flex justify-center items-center gap-2.5">
                        <MdOutlineModeEdit onClick={showModal} size={20} className="cursor-pointer text-gray-500" />
                        <MdDeleteOutline onClick={showConfirm} size={20} className="cursor-pointer text-gray-500" />
                    </div>
                </div>
                <p className="py-2.5 pl-5 italic max-w-[200px] break-words">
                    {description}
                </p>
            </div>
            <Modal title="Edit Task" modalRef={modalRef}>
                <EditTaskModal modalRef={modalRef} boardIndex={boardIndex} />
            </Modal>
            <ConfirmModal confirm={handleRemoveBoard} modalRef={confirmModalRef} />
        </>
    )
}