import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './filter.module.css';

export const PythonFilter = ({ data }) => {
  const [filters, setFilters] = useState({
    status: { Solved: false, Unsolved: false },
    skill: { Basic: false, Intermediate: false, Advanced: false },
    difficulty: { Easy: false, Medium: false, Hard: false },
    subDomain: {
      'Dynamic Programming': false,
      Sorting: false,
      'String Manipulation': false,
      'Graph Theory': false,
      Algorithm: false,
      Algorithms: false,
    }
  });

  const handleFilterChange = (type, filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: { ...prevFilters[type], [filter]: !prevFilters[type][filter] },
    }));
  };

  const applyFilter = (item) => {
    const { status, skill, difficulty, subDomain} = filters;
    return (
      (!Object.values(status).some(Boolean) || status[item.status]) &&
      (!Object.values(skill).some(Boolean) || skill[item.skills]) &&
      (!Object.values(difficulty).some(Boolean) || difficulty[item.difficulty]) &&
      (!Object.values(subDomain).some(Boolean) || subDomain[item.subDomain])
    );
  };

  const filteredData = data.filter(applyFilter);

  return (
    <div className={style.algorithm}>
      <div className={style.container}>
        <ul className={style.questions}>
          {filteredData.map((item, index) => (
            <li key={index} className={style.question}>
              <Link to={`/details/${item.id}`} className={style.link}>
                <div className={style.properties}>
                  <h1>{item.title}</h1>
                  <div>
                    <span style={{ color: 'rgb(3, 215, 3)' }}>{item.difficulty}, </span>
                    <span>{item.skills}, </span>
                    <span>Max Score: score, </span>
                    <span>Success Rate: {item.successRate}, </span>
                    <span>SubDomain: {item.subDomain}, </span>
                    <span>{item.status}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.filtergroup}>
        {Object.entries(filters).map(([type, options]) => (
          <div key={type} className={style.filter}>
            <h3>{type.toUpperCase()}</h3>
            {Object.entries(options).map(([option, checked]) => (
              <button key={option}>
                <input
                  className={style.checkbox}
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleFilterChange(type, option)}
                />
                <p>{option}</p>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

