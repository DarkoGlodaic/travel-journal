export default function Entry(props) {
    return (
        <article className="entry">
            <img className="entry--image" src={props.entry.img.src} alt={props.entry.img.alt}></img>
            <div className="entry--div">
                <img className="entry--marker" src="src/images/marker.png" alt="marker icon"></img>
                <span className="entry--location">{props.entry.country}</span>
                <a className="entry--link" href={props.entry.googleMapsLink}>View on Google Maps</a>
            
                <h2 className="entry--title">{props.entry.title}</h2>
                <p className="entry--date">{props.entry.date}</p>
                <p className="entry--description">{props.entry.text}</p>
            </div>
            
        </article>  
    )
}