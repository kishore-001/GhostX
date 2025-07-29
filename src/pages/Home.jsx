"use client"

import { useState, useEffect } from "react"
import "../css/Home.css"

const Home = () => {
  const [currentThreat, setCurrentThreat] = useState(0)
  const [typedText, setTypedText] = useState("")

  const threats = ["Malware Detection", "Phishing Protection", "Network Security", "Data Encryption"]

  const welcomeText = "Welcome to Cyber Security Portal"

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThreat((prev) => (prev + 1) % threats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < welcomeText.length) {
        setTypedText(welcomeText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="terminal">
          <div className="terminal-header">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
            <span className="terminal-title">cybersec@portal:~$</span>
          </div>
          <div className="terminal-body">
            <h1 className="typed-text">🚀 {typedText}</h1>
            <p className="prompt">
              <span className="user">root@security:</span>
              <span className="path">~#</span> Stay Anonymous. Stay Secure.
            </p>
            <p className="glow"># {threats[currentThreat]} | Active Monitoring | Real-time Defense</p>
            <div className="description">
              <p>Advanced cybersecurity solutions for the modern digital landscape.</p>
              <p>Protecting your digital assets with cutting-edge technology.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Security Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Threat Detection</h3>
            <p>Real-time monitoring and detection of potential security threats using advanced AI algorithms.</p>
            <div className="feature-stats">
              <span className="stat">99.9% Detection Rate</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Data Encryption</h3>
            <p>Military-grade encryption protocols to secure your sensitive data and communications.</p>
            <div className="feature-stats">
              <span className="stat">AES-256 Encryption</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Network Security</h3>
            <p>Comprehensive network protection with firewall management and intrusion prevention.</p>
            <div className="feature-stats">
              <span className="stat">24/7 Monitoring</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Security Analytics</h3>
            <p>Advanced analytics and reporting to track security metrics and incident response.</p>
            <div className="feature-stats">
              <span className="stat">Real-time Reports</span>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2 className="section-title">Security Statistics</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">1,247,892</div>
            <div className="stat-label">Threats Blocked</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.98%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Protected Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
