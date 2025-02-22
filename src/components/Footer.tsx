import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
          <div className="space-y-4 md:px-5">
            <img
              src="./tyl.png"
              alt=""
              className="md:h-12 h-12 object-cover  "
            />
            <p className="text-sm font-aeonik ">
              Building safer, more resilient digital ecosystems <br /> across
              Africa and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-nouvelr">Quick Links</h4>
            <ul className="space-y-2 font-aeonik">
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-do"
                  className="hover:text-accent transition-colors"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-accent transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/who-we-serve"
                  className="hover:text-accent transition-colors"
                >
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-nouvelr">
              Contact Info
            </h4>
            <ul className="space-y-2 font-aeonik">
              <li>Email: info@trustedtechafrica.com</li>
              <li>Phone: +234 703 839 2825</li>
              <li>Address: 147, Akowonjo Road, Lagos, Nigeria.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-nouvelr">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center font-aeonik">
          <p>
            &copy; {new Date().getFullYear()} TrustedTech Africa. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
