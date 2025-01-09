import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdPictureAsPdf } from 'react-icons/md';

export default function Navbar() {
    return (
        <nav className="mb-20 flex justify-end py-6">
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
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => window.open('/Viraj_Wasnik_Resume.pdf')}
                >
                    <MdPictureAsPdf  style={{ cursor: 'pointer' }} />
                </a>
            </div>
        </nav>
    );
}
