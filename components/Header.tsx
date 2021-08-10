import { useRouter } from 'next/router';

import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { HomeIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline';

const Header = () => {

    const router = useRouter();
    const handleToHome = (name: string) => {
        if (name === 'HOME') return router.replace('/');
    }

    return (
        <div className="flex items-center m-0 w-full flex-col-reverse justify-center sm:justify-between sm:items-center sm:flex-row">
            <div className="flex items-center justify-center">
                <HeaderItem handleURI={handleToHome} name="HOME" Icon={HomeIcon} />
                <HeaderItem name="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem name="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem name="COLLECTION" Icon={CollectionIcon} />
                <HeaderItem name="SEARCH" Icon={SearchIcon} />
                <HeaderItem name="ACCOUNT" Icon={UserCircleIcon} />
            </div>
            <div onClick={() => handleToHome('HOME')} className="cursor-pointer">
                <Image
                    src="https://drive.google.com/uc?export=view&id=1H9r6XSLc6P7jEOFjfJnUcEnVe7o1W3aK"
                    width={170}
                    height={90}
                />
            </div>
        </div>
    )
};

export default Header;