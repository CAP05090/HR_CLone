import React from 'react'
import style from "./createcontest.module.css"
import { Navbar } from '../../../../../components/dashboard/Navbar/Navbar'
import { Footer } from '../../../../../components/dashboard/Footer/Footer'

export const CreateContest = () => {
  return (
    <>
    <Navbar />
    <h1>aaaaaa</h1>
    <hr />
      <div className={style.heading}>
        <h1>Create Contest</h1>
        <p>Host your own coding contest on HackerRank. You can practice and compete with friends from your organization or school. Select from our library of over 1,500 coding challenges or create your own.</p>
        <p>Get started by providing the initial details for your contest.</p>
      </div>
      <form className={style.form} action="">
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="contestName">Contest Name</label>
          <input className={style.inp} type="text" id="contestName" placeholder="Contest Name" required />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="startTime">Start Time *</label>
          <input className={style.inp} type="datetime-local" id="startTime" required />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="endTime">End Time *</label>
          <input className={style.inp} type="datetime-local" id="endTime" required />
        </div>
        <div className={style.formGroup}>
          <input className={style.checkbox} type="checkbox" id="noEndTime" />
          <label htmlFor="noEndTime">This contest has no end time.</label>
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="organizationType">Organization Type *</label>
          <select className={style.inp} id="organizationType" required>
            <option value="">Select Type</option>
            <option value="company">Company</option>
            <option value="school">School</option>
            <option value="non-profit">Non Profit</option>
            <option value="bootcamp">Bootcamp</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="organizationName">Organization Name *</label>
          <input className={style.inp} type="text" id="organizationName" required />
        </div>
        <button className={style.button} type="submit">Get Started</button>
      </form>
    <Footer />
    </>
  )
}
