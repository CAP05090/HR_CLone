import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import style from "./createchallenge.module.css";
import { Navbar } from '../../../../../components/dashboard/Navbar/Navbar';
import { Footer } from '../../../../../components/dashboard/Footer/Footer';

export const CreateChallenges = () => {

  return (
    <>
      <Navbar />
      <div className={style.heading}>
        <h1>Create Challenges</h1>
        <p>Get started by providing the initial details needed to create a challenge.</p>
      </div>
      <form className={style.form} action="">
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="challengename">Challenge Name</label>
          <input className={style.inp} type="text" name="challengename" id="challengename" required />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="description">Description</label>
          <input className={style.inp} type="text" name="description" id="description" required placeholder='Write a short summary about the challenge' />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="problemstatement">Problem Statement</label>
          <input className={style.inp} type="text" name="problemstatement" id="problemstatement" required />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="inputformat">Input Format</label>
          <input className={style.inp} type="text" name="inputformat" id="inputformat" required />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="constraints">Constraints</label>
          <input className={style.inp} type="text" name="constraints" id="constraints" required />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="outputformat">Output Format</label>
          <input className={style.inp} type="text" name="outputformat" id="outputformat" required />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="tags">Tags</label>
          <input className={style.inp} type="text" name="tags" id="tags" required placeholder='add a tag' />
        </div>
        <div className={style.formGroup}>
          <button className={style.button} type="submit">Create Challenge</button>
        </div>
      </form>
      <Footer />
    
    </>
  );
}
