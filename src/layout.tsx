import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";


// Header
const MenuItem = ({ to, text, className }: { to: string, text: string, className?: string }) => (
  <Link to={to} className={`hover:text-black ${className}`}>
    {text}
  </Link>
);

const DropdownMenuItem = ({ to, text }: { to: string, text: string }) => (
  <div className="block">
    <Link to={to} className="hover:bg-gray-300 block ml-2 mr-2">{text}</Link>
  </div>
);

const ShoppingCart = () => (
  <div className="relative mb-8">
    <div className="absolute flex items-center justify-center bg-white rounded-sm p-1">
      <FaCartShopping className="text-orange-500" />
      <span className="text-orange-500 ml-1">0</span>
    </div>
  </div>
);

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <MenuItem to="/" text="Electrician" className="text-2xl font-bold" />
        <nav className="space-x-4 flex items-center">
          <MenuItem to="/" text="Home" />
          <div
            className="relative inline-block"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <MenuItem to="/blog" text="Blog" />
            {showDropdown && (
              <div
                className="absolute top-full left-0 bg-white text-black z-10 py-2 w-36 rounded-lg shadow-lg"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <DropdownMenuItem to="/tech" text="Tech" />
                <DropdownMenuItem to="/sport" text="Sport" />
                <DropdownMenuItem to="/fashion" text="Fashion" />
              </div>
            )}
          </div>
          <MenuItem to="/category" text="Category" />
          <MenuItem to="/product" text="Product" />
          <MenuItem to="/login" text="Login" />
          <MenuItem to="/customer" text="Customer" />
          <ShoppingCart />
        </nav>
      </div>
    </header>
  );
};



// Footer
const FooterAbout = ({ title, content }: { title: string, content: React.ReactNode }) => (
  <div className="mb-4">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <p className="text-slate-400">{content}</p>
  </div>
);

const FooterContact = ({subtitle, content}: {subtitle: string, content: string }) => (
  <div className="mb-2">
    <p>{subtitle}</p>
    <p className="text-slate-400">{content}</p>
  </div>
);

const FooterCustomer = ({ content }: { content: string }) => (
  <div className="text-slate-400 mb-2">
    <a href="/">{content}</a>
  </div>
);

const FooterTag = ({ tag }: { tag: string }) => (
  <div className="inline-block outline text-slate-400 p-2 mb-4 mr-4">
    <a href="/">{tag}</a>
  </div>
);


const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
      <FooterAbout
        title="About Us"
        content={
          <>
            Electrician <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.
          </>
        }
      />

      <div>
      <h2 className="text-lg font-bold mb-2">Contact Info</h2>
      <FooterContact
        subtitle="Address:"
        content="123 Street Name, City, England"
      />
      <FooterContact
        subtitle="Phone:"
        content="(123) 456-7890"
      />
      <FooterContact
        subtitle="Email:"
        content="mail@example.com"
      />
      <FooterContact
        subtitle="Working Days/Hours:"
        content="Mon - Sun / 9:00 AM - 8:00 PM"
      />
      </div>

      <div>
      <h2 className="text-lg font-bold mb-2">CUSTOMER SERVICE</h2>
      <FooterCustomer content="Help & FAQs" />
      <FooterCustomer content="Order Tracking" />
      <FooterCustomer content="Shipping & Delivery" />
      <FooterCustomer content="Orders History" />
      <FooterCustomer content="Advanced Search" />
      <FooterCustomer content="Corporate Sales" />
      <FooterCustomer content="Privacy" />
      </div>

      <div>
      <h2 className="text-lg font-bold mb-2">CUSTOMER SERVICE</h2>
      <FooterTag tag="Bag" />
      <FooterTag tag="Black" />
      <FooterTag tag="Blue" />
      <FooterTag tag="Clothes" />
      <FooterTag tag="Fashion" />
      </div>
      
    </div>
  </footer>
);



const Layout: React.FC = () => (
  <>
    <Header />
    <main> <Outlet /> </main>
    <Footer />
  </>
);

export default Layout;
