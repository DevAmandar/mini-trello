import { ReactNode, useContext, useRef } from "react";
import Task from "../Component/Task/Task";
import { listDatas } from "../data/listDatas";
import Modal from "../modal/Modal";
import CreateTaskModal from "../modal/CreateTaskModal/CreateTaskModal";
import { useConstant } from "@dnd-kit/react/hooks";
import { BoardContext } from "../context/BoardContext";
export default function TasksPage(): ReactNode {

    const { lists } = useContext(BoardContext)
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const showModal = () => {
        modalRef.current?.showModal()
    }
    return (
        <div className="relative overflow-hidden h-[100vh]">
            <header className="p-1 mx-2.5 mb-2 mt-4">
                <div className="p-2.5 flex justify-between items-center rounded-md box">
                    <h1 className="font-bold text-gradient">Task managere</h1>
                    <button onClick={showModal} className="px-1 py-1.5 font-medium rounded-md text-gray-300 cursor-pointer">Create +</button>
                </div>
            </header>
            <div className="mt-20 mx-5 text-white flex items-center justify-center gap-4 flex-wrap">
                {lists.map((data, index) => (
                    <Task key={data.taskId} id={data.taskId} boardIndex={index} title={data.taskTitle} description={data.description}/>
                ))}
            </div>
            <Modal modalRef={modalRef} title="Create new task">
                <CreateTaskModal modalRef={modalRef}/>
            </Modal>
            <div className="ball-1"></div>
            <div className="ball-2"></div>
            <div className="ball-3"></div>
            <div className="ball-4"></div>
        </div>
    )
}