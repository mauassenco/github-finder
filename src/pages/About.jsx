import React from "react"

const About = () => {
  return (
    <>
      <h1 className="mb-4 text-6xl">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
        <strong>
          <p>
            <a
              href="https://mauricioassenco.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Mauricio Assenco
            </a>
          </p>
        </strong>
        .
      </p>
    </>
  )
}

export default About
