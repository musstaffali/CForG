/* WORK IN PROGRESS - SECTION OF SOCIAL PLATFORMS CURRENTLY REMOVED FROM HOMEPAGE< STORED FOR FUTURE USE */
import React from "react"
import styles from "joinplatforms.module.scss"
import slackico from "../images/social/slack_icon.svg"
import githubico from "../images/social/github_icon.svg"
import meetupico from "../images/social/meetup_icon.svg"
function JoinPlatforms() {
  return (
    <section>
      <div className={styles.join - platforms}>
        <div className="container">
          <h1 className="has-text-centered">JOIN THE GROUP</h1>
          <p>
            If you want to improve the well-being of Greensboro, these platforms
            are the best way to meet us and volunteer for our many current
            projects.
          </p>
        </div>
        <div className="columns">
          <div className="column">
            <img src={slackico} alt="Slack Logo" />
            <OvalButton
              text="Join Us"
              to="https://bit.ly/cfgso-slack"
              external="true"
            />
          </div>
          <div className="column">
            <img src={githubico} alt="GitHub Logo" />
            <OvalButton
              text="Join Us"
              to="https://github.com/codeforgso"
              external="true"
            />
          </div>
          <div className="column">
            <img src={meetupico} alt="Meetup Logo" />
            <OvalButton
              text="Join Us"
              to="https://www.meetup.com/Code-for-Greensboro/"
              external="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinPlatforms
