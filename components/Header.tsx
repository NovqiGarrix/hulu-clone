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
                    src="https://doc-08-3g-docs.googleusercontent.com/docs/securesc/o135qfnpk5erv10bu3aji13nu1i42q9m/2eda8g69qjs1tkbknubanfj0dh0ikfmb/1628583825000/01148904830813860087/15688299956973086431/1H9r6XSLc6P7jEOFjfJnUcEnVe7o1W3aK?e=view&authuser=0&nonce=pmn6aq0gdvri8&user=15688299956973086431&hash=qf4sgc1ar09shjd4db7utnqemhv9uvp7"
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
