import { useRouter } from 'next/router';

interface HeaderTypes {
    name: string;
    Icon: any;
    handleURI?: any;
}

const HeaderItem = ({ name, Icon, handleURI }: HeaderTypes) => {

    return (
        <div onClick={handleURI} className="group text-center text-gray-300 hover:text-white cursor-pointer flex items-center justify-center flex-col sm:w-18 md:w-20">
            <Icon className="w-6 h-6 group-hover:animate-bounce" />
            <small className="opacity-0 text-xs tracking-wide sm:tracking-widest group-hover:opacity-100 duration-150">{name}</small>
        </div>
    )
};

export default HeaderItem;