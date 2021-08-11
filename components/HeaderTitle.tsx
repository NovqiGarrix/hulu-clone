import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


const HeaderTitle = () => {
    const router = useRouter();
    const genresState = useSelector((state: any) => state.genres);
    const { genreData } = genresState;

    const handleToType = (type: string) => {
        return router.push(`/search/${type.toLowerCase()}`);
    }

    return (
        <div className="flex items-center">
            <ul className="list-none p-0 m-0 scrollbar-hide space-x-5 flex items-center overflow-y-hidden overflow-x-auto xs:px-2 text-white last:pr-5 whitespace-nowrap">
                {genreData?.length > 0 && genreData.map((x: any, key: any) => (
                    <li onClick={() => handleToType(x.name)} key={key} className={`${router.query.id === x.name.toLowerCase() ? 'text-red-400 font-bold' : ''} cursor-pointer transform text-gray-300 hover:text-white hover:scale-105 transition duration-100 font-thin hover:font-bold`}>{x.name}</li>
                ))}
            </ul>
            <div className="block bg-gradient-to-l from-black to-transparent xs:w-20 lg:hidden" />
        </div>
    )
};

export default HeaderTitle;