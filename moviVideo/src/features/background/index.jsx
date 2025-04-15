import "./styles.scss"

export default function Background(props) {
    return (
        <div className="background"
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.image})`}}
        >
            
        </div>
    )
}