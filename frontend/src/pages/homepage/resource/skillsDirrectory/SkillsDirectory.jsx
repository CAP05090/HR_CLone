import React from 'react';
import style from "./skillsdirectory.module.css";
import { Link } from 'react-router-dom';
import { Navbar } from '../../../../components/dashboard/Navbar/Navbar';
import { Footer } from '../../../../components/dashboard/Footer/Footer';

export const SkillsDirectory = () => {
    let skills = [
        { title: "NET", logo: "https://hr-assets.s3.amazonaws.com/skills-directory/dotNet.svg", levels: ["Basic", "Intermediate", "Advanced"] },
        { title: "Applied Math", logo: "https://hr-assets.s3.amazonaws.com/skills-directory/AppliedMath.svg", levels: ["View Skills Info"] },
        { title: "AWS", logo: "https://hr-assets.s3.amazonaws.com/skills-directory/AWS.svg", levels: ["Basic", "Intermediate"] }
    ];

    return (
        <>
            <Navbar />
            <div className={style.skillsDirectory}>
                <Link to="/skills-verification" className={style.ctfs}>View Certificates</Link>
                <h1>HackerRank Skills Directory</h1>
                <p>Learn more about technical skills available on HackerRank</p>
                <p>Certified by <Link to="/industry-experts">Industry Experts</Link></p>
            </div>
            <div className={style.container}>
                {skills.map((item, id) => (
                    <div key={id} className={style.skills}>
                        <div className={style.skill}>
                            <h2>{item.title}</h2>
                            <img src={item.logo} alt={item.title} />
                        </div>
                        <div className={style.skillLevels}>
                            {item.levels.map((level, index) => (
                                <Link key={index} className={style.link} to={item.levels.length>1 ? `${item.title.toLowerCase()}_${level.toLocaleLowerCase()}` : `${item.title}`}>{level}</Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default SkillsDirectory;
