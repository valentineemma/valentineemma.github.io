import { useEffect, useState } from 'react'
import profile from './profile.js'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  return (
    <div className="profile-page">
      <header className="site-header">
        <h1>{profile.name}</h1>
        <button
          className="theme-toggle"
          type="button"
          aria-pressed={isDarkMode}
          onClick={() => setIsDarkMode((currentMode) => !currentMode)}
        >
          <span className="theme-toggle-indicator" aria-hidden="true" />
          Dark mode
        </button>
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
