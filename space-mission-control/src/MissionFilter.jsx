import './MissionFilter.css';

export default function MissionFilter({onFilter}) {
    return (
        <div className="MissionFilter">
            <button 
            onClick={() => onFilter('All')}
            className="MissionFilter-button">All</button>
            <button 
            onClick={() => onFilter('Planned')}
            className="MissionFilter-button">Planned</button>
            <button 
            onClick={() => onFilter('Active')}
            className="MissionFilter-button">Active</button>
            <button 
            onClick={() => onFilter('Completed')}
            className="MissionFilter-button">Completed</button>
        </div>
    );
}