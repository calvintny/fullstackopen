const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return(
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }

  const Content = (props) => {
    return(
      <div>
        <Part part={props.course.parts[0]}/>
        <Part part={props.course.parts[1]}/>
        <Part part={props.course.parts[2]}/>
      </div>
    )
  }

  const Total = (props) =>{
    let total = 0
    props.course.parts.forEach(part => {
      total += part.exercises
    })
    return(
      <div>
        <p>Number of exercises {total}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content  course={course} />
      <Total course={course} />
    </div>
  )
}

export default App