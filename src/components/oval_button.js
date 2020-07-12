import React from "react"
import arrow_rt from "../images/icons/arrow-right.svg"
import styles from "./oval_button.module.scss"
import { Link } from "gatsby"

function OvalButton(props) {
  let link = ""
  if (props.external) {
    link = (
      <a
        className={styles.link}
        href={props.to}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </a>
    )
  } else {
    link = (
      <Link className={styles.link} to={props.to}>
        {props.text}
      </Link>
    )
  }
  return (
    <div className={styles.btn}>
      {link}
      <div className={styles.arrow}>
        <i class="fas fa-arrow-right fa-2x"></i>
      </div>
    </div>
  )
}

export default OvalButton
