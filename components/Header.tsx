import { useRouter } from 'next/router';

import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { HomeIcon, UserCircleIcon } from '@heroicons/react/outline';
import request from '../request/request';

const Header = () => {

    const router = useRouter();
    const handleGenreClick = (loc: string) => {
        return router.push(`/?type=${loc}`);
    }

    const handleToHome = () => {
        return router.replace('/');
    }

    // const handleAccount = () => {
    //     return router.replace('/account');
    // }

    return (
        <div className="flex items-center m-0 w-full flex-col-reverse justify-center sm:justify-between sm:items-center sm:flex-row">
            <div className="flex items-center justify-center">
                <HeaderItem handleURI={handleToHome} name="HOME" Icon={HomeIcon} />
                {Object.entries(request).map(([url, { title, Icon }], key) => (
                    <HeaderItem key={key} url={url} handleURI={handleGenreClick} name={title} Icon={Icon} />
                ))}
                {/* <HeaderItem handleURI={handleAccount} name="ACCOUNT" Icon={UserCircleIcon} /> */}
            </div>
            <div onClick={handleToHome} className="cursor-pointer">
                <Image
                    src="https://drive.google.com/uc?export=view&id=1H9r6XSLc6P7jEOFjfJnUcEnVe7o1W3aK"
                    width={170}
                    height={90}
                    loading="lazy"
                    objectFit="cover"
                />
            </div>
        </div>
    )
};

export default Header;