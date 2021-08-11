interface HeaderTypes {
    name: string;
    Icon: any;
    url?: string;
    handleURI: (loc: any) => void;
}

const HeaderItem = ({ name, Icon, handleURI, url }: HeaderTypes) => {

    return (
        <div onClick={() => handleURI(url)} className="group text-center text-gray-300 hover:text-white cursor-pointer flex items-center justify-center flex-col sm:w-18 md:w-20 lg:w-24">
            <Icon className="w-6 h-6 group-hover:animate-bounce" />
            <small className="opacity-0 text-xs tracking-wide sm:tracking-widest group-hover:opacity-100 duration-150">{name}</small>
        </div>
    )
};

export default HeaderItem;