import './MissionControl.css';
import MissionCard from './MissionCard.jsx';
import MissionAction from './MissionAction.jsx';
import MissionFilter from './MissionFilter.jsx';
import React, { useState } from 'react';

export default function MissionControl({ missions }) {
  const [allMissions, setAllMissions] = useState(missions); 
  const [filteredMissions, setFilteredMissions] = useState(missions);
  const [currentFilter, setCurrentFilter] = useState('All');

 
  const handleFilter = (filterStatus) => {
    setCurrentFilter(filterStatus);
    if (filterStatus === 'All') {
      setFilteredMissions(allMissions);
    } else {
      const newFilteredMissions = allMissions.filter(
        (mission) => mission.status === filterStatus
      );
      setFilteredMissions(newFilteredMissions);
    }
  };


  const handleStatusChange = (id, newStatus) => {
    const updatedMissions = allMissions.map((mission) =>
      mission.id === id ? { ...mission, status: newStatus } : mission
    );
    setAllMissions(updatedMissions);

  
    if (currentFilter === 'All') {
      setFilteredMissions(updatedMissions);
    } else {
      const newFilteredMissions = updatedMissions.filter(
        (mission) => mission.status === currentFilter
      );
      setFilteredMissions(newFilteredMissions);
    }
  };

  return (
    <>
      <MissionFilter onFilter={handleFilter} />
      <div className="MissionControl">
        {filteredMissions.map((mission) => (
          <MissionCard
            key={mission.id}
            name={mission.name}
            status={mission.status}
            crew={mission.crew}
          >
            <MissionAction
              status={mission.status}
              onStatusChange={(newStatus) => handleStatusChange(mission.id, newStatus)}
            />
          </MissionCard>
        ))}
      </div>
    </>
  );
}