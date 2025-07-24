// components/Notification.tsx
import { useEffect } from "react";

interface NotificationProps {
    message: string;
    type: "success" | "error";
    onClose: () => void;
}

export const Notification = ({ message, type, onClose }: NotificationProps) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000); // 5 segundos
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`fixed top-20 left-1/2 z-50 -translate-x-1/2 px-6 py-3 rounded-xl bg-black/30 backdrop-blur-xl border-3 shadow-lg transition-all duration-300
        ${type === "success" ? "border-green-600 text-green-600" : "border-red-600 text-red-600"}`}
        >
            {message}
        </div>
    );
};
