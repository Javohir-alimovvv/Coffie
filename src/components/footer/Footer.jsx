import React from 'react'
import "./Footer.scss"
import { Link } from "react-router-dom"
import footerLogo from "../../assets/images/Logo.png"


const Footer = () => {
  return (
    <>

      <footer>
        <div className="container">
          <div className="footer">
            <Link>
              <img src={footerLogo} alt="" />
            </Link>
            
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer