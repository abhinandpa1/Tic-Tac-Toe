import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter bgColor='dark' className='text-center text-lg-left custom-footer'>
        <div
          className='text-center p-3'
          style={{
            backgroundColor: 'rgba(255, 42, 104, 0.3)', // Semi-transparent Spider-Man red background
            color: '#f5f5f5', // Light gray text for contrast
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          &copy; {new Date().getFullYear()} Fun Copyright:{' '}
          <a
            className='text-dark'
            href='https://mdbootstrap.com/'
            style={{
              color: '#ff2a68', // Spider-Man red color for the link
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            panju.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;

