import './MissionAction.css';

export default function MissionAction({ status, onStatusChange }) {
    return (
      <div className="MissionAction">
        <button
          onClick={() => onStatusChange('Active')}
          className="MissionAction-button"
          type="button"
        >
          Launch
        </button>
        <button
          onClick={() => onStatusChange('Completed')}
          className="MissionAction-button"
          type="button"
        >
          Complete
        </button>
      </div>
    );
  }