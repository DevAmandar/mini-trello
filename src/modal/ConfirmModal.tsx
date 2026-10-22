import { FormEvent, PropsWithChildren, ReactNode, RefObject, use, useContext, useRef } from "react";

type Props = PropsWithChildren<{
    confirm: () => void
    modalRef: RefObject<HTMLDialogElement | null>
}>
export default function ConfirmModal({ modalRef, confirm }: Props): ReactNode {

        const closeModal = () => {
        modalRef.current?.close()
    }


    return (
        <dialog ref={modalRef} className="m-auto -translate-y-14 w-[300px] bg-gray-100 rounded-md">
            <div className="flex items-center justify-center py-1.5 mb-2 font-medium border-b-2 border-gray-300">
                <h3 >Are you sure?</h3>
            </div>
            <div className="flex justify-center items-center gap-5 my-3">
                <button
                    type="button"
                    onClick={closeModal}
                    className="py-1.5 px-2 text-gray-950 bg-gray-300 rounded-md font-medium cursor-pointer"
                >
                    Cancel
                </button>
                <button
                type="button"
                onClick={confirm}
                className="py-1.5 px-2 text-white bg-blue-400 rounded-md font-medium cursor-pointer">
                    Yes
                </button>
            </div>
        </dialog>
    )
}