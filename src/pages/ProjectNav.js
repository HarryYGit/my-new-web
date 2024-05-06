export default function ProjectNav() {

  const path = window.location.pathname

  return (
    <nav >

      <a href="/projects">
        Projects List
      </a>

      <ul>
        <li>
          <a href="/projects/project01">Project01</a>
        </li>
        <li>
          <a href="/projects/project02">Project02</a>
        </li>
      </ul>

    </nav>
  )

}