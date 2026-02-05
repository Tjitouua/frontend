import React, { useState } from 'react';
import { 
  ChevronDown, 
  ArrowLeft, 
  Lock, 
  CreditCard, 
  Smartphone, 
  Fingerprint, 
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import coatOfArms from '../assets/Coat_of_Arms.png';
import auLogo from '../assets/african union.png';
import namFlag from '../assets/namibia-waving-flag.png';

// Types for our component
type AuthMethod = 'id-card' | 'mobile-id' | 'smart-id';

const AuthenticationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AuthMethod>('id-card');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states for other methods
  const [mobileNumber, setMobileNumber] = useState('');
  const [idNumber, setIdNumber] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would redirect or handle the auth response
      // For now, we'll just show a success state or keep it as is
      alert('Authentication request simulated.');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      {/* Top Bar */}
      <div className="bg-primary-dark text-white py-2 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <Lock className="w-4 h-4" />
          <span className="font-medium text-lg">Secure authentication for e-services</span>
        </div>
        <div className="flex items-center gap-4 text-xs md:text-sm">
          <Link to="/accessibility" className="hover:underline">ACCESSIBILITY</Link>
          <span className="text-gray-400">|</span>
          <button className="font-bold hover:underline">ENGLISH</button>
          <span className="text-gray-400">|</span>
          <button className="hover:underline">AFRIKAANS</button>
          <span className="text-gray-400">|</span>
          <button className="hover:underline">OSHIWAMBO</button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-8 px-4 md:px-16 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={coatOfArms} alt="Coat of Arms of Namibia" className="h-20 w-auto object-contain" />
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
              Gov Authentication Service
            </h1>
            <p className="text-gray-500 text-sm mt-1">Republic of Namibia</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-1 mb-0 px-2">
            <button
              onClick={() => setActiveTab('id-card')}
              className={`flex-1 md:flex-none px-6 py-4 rounded-t-lg font-medium text-sm md:text-base transition-all duration-200 ${
                activeTab === 'id-card'
                  ? 'bg-teal-600 text-white shadow-md transform -translate-y-1 z-10'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
              }`}
            >
              ID-card
            </button>
            <button
              onClick={() => setActiveTab('mobile-id')}
              className={`flex-1 md:flex-none px-6 py-4 rounded-t-lg font-medium text-sm md:text-base transition-all duration-200 ${
                activeTab === 'mobile-id'
                  ? 'bg-teal-600 text-white shadow-md transform -translate-y-1 z-10'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Mobile-ID
            </button>
            <button
              onClick={() => setActiveTab('smart-id')}
              className={`flex-1 md:flex-none px-6 py-4 rounded-t-lg font-medium text-sm md:text-base transition-all duration-200 ${
                activeTab === 'smart-id'
                  ? 'bg-teal-600 text-white shadow-md transform -translate-y-1 z-10'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Smart-ID
            </button>
          </div>

          {/* Content Box */}
          <div className="bg-white rounded-b-lg rounded-tr-lg shadow-xl p-8 md:p-12 min-h-[400px] relative z-0">
            
            {/* ID-card Content */}
            {activeTab === 'id-card' && (
              <div className="animate-fadeIn flex flex-col items-center text-center py-8">
                <div className="bg-blue-50 p-6 rounded-full mb-6">
                  <CreditCard className="w-16 h-16 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Log in with ID-card</h2>
                <p className="text-gray-600 mb-8 max-w-md">
                  Insert your ID card into the card reader and enter your PIN code when prompted.
                </p>
                
                <button 
                  onClick={handleAuth}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2 mb-6"
                >
                  {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : null}
                  Authenticate with ID-card
                </button>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded border border-gray-200">
                  <AlertCircle className="w-4 h-4" />
                  Requires card reader and ID-software
                </div>
              </div>
            )}

            {/* Mobile-ID Content */}
            {activeTab === 'mobile-id' && (
              <div className="animate-fadeIn py-4">
                <div className="flex flex-col items-center mb-8">
                  <div className="bg-blue-50 p-4 rounded-full mb-4">
                    <Smartphone className="w-12 h-12 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Log in with Mobile-ID</h2>
                </div>

                <form onSubmit={handleAuth} className="max-w-md mx-auto space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">+264</span>
                      <input 
                        type="tel" 
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="pl-14 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="81 123 4567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Personal ID Code</label>
                    <input 
                      type="text" 
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter your ID number"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200 flex justify-center items-center gap-2"
                  >
                    {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : null}
                    Continue
                  </button>

                  <p className="text-sm text-center text-gray-500">
                    You will receive a verification code on your mobile phone.
                  </p>
                </form>
              </div>
            )}

            {/* Smart-ID Content */}
            {activeTab === 'smart-id' && (
              <div className="animate-fadeIn py-4">
                <div className="flex flex-col items-center mb-8">
                  <div className="bg-teal-50 p-4 rounded-full mb-4">
                    <Fingerprint className="w-12 h-12 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Log in with Smart-ID</h2>
                </div>

                <form onSubmit={handleAuth} className="max-w-md mx-auto space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Personal ID Code</label>
                    <input 
                      type="text" 
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      placeholder="Enter your ID number"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200 flex justify-center items-center gap-2"
                  >
                    {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : null}
                    Continue
                  </button>

                  <p className="text-sm text-center text-gray-500">
                    A verification code will be sent to your Smart-ID app.
                  </p>
                </form>
              </div>
            )}

          </div>
          
          <div className="mt-8 mb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Return to service provider
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 opacity-90">
             <div className="flex items-center gap-3">
               <img src={auLogo} alt="African Union" className="h-12 w-auto object-contain transition-all duration-300" />
               <img src={namFlag} alt="Namibia" className="h-12 w-auto object-contain" />
             </div>
             {/* SADC placeholder text or logo if available */}
             <div className="flex flex-col">
               <span className="font-bold text-gray-400 text-xs tracking-widest uppercase">Member of</span>
               <span className="font-bold text-gray-600">SADC & African Union</span>
             </div>
          </div>
          
          <Link to="/auth/about" className="text-teal-700 hover:text-teal-900 hover:underline text-sm font-medium">
            More about the State authentication service
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default AuthenticationPage;
