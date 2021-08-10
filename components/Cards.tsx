import Card from "./Card";

interface CardsProp {
    movies: [];
}

const Cards = ({ movies }: CardsProp) => {
    return (
        <div className="sm:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 py-5">
            {movies ? movies.map((x: any, key: number) => (
                <Card key={key} movie={x} />
            )) : (
                <h1 className="text-white font-bold">No Movies found!</h1>
            )}
        </div>
    )
};

export default Cards;