import { Heart, Lightbulb, Users } from "lucide-react";
const Mission = () => {
  return <section id="mission" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium">Our Purpose</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold mb-6">Mission & Vision</h2>
          <p className="text-gray-700 text-lg">
            The Medh Foundation is dedicated to creating lasting change through education and empowerment, focusing on children's development and providing sustainable livelihoods for single mothers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-in">
            <div className="h-48 bg-primary-green/90 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg text-justify">To break down financial barriers for children's education while simultaneously empowering single mothers through targeted skill development. We provide unwavering mentorship and foster a nurturing environment where both children and their mothers can flourish academically, personally, and professionally.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50">
                  <Heart className="w-8 h-8 text-primary-green mb-2" />
                  <p className="font-medium">Compassionate Support</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50">
                  <Lightbulb className="w-8 h-8 text-primary-green mb-2" />
                  <p className="font-medium">Educational Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="h-48 bg-secondary-orange/90 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg text-center">We aspire to create a world where every child accesses quality education and every single mother acquires empowering skills, regardless of economic background. By unlocking the potential of both generations, we aim to catalyze positive societal change and build resilient, self-sufficient families.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50">
                  <Users className="w-8 h-8 text-secondary-orange mb-2" />
                  <p className="font-medium">Community Building</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-secondary-orange mb-2">
                    <path d="M12 3v12"></path>
                    <path d="m8 11 4 4 4-4"></path>
                    <path d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    <path d="M20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    <path d="M8 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    <path d="M20 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    <path d="M6 5h12"></path>
                    <path d="M6 19h12"></path>
                  </svg>
                  <p className="font-medium">Sustainable Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 shadow-inner text-center">
          <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 glass rounded-xl">
              <div className="h-16 w-16 mx-auto bg-primary-green/10 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green">
                  <path d="M18 8V5H2v13h16v-3"></path>
                  <rect x="8" y="2" width="8" height="18" rx="1"></rect>
                  <path d="M18 2h4v16h-4z"></path>
                </svg>
              </div>
              <h4 className="font-bold">Education</h4>
              <p className="text-sm text-gray-600">Quality learning for all</p>
            </div>
            <div className="p-4 glass rounded-xl">
              <div className="h-16 w-16 mx-auto bg-secondary-orange/10 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-orange">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h4 className="font-bold">Empowerment</h4>
              <p className="text-sm text-gray-600">Building independence</p>
            </div>
            <div className="p-4 glass rounded-xl">
              <div className="h-16 w-16 mx-auto bg-accent-green/10 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-green">
                  <path d="M14 19a9 9 0 0 0-7.77-8.96 1 1 0 0 0-1.15.78A8 8 0 0 0 5 12a8 8 0 0 0 3.23 6.36 1 1 0 0 0 1.48-.28c.84-1.32 2.37-2.08 4.29-2.08Z"></path>
                  <path d="M16 21c1.2-1.81 2-4.83 2-8 0-4-1-8-4-11"></path>
                  <path d="M20 16c1-4-1-8-4-10"></path>
                  <path d="M4 10c0-1 .5-3 2-4"></path>
                </svg>
              </div>
              <h4 className="font-bold">Compassion</h4>
              <p className="text-sm text-gray-600">Empathy in action</p>
            </div>
            <div className="p-4 glass rounded-xl">
              <div className="h-16 w-16 mx-auto bg-primary-green/10 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h4 className="font-bold">Integrity</h4>
              <p className="text-sm text-gray-600">Transparent & ethical</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Mission;