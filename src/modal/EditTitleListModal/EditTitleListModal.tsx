import { FormEvent, PropsWithChildren, ReactNode, RefObject, useContext, useRef, useState } from "react";
import { BoardContext } from "../../context/BoardContext";
import { TitleSchema } from "../../schemas/title-schema";

type Props = PropsWithChildren<{
    modalRef: RefObject<HTMLDialogElement | null>
    boardIndex: number
    listIndex: number
}>

export default function EditTitleListModal({ modalRef, boardIndex, listIndex }: Props): ReactNode {

    const { lists, dispatchLists } = useContext(BoardContext)
    const list = lists[boardIndex]?.lists[listIndex]

    const [showError, setShowError] = useState<string | null>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const closeModal = () => {
        modalRef.current?.close()
        formRef.current?.reset()
        setShowError(null)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const title = formData.get('title') as string

        if (validation(title)) {
            dispatchLists({
                type: 'rename_list_title',
                boardIndex: boardIndex,
                listIndex: listIndex,
                title: title
            })
            formRef.current?.reset()
            modalRef.current?.close()
            setShowError(null)
        }
    }

    const validation = (title: string): boolean => {
        const { error } = TitleSchema.safeParse(title)
        if (error) {
            setShowError(error.issues[0].message)
            return false
        }
        return true
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="p-1.5">
            <input
                type="text"
                name="title"
                defaultValue={list?.title}
                className="p-1.5 outline-2 outline-gray-300 rounded-md w-full"
            />

            <p className={`${showError ? 'visible' : 'invisible'} text-red-500 font-medium h-6`}>
                {showError || ' '}
            </p>

            <div className="flex justify-end gap-1.5 mt-3">
                <button
                    type="button"
                    onClick={closeModal}
                    className="py-1.5 px-2 text-gray-950 bg-gray-300 rounded-md font-medium cursor-pointer"
                >
                    Cancel
                </button>
                <button className="py-1.5 px-2 text-white bg-blue-400 rounded-md font-medium cursor-pointer">
                    Save
                </button>
            </div>
        </form>
    )
}