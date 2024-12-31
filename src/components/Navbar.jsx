import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex items-center">
                {/* <p className="mx-2 text-3xl cursor-default">VW</p> */}
            </div>
            <div className="flex items-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/viraj-wasnik-1b1945216"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin style={{ cursor: 'pointer' }} />
                </a>
                <a
                    href="https://github.com/veeraj2404"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub style={{ cursor: 'pointer' }} />
                </a>
                {/* <a
                    href="https://www.linkedin.com/in/viraj-wasnik-1b1945216"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram style={{ cursor: 'pointer' }} />
                </a>
                <a
                    href="https://www.linkedin.com/in/viraj-wasnik-1b1945216"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaSquareXTwitter style={{ cursor: 'pointer' }} />
                </a> */}
            </div>
        </nav>
    );
}
