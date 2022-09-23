export const formatNewTeamData = (currentDataObj, newTeam) => {
  const newTeamsObj = {
    ...currentDataObj.teams,
    [newTeam.teamName]: {
      ...newTeam,
    },
  };

  return JSON.stringify({
    ...currentDataObj,
    teams: newTeamsObj,
  });
};
