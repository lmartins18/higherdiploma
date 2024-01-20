export default function Movie(props) {
    return (
        <div>
            
            <h1>Title: {props.name}</h1>
            <h2>Director: {props.director}</h2>
            <h2>Genre: {props.genre}</h2>
            <h2>Year: {props.year}</h2>
            <hr />
        </div>
    )
}