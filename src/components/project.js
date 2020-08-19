import React from "react"
import styles from "./project.module.scss"

function Project(props) {
  var footeritem
  if (props.link != "") {
    footeritem = (
      <a
        className="card-footer-item dkblue"
        href={props.link}
        target="blank"
        rel="noreferrer"
      >
        {props.linktxt}
      </a>
    )
  } else footeritem = <p className="card-footer-item dkblue">{props.linktxt}</p>

  return (
    <div className="card my-5">
      <div className="card-header">
        <h2 className="card-header-title">{props.title}</h2>
      </div>
      <div className={styles.status}>Status: {props.status}</div>
      <div className="card-content">
        <p className={styles.body}>{props.body}</p>
      </div>
      <div className="card-footer">{footeritem}</div>
    </div>
  )
}
export default Project
