import React from "react";

interface IWatermarkButtonProps {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: React.FC<any>;
    onClick?: () => void;
}

export default function WatermarkButton({
    icon: Icon,
    title,
    onClick,
}: IWatermarkButtonProps) {
    return (
        <div
            onClick={() => {
                onClick ? onClick() : null;
            }}
            className="m-3 flex h-24 w-24 flex-col items-center justify-center rounded-md bg-truegray-600 text-blue-600 shadow-md transition-all duration-150 ease-linear hover:cursor-pointer hover:rounded-xl hover:bg-truegray-700"
        >
            <Icon className="h-10 w-10" />
            <p className="text-truegray-50">{title}</p>
        </div>
    );
}
