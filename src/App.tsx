import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AccessibilityPage from './pages/AccessibilityPage';
import ServiceCataloguePage from './pages/ServiceCataloguePage';
import PlaceholderPage from './pages/PlaceholderPage';
import ScrollToTop from './components/ScrollToTop';
import AuthenticationPage from './pages/AuthenticationPage';
import LoadingScreen from './components/LoadingScreen';
import EntrepreneurHomePage from './pages/EntrepreneurHomePage';
import DisabilityPensionPage from './pages/DisabilityPensionPage';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading or wait for resources
    // The LoadingScreen component handles the minimum display time
    setIsLoading(false);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <ScrollToTop />
      <Routes>
        {/* Standalone pages */}
        <Route path="/login" element={<AuthenticationPage />} />
        <Route path="/auth/self-service" element={<PlaceholderPage title="Self-service for State Authentication" />} />
        <Route path="/auth/about" element={<PlaceholderPage title="About State Authentication Service" />} />
        
        {/* Pages with standard Layout */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/citizen" element={<HomePage />} />
              <Route path="/about" element={<PlaceholderPage title="About the National Portal" />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Use" />} />
              <Route path="/cookies" element={<PlaceholderPage title="Cookies Policy" />} />
              <Route path="/faq" element={<PlaceholderPage title="Frequently Asked Questions" />} />
              <Route path="/announcements/:id" element={<PlaceholderPage title="Announcement Details" />} />
              <Route path="/announcements/category/:category" element={<PlaceholderPage title="Announcement Category" />} />

              <Route path="/services/disability-pension" element={<DisabilityPensionPage />} />
              
              {/* Sidebar Article Links */}
              <Route path="/articles/current-topics" element={<PlaceholderPage title="Current Topics" />} />
              <Route path="/articles/republic-of-namibia" element={<PlaceholderPage title="Republic of Namibia" />} />
              <Route path="/articles/legal-advice" element={<PlaceholderPage title="Legal Advice" />} />
              <Route path="/articles/consumer-protection" element={<PlaceholderPage title="Consumer Protection" />} />
              <Route path="/articles/environment-protection" element={<PlaceholderPage title="Environment Protection" />} />
              <Route path="/articles/cyber-security" element={<PlaceholderPage title="Cyber Security" />} />
              <Route path="/articles/registers-and-databases" element={<PlaceholderPage title="Registers and Databases" />} />

              {/* Citizen Routes */}
              <Route path="/citizen/health" element={<PlaceholderPage title="Health" />} />
              <Route path="/citizen/social" element={<PlaceholderPage title="Social protection services" />} />
              <Route path="/citizen/home" element={<PlaceholderPage title="Home affairs services" />} />
              <Route path="/citizen/work" element={<PlaceholderPage title="Work and labor relations" />} />
              <Route path="/citizen/documents" element={<PlaceholderPage title="Citizenship and documents" />} />
              <Route path="/citizen/naTIS" element={<PlaceholderPage title="NaTIS" />} />
              <Route path="/citizen/education" element={<PlaceholderPage title="Education" />} />
              <Route path="/citizen/money" element={<PlaceholderPage title="Money and property" />} />
              <Route path="/citizen/culture" element={<PlaceholderPage title="Culture and Leisure" />} />
              <Route path="/citizen/accommodation" element={<PlaceholderPage title="Accommodation" />} />
              <Route path="/citizen/security" element={<PlaceholderPage title="Security and defence" />} />

              {/* Entrepreneur Routes */}
              <Route path="/entrepreneur/registration" element={<PlaceholderPage title="Business Registration" />} />
              <Route path="/entrepreneur/taxes" element={<PlaceholderPage title="Taxes" />} />
              <Route path="/entrepreneur/procurement" element={<PlaceholderPage title="Procurement" />} />
              <Route path="/entrepreneur/compliance" element={<PlaceholderPage title="Compliance" />} />
              <Route path="/entrepreneur/waiver" element={<PlaceholderPage title="Waiver" />} />
              <Route path="/entrepreneur/good-standing" element={<PlaceholderPage title="Good Standing" />} />
              <Route path="/entrepreneur/intellectual-property" element={<PlaceholderPage title="Intellectual property" />} />
              <Route path="/entrepreneur/law-reform" element={<PlaceholderPage title="Law Reform" />} />

              <Route path="/help" element={<PlaceholderPage title="Help using the National Portal" />} />
              <Route path="/user-support" element={<PlaceholderPage title="User Support" />} />
              <Route path="/feedback" element={<PlaceholderPage title="Give Feedback" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
              <Route path="/entrepreneur" element={<EntrepreneurHomePage />} />
              <Route path="/entrepreneur/dashboard" element={<PlaceholderPage title="Entrepreneur's Dashboard" />} />
              <Route path="/entrepreneur/authorisations" element={<PlaceholderPage title="Authorisations" />} />
              <Route path="/entrepreneur/mailbox" element={<PlaceholderPage title="Mailbox" />} />
              <Route path="/entrepreneur/wages" element={<PlaceholderPage title="Vacation pay and average wages" />} />
              <Route path="/entrepreneur/health-insurance" element={<PlaceholderPage title="Health insurance of employees" />} />
              <Route path="/entrepreneur/notary" element={<PlaceholderPage title="Notarised documents" />} />
              <Route path="/entrepreneur/population" element={<PlaceholderPage title="Population Register queries" />} />
              
              <Route path="/self-service" element={<PlaceholderPage title="Self-Service Environment" />} />
              
              {/* Support existing links from components */}
              <Route path="/login/entrepreneur" element={<PlaceholderPage title="Entrepreneur Login" />} />
              <Route path="/catalog" element={<ServiceCataloguePage />} />
              <Route path="/catalog/category/:id" element={<PlaceholderPage title="Service Category" />} />
              <Route path="/service-catalogue" element={<ServiceCataloguePage />} />
              <Route path="/service/:id" element={<PlaceholderPage title="Service Detail" />} />
              
              {/* Fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </>
  );
};

export default App;
