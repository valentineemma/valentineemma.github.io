import profile from './profile.js'
import './App.css'

function App() {
  return (
    <div className="profile-page">
      <header className="site-header">
        <h1>{profile.name}</h1>
      </header>

      <main className="profile-content">
        {profile.sections.map((section, index) => (
          <section
            className="profile-section"
            key={section.title}
            aria-labelledby={`section-${index}`}
          >
            <span className="section-number" aria-hidden="true">
              0{index + 1}
            </span>
            <div>
              <h2 id={`section-${index}`}>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
