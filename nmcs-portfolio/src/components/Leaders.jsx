const leaders = [
  {
    name: "John Doe",
    position: "Chairperson",
    quote: "Serve with faith and lead with love.",
    image: "/src/assets/leaders/john.jpg"
  },
  {
    name: "Jane Doe",
    position: "Secretary",
    quote: "Faith in action transforms lives.",
    image: "/src/assets/leaders/jane.jpg"
  }
]

function Leaders() {
  return (
    <section id="leaders">
      <h2>Our Leaders</h2>
      <div className="leader-container">
        {leaders.map((leader, index) => (
          <div key={index} className="card">
            <img src={leader.image} alt={leader.name} />
            <h3>{leader.name}</h3>
            <p>{leader.position}</p>
            <em>"{leader.quote}"</em>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Leaders

