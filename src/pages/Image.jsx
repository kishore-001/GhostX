"use client"

import { useState } from "react"
import "../css/Image.css"

const Image = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Network Security Visualization",
      category: "network",
      title: "Network Security Map",
      description: "Real-time visualization of network traffic and security threats",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Data Encryption",
      category: "encryption",
      title: "Encryption Matrix",
      description: "Advanced encryption algorithms protecting sensitive data",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Malware Detection",
      category: "malware",
      title: "Threat Detection Dashboard",
      description: "AI-powered malware detection and analysis system",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Firewall Interface",
      category: "network",
      title: "Firewall Management",
      description: "Comprehensive firewall configuration and monitoring",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Security Analytics",
      category: "analytics",
      title: "Security Analytics",
      description: "Advanced security metrics and threat intelligence",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Penetration Testing",
      category: "testing",
      title: "Penetration Testing Suite",
      description: "Comprehensive security testing and vulnerability assessment",
    },
  ]

  const categories = [
    { id: "all", name: "All Images" },
    { id: "network", name: "Network Security" },
    { id: "encryption", name: "Encryption" },
    { id: "malware", name: "Threat Detection" },
    { id: "analytics", name: "Analytics" },
    { id: "testing", name: "Testing" },
  ]

  const filteredImages = selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)

  return (
    <div className="image-page">
      <div className="page-header">
        <h1>📸 Cyber Security Gallery</h1>
        <p className="page-subtitle">Explore our collection of cybersecurity visualizations and tools</p>
      </div>

      <div className="filter-section">
        <h3>Filter by Category:</h3>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="images-grid">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-card">
            <div className="image-container">
              <img src={image.src || "/placeholder.svg"} alt={image.alt} />
              <div className="image-overlay">
                <h4>{image.title}</h4>
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-info">
        <h2>About Our Security Visualizations</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>🔍 Threat Intelligence</h3>
            <p>
              Our visualizations provide real-time insights into emerging cyber threats and attack patterns, helping
              security professionals stay ahead of malicious actors.
            </p>
          </div>
          <div className="info-card">
            <h3>📈 Security Metrics</h3>
            <p>
              Advanced analytics dashboards that transform complex security data into actionable intelligence for better
              decision-making.
            </p>
          </div>
          <div className="info-card">
            <h3>🛠️ Security Tools</h3>
            <p>
              Comprehensive suite of cybersecurity tools designed for penetration testing, vulnerability assessment, and
              incident response.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image
