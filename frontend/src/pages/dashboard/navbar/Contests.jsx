import React, {useState, useEffect} from 'react'
import { Navbar } from '../../../components/dashboard/Navbar/Navbar'
import { Footer } from '../../../components/dashboard/Footer/Footer'
import { ContestFilter } from './contest/ContestFilter'
import style from "./contests.module.css"
import { Link } from 'react-router-dom'

export const Contests = () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)

  let contest = [
      { title: "Contest 1", date: "2024-05-20", time: "10:00", status: "Upcoming", filter: ["Rated", "Algorithms", "C++"] },
      { title: "Contest 2", date: "2024-05-22", time: "14:00", status: "Upcoming", filter: ["Tutorials", "Python", "Data Structures"] },
      { title: "Contest 3", date: "2024-05-25", time: "16:00", status: "Completed", filter: ["Rated", "Java", "Algorithms"] },
      { title: "Contest 4", date: "2024-05-27", time: "11:00", status: "Upcoming", filter: ["Mathematics", "Python", "SQL"] },
      { title: "Contest 5", date: "2024-05-29", time: "18:00", status: "Completed", filter: ["Data Structures", "Ruby", "Databases"] },
      { title: "Contest 6", date: "2024-06-01", time: "09:00", status: "Upcoming", filter: ["Rated", "Artificial Intelligence", "C"] },
      { title: "Contest 7", date: "2024-06-03", time: "13:00", status: "Upcoming", filter: ["Tutorials", "Java", "Algorithms"] },
      { title: "Contest 8", date: "2024-06-05", time: "15:00", status: "Completed", filter: ["Mathematics", "C++", "Databases"] },
      { title: "Contest 9", date: "2024-06-07", time: "17:00", status: "Upcoming", filter: ["SQL", "C", "Algorithms"] },
      { title: "Contest 10", date: "2024-06-10", time: "10:00", status: "Upcoming", filter: ["Artificial Intelligence", "Python", "Data Structures"] }
  ];
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const response = await axios.get("http://localhost:8080/challenge");
        setData(contest);
        setLoading(false);
        // console.log(response.data)
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Navbar />
    <div id={style.head}>
      <p>All Contests</p>
      <h1>Contests</h1>
    </div>
    <h1 id={style.contest}>Active Contests</h1>
    <div>
      <h1>Active Contests</h1>
    </div>
    <h1 id={style.contest}>Archived Contests</h1>
    <div className={style.contests}>
      {loading && <p>Loading...</p>}
      {contest && <ContestFilter data={contest} />}
    </div>
    <div className={style.archivedcontest}>
      <Link to="/contests/archived">Show More Archived Contests</Link>
    </div>
    <Footer />
    </>
  )
}
