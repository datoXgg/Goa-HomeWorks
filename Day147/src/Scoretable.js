import React from "react";

const ScoreTable = () => {
  const data = [
    { team: "Team A", score: 3 },
    { team: "Team B", score: 1 },
    { team: "Team C", score: 2 },
    { team: "Team D", score: 0 },
  ];

  return (
    <div>
      <h2>Football Score Table</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((match, index) => (
            <tr key={index}>
              <td>{match.team}</td>
              <td>{match.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
