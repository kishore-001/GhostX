"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../css/NotFound.css"

const NotFound = () => {
  const [glitchText, setGlitchText] = useState("404")
  const [attempts, setAttempts] = useState(0)

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  useEffect(() => {
    const interval = setInterval(() => {
      let glitched = ""
      for (let i = 0; i < 3; i++) {
        if (Math.random() < 0.3) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          glitched += "404"[i]
        }
      }
      setGlitchText(glitched)

      setTimeout(() => setGlitchText("404"), 100)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setAttempts((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="notfound-container">
      <div className="error-display">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
            <span className="terminal-title">SYSTEM ERROR</span>
          </div>
          <div className="terminal-content">
            <div className="error-animation">
              <h1 className="error-code glitch" data-text="404">
                {glitchText}
              </h1>
              <div className="error-details">
                <p className="error-type">ERROR_TYPE: PAGE_NOT_FOUND</p>
                <p className="error-location">LOCATION: {window.location.pathname}</p>
                <p className="error-time">TIMESTAMP: {new Date().toISOString()}</p>
                <p className="error-attempts">ACCESS_ATTEMPTS: {attempts}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="error-message-section">
          <h2 className="error-title">🚨 SECURITY BREACH DETECTED</h2>
          <p className="error-message">The requested resource could not be located in our secure database.</p>
          <p className="error-description">
            This could indicate an unauthorized access attempt or a broken link. Our security systems have logged this
            incident.
          </p>

          <div className="error-actions">
            <Link to="/" className="return-btn primary">
              🏠 Return to Base
            </Link>
            <button className="return-btn secondary" onClick={() => window.history.back()}>
              ⬅️ Go Back
            </button>
          </div>
        </div>

        <div className="security-info">
          <h3>🔒 Security Information</h3>
          <div className="security-grid">
            <div className="security-item">
              <span className="security-label">Status:</span>
              <span className="security-value error">UNAUTHORIZED</span>
            </div>
            <div className="security-item">
              <span className="security-label">Threat Level:</span>
              <span className="security-value warning">MEDIUM</span>
            </div>
            <div className="security-item">
              <span className="security-label">Response:</span>
              <span className="security-value success">CONTAINED</span>
            </div>
            <div className="security-item">
              <span className="security-label">Action:</span>
              <span className="security-value info">REDIRECT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
