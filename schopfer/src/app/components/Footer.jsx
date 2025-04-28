import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Social + Navigation */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <a href="#" aria-label="Instagram" className="hover:text-black">
              <FaInstagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-black">
              <FaFacebookF size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-black">
              <FaLinkedinIn size={18} />
            </a>
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Case Studies</a></li>
            <li><a href="#" className="hover:text-black">Blogs</a></li>
            <li><a href="#" className="hover:text-black">Contact Us</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-sm font-semibold mb-3">ADDRESS</h4>
          <p className="text-sm text-gray-600">
            
          </p>
        </div>

        {/* Email */}
        <div>
          <h4 className="text-sm font-semibold mb-3">EMAIL</h4>
          <ul className="text-sm space-y-1">
            <li>info@schopferretail.com</li>
            <li>schopfer.retail@gmail.com</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-3">WHATSAPP NUMBER</h4>
          <p className="text-sm mb-4">+91 88673 78930</p>

          <h4 className="text-sm font-semibold mb-3">CALL US</h4>
          <p className="text-sm">+91 88673 78930</p>
        </div>
      </div>

      {/* Optional bottom line */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Schopfer Retail. All rights reserved.
      </div>
    </footer>
  )
}
