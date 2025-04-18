import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/jatapsilver"},
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/javierplatadev"},
    { icon: <FaInstagram />, path: "https://www.instagram.com/jatapsilver/"},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
    )
};

export default Social;