export default function Entry(props) {
    // Destructure the img object
    // const { src, alt } = props.img || {src: "test.jpg", alt: "test"};  // default value in case img is not defined
    return (
        <article className="entry">
            <img className="entry--image" src={props.img.src} alt={props.img.alt}></img>
            <div className="entry--div">
                <img className="entry--marker" src="src/images/marker.png" alt="marker icon"></img>
                <span className="entry--location">{props.country}</span>
                <a className="entry--link" href={props.googleMapsLink}>View on Google Maps</a>
            
                <h2 className="entry--title">{props.title}</h2>
                <p className="entry--date">{props.date}</p>
                <p className="entry--description">{props.text}</p>
            </div>
            
        </article>  
    )
}