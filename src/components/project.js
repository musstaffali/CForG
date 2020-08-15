import React from "react"
import styles from "./project.module.css"
import OvalButton from "./oval_button.js"
function Project(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{props.title}</h1>
      </div>
      <section>
        <div className={styles.status}>{props.status}</div>
        <a href={props.repo} target="blank" rel="noreferrer">
          <h2 className={styles.ghlink}>GitHub</h2>
        </a>
        <p className={styles.body}>{props.body}</p>
      </section>
      <OvalButton text="Join Project" external="true" link={props.slack} />
    </div>
  )
}
export default Project
