import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Sponsor from '../common/Sponsor';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook size={20} />, name: 'Facebook', href: '#' },
    { icon: <FaTwitter size={20} />, name: 'Twitter', href: '#' },
    { icon: <FaInstagram size={20} />, name: 'Instagram', href: '#' },
    { icon: <FaYoutube size={20} />, name: 'YouTube', href: '#' },
  ];

  const footerLinks = [
    { title: 'Sobre Nosotros', href: '#' },
    { title: 'Contacto', href: '#' },
    { title: 'Reglamento', href: '#' },
    { title: 'Política de Privacidad', href: '#' },
  ];

  return (
    <>
    <Sponsor></Sponsor>
    <footer className="bg-[#0f0f0f] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Basket<span className="text-amber-300">Tour</span></h3>
            <p className="text-sm">
              La plataforma definitiva para la gestión de torneos de básquet. Sigue a tu equipo, revisa estadísticas y no te pierdas ningún partido.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-amber-300 transition-colors">
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Navegación</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.slice(0, 2).map((link) => (
                    <li key={link.title}>
                      <a href={link.href} className="text-base hover:text-white transition-colors">{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.slice(2).map((link) => (
                    <li key={link.title}>
                      <a href={link.href} className="text-base hover:text-white transition-colors">{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-base text-center">&copy; {new Date().getFullYear()} Basket Tournament Management. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;