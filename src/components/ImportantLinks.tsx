import React from 'react';
import SectionContainer from './SectionContainer';
import MHSSLogo from '../assets/mhss.png';
import SSCLogo from '../assets/SSC.jpg';
import BIPALogo from '../assets/BIPA-LOGO-flame-png.png';
import NamRALogo from '../assets/NamRa.png';
import NamfisaLogo from '../assets/Namfisa.png';

const links = [
  {
    name: 'Ministry of Health and Social Services',
    url: 'https://mhss.gov.na/',
    logo: MHSSLogo,
  },
  {
    name: 'Social Security Commission (SSC)',
    url: 'https://www.ssc.org.na/',
    logo: SSCLogo,
  },
  {
    name: 'Business and Intellectual Property Authority (BIPA)',
    url: 'https://www.bipa.na/',
    logo: BIPALogo,
  },
  {
    name: 'Namibia Revenue Agency (NamRA)',
    url: 'https://www.namra.org.na/',
    logo: NamRALogo,
  },
  {
    name: 'Namibia Financial Institutions Supervisory Authority (NAMFISA)',
    url: 'https://www.namfisa.com.na/',
    logo: NamfisaLogo,
  },
];

const ImportantLinks: React.FC = () => {
  return (
    <SectionContainer title="Important links" background="gray">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-3 bg-white rounded-lg border border-secondary-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="h-12 w-full flex items-center justify-center mb-2">
              <img
                src={link.logo}
                alt={link.name}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
            </div>
            <span className="text-[10px] font-bold text-text-heading group-hover:text-primary transition-colors leading-tight line-clamp-2">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ImportantLinks;
