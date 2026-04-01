import React from 'react'

const Footer = () => {
  const links = {
    Product: ['Features', 'Pricing', 'Templates', 'Integrations'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
  }

  return (
    <footer className="bg-[#0d1117] text-gray-400 px-6 md:px-12 lg:px-16 pt-12 md:pt-16 pb-8">

    
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">

     
        <div className="max-w-xs">
          <h2 className="text-white text-3xl font-bold mb-3">DigiTools</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

    
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-16">

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">{title}</h3>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

       
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">Social Links</h3>
            <div className="flex gap-2">

         
              <a href="#" className="btn btn-circle btn-sm bg-[#1a202c] border-none hover:bg-[#2d3748]">
                <svg width="15" height="15" fill="white" viewBox="0 0 24 24">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                </svg>
              </a>

           
              <a href="#" className="btn btn-circle btn-sm bg-[#1a202c] border-none hover:bg-[#2d3748]">
                <svg width="15" height="15" fill="white" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

       
              <a href="#" className="btn btn-circle btn-sm bg-[#1a202c] border-none hover:bg-[#2d3748]">
                <svg width="13" height="13" fill="white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>

    
      <div className="divider divider-neutral opacity-30"></div>

   
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-600">© 2026 Digitools. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookies'].map(item => (
            <a key={item} href="#" className="text-xs text-gray-600 hover:text-white transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer