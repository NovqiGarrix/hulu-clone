import { XIcon } from '@heroicons/react/outline';

interface MessageProps {
    message: string;
    variant: string;
    handleClose: any;
}

const Message = ({ message, variant, handleClose }: MessageProps) => {

    return (
        <div className={`absolute flex items-center duration-150 transition-all opacity-0 p-2 ${message ? 'opacity-100' : 'opacity-0'} px-5  ${variant === 'error' ? 'bg-red-600' : 'bg-green-600'} text-white rounded-sm shadow-sm bottom-7 left-8`}>
            <p className="text-white text-sm mr-3">{message}</p>
            <XIcon className="w-4 h-4 text-white cursor-pointer hover:rotate-45 transition-all duration-150" onClick={() => handleClose('clear')} />
        </div>
    )
};

export default Message;