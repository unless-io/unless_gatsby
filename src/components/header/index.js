import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="header-wrapper">
    <header>
      <div className="left">
        <Link aria-label="Home link" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.52 47.71" width="170">
            <path
              d="M2.61,1.71H20.25L18.41,9.63H15.06L10.85,27.77a12.91,12.91,0,0,0-.34,4.48A6.09,6.09,0,0,0,11.63,35a5.06,5.06,0,0,0,2.13,1.67,8,8,0,0,0,3,.52,8.94,8.94,0,0,0,3-.48,6.2,6.2,0,0,0,2.4-1.58,10.38,10.38,0,0,0,1.89-2.92,23.58,23.58,0,0,0,1.43-4.45L29.68,9.63H25.73l1.84-7.92H45.22L43.4,9.63H39.65L35.19,29.07a31.66,31.66,0,0,1-2.8,7.83,18.24,18.24,0,0,1-4.24,5.36,15.93,15.93,0,0,1-5.69,3.07,24.67,24.67,0,0,1-7.17,1,17.65,17.65,0,0,1-6-1,14,14,0,0,1-4.7-2.71,11.21,11.21,0,0,1-3-4.21A15.77,15.77,0,0,1,.43,33.19a22,22,0,0,1,.56-6L5.09,9.63H.76Z"
              fill="#f73859"
            />
            <path
              d="M44.7,15.55H59.87L59.4,18v0a17.41,17.41,0,0,1,2.69-1.68,14.9,14.9,0,0,1,2.85-1.08,11.77,11.77,0,0,1,3-.39,10.63,10.63,0,0,1,4.38.84,7.35,7.35,0,0,1,3,2.39,8.42,8.42,0,0,1,1.43,3.82A14.22,14.22,0,0,1,76.41,27L74,37.52h5.45L77.6,45.41H62.29l3.72-16a6.19,6.19,0,0,0,.16-2,4.15,4.15,0,0,0-.47-1.55,2.42,2.42,0,0,0-1-1,2.87,2.87,0,0,0-1.42-.35,8.36,8.36,0,0,0-3.64,1.13,15.11,15.11,0,0,0-2.33,1.5L53.09,45.41H43l5.07-22H42.85Z"
              fill="#f73859"
            />
            <path
              d="M87.26.55H102.8l-8.54,37h5.45l-1.82,7.89H82.64l8.54-37H85.44Z"
              fill="#f73859"
            />
            <path
              d="M113.06,32.73a7.25,7.25,0,0,0,.23,1.33,4.74,4.74,0,0,0,1,1.91,4.64,4.64,0,0,0,1.77,1.3,6.57,6.57,0,0,0,2.65.48,9.31,9.31,0,0,0,2.12-.23,9.47,9.47,0,0,0,1.83-.65,10.45,10.45,0,0,0,1.66-1,19.85,19.85,0,0,0,1.57-1.27l6.34,5.57a17.93,17.93,0,0,1-6.71,4.57,22.76,22.76,0,0,1-8.19,1.45,15,15,0,0,1-5.31-.92,12.69,12.69,0,0,1-4.32-2.64,12.47,12.47,0,0,1-2.93-4.16A13.54,13.54,0,0,1,103.66,33a18.26,18.26,0,0,1,1.49-7.5A17.65,17.65,0,0,1,115,16a18.76,18.76,0,0,1,7-1.31,13.62,13.62,0,0,1,5.36,1,13.4,13.4,0,0,1,4.23,2.73,12.74,12.74,0,0,1,2.77,4,11.45,11.45,0,0,1,1,4.67c0,.38,0,.82-.06,1.3s-.09,1-.17,1.48-.17,1-.29,1.52-.24,1-.37,1.38Zm1.24-6.92a2.49,2.49,0,0,0-.2.4h12.48a3.46,3.46,0,0,0-.5-1.51,4.9,4.9,0,0,0-1.19-1.31,6,6,0,0,0-1.72-.94,6.48,6.48,0,0,0-2.21-.36,8.65,8.65,0,0,0-2.75.43,7,7,0,0,0-2.31,1.26A6.07,6.07,0,0,0,114.3,25.81Z"
              fill="#f73859"
            />
            <path
              d="M155.5,22.58a6.77,6.77,0,0,0-3.06-.61,8.76,8.76,0,0,0-1.48.13,4.56,4.56,0,0,0-1.23.41,2.33,2.33,0,0,0-.82.69,1.62,1.62,0,0,0-.3,1,1.48,1.48,0,0,0,.36.89,2.34,2.34,0,0,0,1.37.69l4.73,1a13.49,13.49,0,0,1,3.77,1.38,9.47,9.47,0,0,1,2.54,2.05,7.65,7.65,0,0,1,1.43,2.47,8,8,0,0,1,.44,2.61A9.92,9.92,0,0,1,162,40.33a10.19,10.19,0,0,1-3.18,3.41,13.82,13.82,0,0,1-4.46,1.95,20.71,20.71,0,0,1-5,.62,16.53,16.53,0,0,1-6.75-1.15,7.84,7.84,0,0,1-2.31-1.65h-4.75l1.81-7.9H146a4.57,4.57,0,0,0,0,1.8,2.1,2.1,0,0,0,.65,1,3.16,3.16,0,0,0,1.24.68,5.6,5.6,0,0,0,1.7.23,6,6,0,0,0,3.16-.72,2.17,2.17,0,0,0,1.16-1.93,1.7,1.7,0,0,0-.51-1.24,4.35,4.35,0,0,0-1.91-.89l-3.77-1a12.84,12.84,0,0,1-3.59-1.45A10.62,10.62,0,0,1,141.52,30a8.74,8.74,0,0,1-1.58-2.64,8.63,8.63,0,0,1,.55-7.16,9.23,9.23,0,0,1,2.93-3.07,14,14,0,0,1,4.24-1.85,20.11,20.11,0,0,1,5-.62,17.45,17.45,0,0,1,3.51.33,13.34,13.34,0,0,1,2.84.91,11,11,0,0,1,1.29.66h6.06l-1.85,7.9h-7.78A2.22,2.22,0,0,0,155.5,22.58Z"
              fill="#f73859"
            />
            <path
              d="M184.85,22.58a6.77,6.77,0,0,0-3.06-.61,8.76,8.76,0,0,0-1.48.13,4.56,4.56,0,0,0-1.23.41,2.33,2.33,0,0,0-.82.69,1.62,1.62,0,0,0-.3,1,1.48,1.48,0,0,0,.36.89,2.34,2.34,0,0,0,1.37.69l4.73,1a13.49,13.49,0,0,1,3.77,1.38,9.47,9.47,0,0,1,2.54,2.05,7.65,7.65,0,0,1,1.43,2.47,8,8,0,0,1,.45,2.61,9.93,9.93,0,0,1-1.22,5.06,10.19,10.19,0,0,1-3.18,3.41,13.82,13.82,0,0,1-4.46,1.95,20.71,20.71,0,0,1-5,.62A16.53,16.53,0,0,1,172,45.16a7.84,7.84,0,0,1-2.31-1.65h-4.75l1.81-7.9h8.62a4.57,4.57,0,0,0,0,1.8,2.1,2.1,0,0,0,.65,1,3.16,3.16,0,0,0,1.24.68,5.6,5.6,0,0,0,1.7.23,6,6,0,0,0,3.16-.72,2.18,2.18,0,0,0,1.17-1.93,1.71,1.71,0,0,0-.52-1.24,4.35,4.35,0,0,0-1.91-.89l-3.77-1a12.84,12.84,0,0,1-3.59-1.45A10.62,10.62,0,0,1,170.87,30a8.74,8.74,0,0,1-1.58-2.64,8.63,8.63,0,0,1,.55-7.16,9.23,9.23,0,0,1,2.93-3.07A14,14,0,0,1,177,15.27a20.11,20.11,0,0,1,5-.62,17.45,17.45,0,0,1,3.51.33,13.34,13.34,0,0,1,2.84.91,11,11,0,0,1,1.29.66h6.06l-1.85,7.9h-7.78A2.22,2.22,0,0,0,184.85,22.58Z"
              fill="#f73859"
            />
          </svg>
        </Link>
        <p>
          Development & design. <br />
          Amsterdam, by Lars Böhm
        </p>
        <a href="mailto:info@unless.io">info@unless.io</a>
      </div>
      <div className="right">
        <nav>
          <ol>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/portfolio" activeClassName="active">Portfolio</Link>
            </li>
          </ol>
        </nav>
        <Link to="/contact" className="contact-button">
          <span>Contact</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
