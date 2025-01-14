import { IconX } from "@tabler/icons-react";
import { type ReactElement } from "react";

interface CloseButtonProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactElement;
}

function CloseButton({ setShowModal }: CloseButtonProps) {
    return (
        <div
            onClick={() => setShowModal(false)}
            className="relative cursor-pointer"
        >
            <IconX className="absolute right-2 top-2 text-truegray-100" />
        </div>
    );
}

export default function Modal({
    children,
    showModal,
    setShowModal,
}: ModalProps) {
    return (
        <>
            {showModal ? (
                <div
                    onClick={() => setShowModal(false)}
                    className="absolute left-0 right-0 z-40 m-auto flex h-screen w-screen items-center justify-center bg-truegray-800 bg-opacity-75"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-3/4 w-3/4 flex-col rounded-md border border-truegray-400 bg-truegray-600"
                    >
                        <CloseButton setShowModal={setShowModal} />
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
}
