import Movie from './Movie';

export default function Movies() {
    return (
        <div>
            <Movie
                name="Scarface"
                director="Brian De Palma"
                genre="Crime, Drama"
                year="1983"
            />
            <Movie
                name="The Godfather"
                director="Francis Ford Coppola"
                genre="Crime, Drama"
                year="1972"
            />
            <Movie
                name="GoodFellas"
                director="Martin Scorsese"
                genre="Crime, Drama"
                year="1990"
            />
        </div>
    )
}