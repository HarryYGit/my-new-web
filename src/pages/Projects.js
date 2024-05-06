
import ProjectNav from './ProjectNav'

import Project01 from './projects/Project01'
import Project02 from './projects/Project02'



function Projects() {

  
  let component

  switch(window.location.pathname) {
    case "/":
      component = <Projects />
      break
    case "/projects/project01":
      component = <Project01 />
      break
    case "/projects/project02":
      component = <Project02 />
      break

  }

  return (

    <>  




      <ProjectNav />
      
      { component }
     
    
    
    
    
    </>
   



  ) 
}

export default Projects