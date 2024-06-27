const Course = ({course}) => {
    return (
	<li>
	    <h2>{course.name}</h2>
	    <ul style={{listStyle: 'none', paddingLeft: 0}}>
		<Content key={course.id} course={course} />
	    </ul>
	    <Total courses={course} />
	</li>
    )
}

const Part = ({part}) => {
    return (
	<li>{part.name} {part.exercises}</li>
    )
}

const Content = ({course}) => {
    return (
	<li>
	    <ul style={{listStyle: 'none', paddingLeft: 0}}>
		{course.parts.map(part =>
		    <Part key={part.id} part={part} />
		)}
	    </ul>
	</li>
    )
}

const Total = ({courses}) => {
    const total = courses.parts.map(part => part.exercises).reduce((a,b) => a + b)
    return (
	<p><strong>total of {total} exercises</strong></p>
    )
}
	
const Courses = ({courses}) => {
    return (
	<div>
	    <h1>Web development curriculum</h1>
	    <ul style={{listStyle: 'none', paddingLeft:0}}>
		{courses.map(course =>
		    <Course key={course.id} course={course} />
		)
		}
	    </ul>
	</div>
    )
}

export default Courses
