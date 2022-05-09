function TitleLogement ({ details }) {
    return (
        <div className='title-logement'>
            <h1>{details.title}</h1>
            <h2>{details.location}</h2>
        </div>
        
    ) 

}

export default TitleLogement


