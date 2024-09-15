import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.instagram.com/mahir__199/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/mahir-tanzil-rahman/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                    <EmailIcon />
                </a>
                <a href="https://github.com/MahirR199" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </div>
        </div>
    );
}
