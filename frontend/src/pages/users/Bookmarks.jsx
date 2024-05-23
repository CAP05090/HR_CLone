import React from 'react'
import { Navbar } from '../../components/dashboard/Navbar/Navbar'
import { Footer } from '../../components/dashboard/Footer/Footer'
import style from "./bookmarked.module.css"

export const Bookmarks = () => {
    let Bookmarked = [
        // {"sss":"ddd"}, 
        // {"sss":"lll"}
    ]
  return (
    <>
    <Navbar />
    <h1 id={style.heading}>Bookmarked Challenges</h1>
    <div className={style.challenges}>
        {Bookmarked.length === 0 ? (
            <div className={style.bookmark}>You haven't bookmarked any challenges yet.</div>
        ) : (
            <div> 
                {Bookmarked.map((challenge, index) =>(
                    <div key={index}>{challenge.sss}</div>
                ))}
            </div>
        )}
    </div>
    <Footer />
    </>
  )
}
