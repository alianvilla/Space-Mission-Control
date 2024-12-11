import './MissionCard.css';

export default function MissionCard({name, status, crew, children}) {
    return (
        <>
        <div className="MissionCard">
            <div className='MissionCard-info'>
                <h2 className="MissionCard-title">{name}</h2>
                <p className="MissionCard-status">{status}</p>
                <p className="MissionCard-status">Crew: {crew.join(", ")}</p>
            </div>
            <div>{children}</div>

            
        </div>
        </>
        
    );

}