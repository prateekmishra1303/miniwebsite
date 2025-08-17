import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
         <footer className="bg-gray-100 text-gray-700 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Links on Right */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 text-sm text-gray-700">

            {/* Connect Links */}
              <div>
                <h4 className="text-base font-semibold mb-3 text-gray-800">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/prateekmishra1303" target="_blank" rel="noopener noreferrer">
                    <img src="https://camo.githubusercontent.com/4374f0b29a45f7d158ec8fe94398eb90f4ac94c03d6b99346b99e916e5157cb9/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f706e672f6769746875622e706e67" alt="GitHub" className="h-6 w-6 hover:scale-110 transition" />
                  </a>
                  <a href="https://www.linkedin.com/in/prateek-mishra-5a267020b" target="_blank" rel="noopener noreferrer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR703fQWXPUrojCTTS5Z5XcLZCcuDIyl_295g&s" alt="LinkedIn" className="h-6 w-6 hover:scale-110 transition" />
                  </a>
                  <a href="https://discordapp.com/users/your-discord-id" target="_blank" rel="noopener noreferrer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADVqFeHWyJFbNr6KYiO__0GXxhRJ0S3rUWg&s" alt="Discord" className="h-6 w-6 hover:scale-110 transition" />
                  </a>
                  <a href="mailto:prateekmishra1303@gmail.com?subject=Hello%20Prateek&body=Hi%20there,">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCe8PumZ5jhEGolAsIG_iv2LKJ6OBsw0V4Q&s"
                        alt="Email"
                        className="h-6 w-6 hover:scale-110 transition" />
                  </a>
                </div>
              </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Prateek Mishra. Made with ❤️ and adrak wali chai.
        </div>
      </div>
    </footer>
    );
}