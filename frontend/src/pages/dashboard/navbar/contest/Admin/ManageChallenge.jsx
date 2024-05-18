import React from 'react'
import {Link} from "react-router-dom"
import style from "./managechallenge.module.css"
import { Navbar } from '../../../../../components/dashboard/Navbar/Navbar'
import { Footer } from '../../../../../components/dashboard/Footer/Footer'

export const ManageChallenges = () => {
  return (
    <>
    <Navbar />
    <h1 id={style.admin}>Administration</h1>
    <hr />
    <div className={style.admin}>
      <div>
        <Link className={style.link} to="/administration/contests">Manage Contests</Link>
        <Link className={style.link} to="/administration/challenges">Manage Challenges</Link>
      </div>
      <div className={style.search}>
        <img src="https://img.icons8.com/?size=100&id=132&format=png" alt="search" />
        <input type="text" placeholder='Start Typing'/>
      </div>
    </div>
    <hr />
    <div className={style.challenge}>
      <p>
        Challenges you can edit are below. For more info, visit our
        <Link className={style.lnk} to="/problemsetter/p"> FAQ </Link>
        or join our
        <Link className={style.lnk} to="/groups/38765432/"> discussion forum</Link>
        .
      </p>
      <Link className={style.challengecreate} to="/administration/challenges/create">Create Challenge</Link>
    </div>
    <div className={style.challenges}>
      <p>You have not created any challenge.</p>
    </div>
    <Footer />
    </>
  )
}
