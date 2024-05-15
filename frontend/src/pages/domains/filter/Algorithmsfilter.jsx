import React, { useState } from 'react';
import style from "./filter.module.css"
import {Link} from "react-router-dom"

export const AlgorithmsFilter = ({ data }) => {

  const [filter, setFilter] = useState('');

  const [statusFilter, setStatusFilter] = useState({ "Solved": false, "Unsolved": false });
  const [skillFilter, setSkillFilter] = useState({ "Basic": false, "Intermediate": false, "Advanced": false });
  const [difficultyFilter, setDifficultyFilter] = useState({ "Easy": false, "Medium": false, "Hard": false });
  const [subDomainFilter, setSubDomainFilter] = useState({
    "Dynamic Programming": false,
    "Sorting": false,
    "String Manipulation": false,
    "Graph Theory": false,
    "Algorithm": false,
    "Algorithms": false
  });

  const handleStatusFilterChange = (status) => {
    setStatusFilter(prevFilter => ({ ...prevFilter, [status]: !prevFilter[status] }));
  };

  const handleSkillFilterChange = (skill) => {
    setSkillFilter(prevFilter => ({ ...prevFilter, [skill]: !prevFilter[skill] }));
  };

  const handleDifficultyFilterChange = (difficulty) => {
    setDifficultyFilter(prevFilter => ({ ...prevFilter, [difficulty]: !prevFilter[difficulty] }));
  };

  const handleSubDomainFilterChange = (subdomain) => {
    setSubDomainFilter(prevFilter => ({ ...prevFilter, [subdomain]: !prevFilter[subdomain] }));
  };

  const applyFilter = (item) => {
    const statusActive = Object.values(statusFilter).some(filter => filter);
    const skillActive = Object.values(skillFilter).some(filter => filter);
    const difficultyActive = Object.values(difficultyFilter).some(filter => filter);
    const subDomainActive = Object.values(subDomainFilter).some(filter => filter);

    return (
      (!statusActive && !skillActive && !difficultyActive && !subDomainActive) ||
      (statusActive && statusFilter[item.status]) ||
      (skillActive && skillFilter[item.skills]) ||
      (difficultyActive && difficultyFilter[item.difficulty]) ||
      (subDomainActive && subDomainFilter[item.subDomain])
    ) && (
      item.status.toLowerCase().includes(filter.toLowerCase()) ||
      item.skill.toLowerCase().includes(filter.toLowerCase()) ||
      item.difficulty.toLowerCase().includes(filter.toLowerCase()) ||
      item.subDomain.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = data.filter(applyFilter);

  return (
    <>
    <div className={style.algorithm}>
      {/* data  */}
      <div className={style.container}>
        <ul className={style.questions}>
          {filteredData.map((item, index) => (
            <li key={index} className={style.question}>
              <Link className={style.link}>
                <div className={style.properties}>
                  <h1>{item.title}</h1>
                  <div>
                    <span style={{color:"rgb(3, 215, 3)"}}>{item.difficulty}, </span>
                    <span>{item.skills}, </span>
                    <span>Max Score: score, </span>
                    <span>Success Rate: </span>
                    <span>SubDomain: {item.subDomain}</span>
                  </div>
                </div>
                <button>Solve Challenge</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Filters List */}
      <div className={style.filtergroup}>
        <div className={style.filter}>  {/* Status Filter */}
          <h3>STATUS</h3>
          {Object.entries(statusFilter).map(([status, checked]) => (
            <button key={status}>
              <input className={style.checkbox} type="checkbox" checked={checked} onChange={() => handleStatusFilterChange(status)} />
              <p>{status}</p>
            </button>
          ))}
        </div>
        <div  className={style.filter}>  {/* Skill Filter */}
          <h3>SKILLS</h3>
          {Object.entries(skillFilter).map(([skill, checked]) => (
            <button key={skill}>
              <input className={style.checkbox} type="checkbox" checked={checked} onChange={() => handleSkillFilterChange(skill)} />
              <p>{skill}</p>
            </button>
          ))}
        </div>
        <div  className={style.filter}>  {/* Difficulty Filter */}
          <h3>DIFFICULTIES</h3>
          {Object.entries(difficultyFilter).map(([difficulty, checked]) => (
            <button key={difficulty}>
              <input className={style.checkbox} type="checkbox" checked={checked} onChange={() => handleDifficultyFilterChange(difficulty)} />
              <p>{difficulty}</p>
            </button>
          ))}
        </div>
        <div  className={style.filter}>  {/* SubDomain Filter */}
          <h3>SUBDOMAINS</h3>
          {Object.entries(subDomainFilter).map(([subDomain, checked]) => (
            <button key={subDomain}>
              <input className={style.checkbox} type="checkbox" checked={checked} onChange={() => handleSubDomainFilterChange(subDomain)} />
              <p>{subDomain}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};