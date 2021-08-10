import { useRouter } from 'next/router';
import imdbData from "../request/request";

const HeaderTitle = () => {
    const router = useRouter();

    const handleToType = (type: string) => {
        return router.push(`/?type=${type}`);
    }

    return (
        <div className="flex items-center">
            <ul className="list-none p-0 m-0 scrollbar-hide space-x-5 flex items-center overflow-y-hidden overflow-x-auto xs:px-2 text-white last:pr-5 whitespace-nowrap">
                {Object.entries(imdbData).map(([type, { title }], key) => (
                    <li onClick={() => handleToType(type)} key={key} className="cursor-pointer transform text-gray-300 hover:text-white hover:scale-105 transition duration-100 font-thin hover:font-bold">{title}</li>
                ))}

            </ul>
            <div className="block bg-gradient-to-l from-black to-transparent xs:w-20 lg:hidden" />
        </div>
    )
};

export default HeaderTitle;