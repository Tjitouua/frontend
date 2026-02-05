import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Share2, Printer, Mail } from 'lucide-react';
import SectionContainer from '../components/SectionContainer';

// Import assets
import CTImage from '../assets/CT.png';
import RNImage from '../assets/RN.png';
import GeneralImage from '../assets/General.png';

interface ArticleData {
  title: string;
  image: string;
  description: string;
}

const articleData: Record<string, ArticleData> = {
  'current-topics': {
    title: 'Current topics',
    image: CTImage,
    description: 'Stay updated with the latest developments and initiatives across Namibia. This section provides information on ongoing projects, national campaigns, and important updates that affect citizens and businesses.'
  },
  'republic-of-namibia': {
    title: 'Republic of Namibia',
    image: RNImage,
    description: 'Learn about the governance, history, and symbols of the Republic of Namibia. This section includes information on national holidays, the constitution, and the structure of our government.'
  },
  'legal-advice': {
    title: 'Legal advice',
    image: GeneralImage,
    description: 'Access information on legal rights, obligations, and where to find legal assistance in Namibia. We provide guidance on common legal processes and consumer rights.'
  },
  'consumer-protection': {
    title: 'Consumer protection',
    image: GeneralImage,
    description: 'Information on your rights as a consumer and how to report unfair business practices. Learn about the regulations that protect you in the Namibian marketplace.'
  },
  'environment-protection': {
    title: 'Environment protection',
    image: GeneralImage,
    description: 'Discover Namibia\'s initiatives for environmental conservation and sustainable development. Information on waste management, wildlife protection, and how you can contribute to a greener Namibia.'
  },
  'cyber-security': {
    title: 'Cyber security',
    image: GeneralImage,
    description: 'Essential tips and resources for staying safe online. Learn how to protect your personal information, recognize cyber threats, and report online fraud.'
  },
  'registers-and-databases': {
    title: 'Registers and databases',
    image: GeneralImage,
    description: 'Access various national registers and public databases. This section helps you find information on business registrations, population data, and other public records.'
  }
};

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? articleData[slug] : null;

  if (!data) {
    return (
      <SectionContainer>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">Return home</Link>
        </div>
      </SectionContainer>
    );
  }

  return (
    <main className="w-full bg-white min-h-screen">
      {/* Hero/Image Section */}
      <div className="w-full overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full object-cover max-h-[400px]"
        />
      </div>

      <SectionContainer>
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="hover:text-primary transition-colors cursor-pointer">General information</span>
          <ChevronRight size={14} />
          <span className="font-medium text-text-heading">{data.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
              {data.title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-text-DEFAULT leading-relaxed">
              <p className="text-xl mb-8 font-medium">
                {data.description}
              </p>
              
              <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">Detailed Information</h2>
              <p className="mb-6">
                This page is a placeholder for the "{data.title}" section. In the full implementation, this section will contain detailed articles, downloadable resources, and links to relevant government services.
              </p>
              
              <div className="bg-secondary p-6 rounded-lg border border-secondary-border mb-8">
                <h3 className="text-lg font-bold text-text-heading mb-3 italic">Did you know?</h3>
                <p className="text-sm">
                  The National Portal aims to provide easy access to all government information and services in one centralized location.
                </p>
              </div>
            </div>

            {/* Utility buttons */}
            <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-secondary-border">
              <button className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                <Share2 size={18} />
                Share
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                <Printer size={18} />
                Print
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                <Mail size={18} />
                Send by email
              </button>
            </div>
          </div>

          {/* Right Sidebar for related links */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-secondary rounded-xl p-6 border border-secondary-border">
                <h3 className="font-bold text-text-heading mb-4 uppercase text-xs tracking-widest">
                  Related Topics
                </h3>
                <ul className="space-y-3">
                  {Object.entries(articleData)
                    .filter(([key]) => key !== slug)
                    .slice(0, 5)
                    .map(([key, item]) => (
                      <li key={key}>
                        <Link 
                          to={`/articles/${key}`} 
                          className="text-primary hover:underline text-sm font-medium flex items-center gap-2 group"
                        >
                          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          {item.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="mt-6 bg-primary-dark rounded-xl p-6 text-white shadow-lg">
                <h3 className="font-bold mb-3">Need Help?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  If you can't find the information you're looking for, our support team is here to help.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-primary hover:bg-primary-dark border border-primary text-white font-bold py-2 px-4 rounded text-sm transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default ArticlePage;
