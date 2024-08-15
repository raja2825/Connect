
import './Footer.css'; // Ensure you create this CSS file

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-form" style={{ paddingLeft: '80px', width: '200px' }}>
          <h2>Customer Care</h2>
          <a href="about.html"><p className="footer-link">About Us</p></a>
          <a href="#"><p className="footer-link">Delivery Information</p></a>
          <a href="#"><p className="footer-link">Privacy Policy</p></a>
          <a href="#"><p className="footer-link">Terms & Conditions</p></a>
          <a href="#"><p className="footer-link">Contact Us</p></a>
        </div>
        <div className="footer-form" style={{ paddingLeft: '100px', width: '280px' }}>
          <h2>Quick Links</h2>
          <a href="login.html"><p className="footer-link">Sign In</p></a>
          <a href="shop.html"><p className="footer-link">View Cart</p></a>
          <a href="#"><p className="footer-link">My Wishlist</p></a>
          <a href="help.html"><p className="footer-link">Help</p></a>
        </div>
        <div className="footer-form" style={{ width: '430px' }}>
          <h2>Contact</h2>
          <p><b>Address: </b>562, Canal Mountain Road, Street 10, India</p>
          <p><b>Phone: </b>(+91) 8144380730</p>
          <p><b>Hours: </b>10.00-18.00 Mon-Sat</p>
        </div>
        <div className="footer-form social-links" style={{ width: '300px' }}>
          <h2>Follow Us On!</h2>
          <div className='icons'>
         <i className='fa-brands fa-twitter'></i>
         <i className='fa-brands fa-instagram'></i>
         <i className='fa-brands fa-facebook'></i>
         <i className='fa-brands fa-linkedin'></i>
         <i className='fa-brands fa-youtube'></i>
         </div>
        </div>
      </div>
      <p className="footer-bottom" style={{ textAlign: 'center' }}>
        &copy; 2024 Sustainable. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
