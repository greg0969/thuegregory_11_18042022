function AvatarLogement ({ details }) {

    return (
        <div className='avatar-logement'>
            <h2>{details.host.name}</h2>
            <img src={details.host.picture} alt={details.host.name} />
        </div>
        
    ) 

}

export default AvatarLogement


