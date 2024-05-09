// modify by using {link}
import React from "react"
import { Link } from "react-router-dom"


export default function ProjectNav() {

  const path = window.location.pathname

  return (
    <nav className="projectsNav">

      {/* <a href="/projects">
        Projects List
      </a> */}

      {/* <ul>
        <li>
          <a href="/project01">Project01</a>
        </li>
        <li>
          <a href="/project02">Project02</a>
        </li>
      </ul> */}

      //change href to link to
      <ul>
        <li>
          <Link to="/project01">Project01</Link>
        </li>
        <li>
          <Link to="/project02">Project02</Link>
        </li>
      </ul>


    </nav>
  )

}