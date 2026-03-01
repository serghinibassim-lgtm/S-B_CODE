import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const languages = ["HTML", "CSS", "JavaScript", "Python"];
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/tonprofil" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/tonprofil" },
    { icon: <FaInstagram />, link: "https://instagram.com/tonprofil" },
    { icon: <FaFacebook />, link: "https://facebook.com/tonprofil" },
    { icon: <FaEnvelope />, link: "mailto:contact@site.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4 text-lg">À propos du site</h3>
          <p className="text-sm mb-2">
            Ce site est dédié à l’apprentissage des langages web et Python pour débutants.
          </p>
          <p className="text-sm">
            Crée par un passionné de développement web et open source.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 text-lg">Langages</h3>
          <ul>
            {languages.map((lang, index) => (
              <li key={index} className="mb-1 hover:text-blue-400 transition">
               <Link to={`/${lang.toLowerCase()}`}>{lang}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 text-lg">Contact & réseaux</h3>
          <ul className="flex gap-4 mb-4">
            {socials.map((social, idx) => (
              <li key={idx} className="hover:text-blue-400 transition text-xl">
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm">Email: contact@site.com</p>
          <p className="text-sm">© 2026 Learn Coding</p>
        </div>
      </div>

    </footer>
  );
}
