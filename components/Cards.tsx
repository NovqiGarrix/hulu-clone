import Card from "./Card";
import { useSelector } from 'react-redux';
import Image from 'next/image';

const Cards = () => {

    const moviesState = useSelector((state: any) => state.globalData);
    const { movies } = moviesState;

    const NoMovies = () => {
        return (
            <div className="flex items-center justify-between w-full h-full">
                <Image
                    src="https://drive.google.com/uc?export=view&id=1f5veIFw7JMnaajZt9bot8cbDr2zQ9Bsr"
                    width={1920}
                    height={1080}
                    objectFit="cover"
                    loading="lazy"
                />
            </div>
        )
    }

    return (
        <div className="sm:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 py-5">
            {movies?.length > 0 ? movies?.map((x: any, key: number) => (
                <Card key={key} movie={x} />
            )) : (
                <NoMovies />
            )}
        </div>
    )
};

export default Cards;