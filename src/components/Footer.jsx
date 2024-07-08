import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components
const FooterContainer = styled.div`
   h1 {
      margin-right: 3rem;
      font-size: 2rem;
      font-weight: 800;
      margin-top: auto;
      margin-bottom: auto;
      color: #1a202c;
    }
  @media (min-width: 768px) {
    display: flex;
    min-height: 104px;
    background-color: #f3f4f6;
    margin-top: 6px;
    align-items: center;
    justify-content: center;

 

    .footer-links {
      display: flex;
      justify-content: center;
      align-items: center;
      // margin: auto;
      gap: 1.25rem;
      height: 4rem;
    }
  }
`;

const FooterSection = styled.footer`
  background-color: #02060c;
  color: white;
  padding: 3rem 2rem;
  
  @media (min-width: 768px) {
    padding: 3rem 8rem;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
    h4, ul>li{
    font-size: 1.5rem;
    }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    color: #d1d5db;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const AppImage = styled.img`
  width: 150px; /* Adjust as needed */
  height: auto;
`;

// Functional component
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <h1>For better experience, download our app now</h1>
        <div className="footer-links">
          <AppImage src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="googleplay" />
          <AppImage src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="appstore" />
        </div>
      </FooterContainer>

      <FooterSection>
        <div className="container">
          <div>
            <h2>Smile Shop</h2>
            <h4>© 2024 made By Shubham</h4>
          </div>

          <div>
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="https://github.com/Shubhamphadtare11" target="_blank">About</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Team</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <Link to="#">Help & Support</Link>
              </li>
              <li>
                <Link to="#">Partner with us</Link>
              </li>
              <li>
                <Link to="#">Ride with us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>We deliver to:</h2>
            <ul>
              <li>
                <Link to="#">Bangalore</Link>
              </li>
              <li>
                <Link to="#">Delhi</Link>
              </li>
              <li>
                <Link to="#">Kolkata</Link>
              </li>
              <li>
                <Link to="#">Mumbai</Link>
              </li>
              <li>
                <Link to="#">Ahmedabad</Link>
              </li>
              <li>
                <Link to="#">Pune</Link>
              </li>
            </ul>
          </div>
        </div>
      </FooterSection>
    </>
  );
}

export default Footer;
