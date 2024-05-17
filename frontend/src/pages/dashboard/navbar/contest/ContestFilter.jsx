import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./filter.module.css"


export const ContestFilter = ({ data }) => {
    const [filters, setFilters] = useState({
        "Rated": false, "Tutorials": false, "Algorithms": false,
        "Data Structures": false, "Mathematics": false, "C": false,
        "Artificial Intelligence": false, "C++": false, "Java": false,
        "Python": false, "Ruby": false, "SQL": false, "Databases": false
    });

    const handleFilterChange = (filter) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filter]: !prevFilters[filter]
        }));
    };

    const applyFilter = (item) => {
        const filterKeys = Object.keys(filters);
        // If no filter is applied, show all items
        if (!filterKeys.some(key => filters[key])) {
            return true;
        }
        // Otherwise, check if the item passes the active filters
        return filterKeys.every(key => !filters[key] || item.filter.includes(key));
    };

    const filteredData = data.filter(applyFilter);

    return (
        <>
        <div id={style.contest}>
            <ul className={style.contests}>
                {filteredData.map((item, id) => (
                    <li key={id} className={style.contest}>
                        <h1>{item.title}</h1>
                        <div>
                            <span>{item.date}, {item.time}, </span>
                            <span>{item.status}</span>
                        </div>
                        <Link className={style.link} to={`/${item.title.toLowerCase().split(" ").join("-")}`}>View Challenges</Link>
                    </li>
                ))}
            </ul>
            <div className={style.filters}>
                <div id={style.admin}>
                    <h2>ADMINISTRATION</h2>
                    <Link className={style.admin} to="/administration/contests/create">Create Contest</Link> <br/>
                    <Link className={style.admin} to="/administration/contests">Manage Contest</Link>
                </div>
                <hr/>
                <div className={style.filter}>
                    <h3>FILTERS</h3>
                    {Object.entries(filters).map(([filter, checked]) => (
                        <div key={filter}>
                            <label>
                                <input
                                    className={style.checkbox}
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => handleFilterChange(filter)}
                                />
                                {filter}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};
