
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Medh Foundation ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with 
              our website (www.medhfoundation.org). Please read this policy carefully. By using our website you agree to the terms outlined below.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect the following types of information:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Information You Provide via Website Forms</h3>
            <p>When you interact with the Medh Foundation website through forms, we collect:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Volunteer, Partner, or Intern Requests: Name, contact details, academic background, professional background, resumes, location and other details provided in the forms.</li>
              <li>Vocational Course Enrolment: Name, age, gender, contact details, educational background, and other necessary information related to the enrolment process.</li>
              <li>Current Openings: Name, location, contact details, resumes, cover letters, remuneration and professional details shared during applications.</li>
              <li>Contact Forms: Name, email ID, phone number, and message details.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Information you provide via our website</h3>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Account Information: When we register, we collect your name, email address, phone number, and any other details required for creating an account.</li>
              <li>Profile Data: Data you input into your profile, such as your photo, institution details, and course enrolments.</li>
              <li>Content Data: Any files, assignments, or other data you upload to the Website.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Device Information: Information about your IP address and mobile network.</li>
              <li>Usage Data: Information about how you use the Web app, such as accessed features, time spent, and interaction details.</li>
              <li>Log Data: Logs of server requests, including IP address, Web/App, and timestamps.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Website</h3>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>To process and respond to form submissions (volunteers, partners, internships, vocational courses, etc.).</li>
              <li>To assess and manage employment or internship applications.</li>
              <li>To improve our website's functionality and user experience.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
            <p>We do not sell your personal information. However, we may share it in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>With Educational Institutions: For learners using Website, we may share information with their schools or institutions.</li>
              <li>Service Providers: Trusted vendors with signed non-disclosure agreements for hosting, analytics, and operational support.</li>
              <li>Legal Requirements: To comply with applicable laws or respond to valid legal requests.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We are committed to safeguarding your personal data and have implemented robust technical and organisational measures to protect it from unauthorized access, disclosure, alteration, or destruction. 
              While we strive to maintain the highest standards of security, no system can be invulnerable. Rest assured, we continuously monitor and enhance our security practices to ensure the safety of your information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p>Depending on applicable laws, you may have the right to:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Access & update your personal data.</li>
              <li>Withdraw consent for data processing (where consent was provided).</li>
              <li>Object to or restrict certain data processing activities. To exercise these rights, please contact us at grievance@medhfoundation.org</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy unless a longer retention period is required by law. 
              When no longer needed, we securely delete or anonymize your data.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. 
              Please review their privacy policies before sharing any data.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">8.1 Parental/Guardian Consent for students below 18 years visiting our website, we require:</h3>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Parental or Guardian Consent: Parents or guardians must approve the student's registration and usage of the Website, and/or</li>
              <li>Institutional Authorization: Schools or educational institutions must approve the student's registration.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">8.2 Information Collected from Children</h3>
            <p>We may collect the following information from students to facilitate their learning experience:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Name, age, class/grade level, and enrollment details.</li>
              <li>Academic records and coursework submissions.</li>
              <li>Usage data for educational and engagement purposes.</li>
            </ul>
            <p>We ensure that this information is used strictly for educational purposes and is safeguarded with appropriate security measures.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">8.3 Parental/Guardian Rights/Schools or Educational Institutions</h3>
            <p>Parents or guardians of children using the App may:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Request access to or deletion of their child's data.</li>
              <li>Withdraw consent for the continued collection or use of their child's information. To exercise these rights, please contact us at grievance@medhfoundation.org</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">8.4 Data Sharing and Protection</h3>
            <p>We do not share children's personal data with third parties except:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>With their school or educational institution for academic purposes.</li>
              <li>With service providers strictly for operational needs. We take special care to ensure children's data is protected using advanced security measures.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">8.5 Non-Compliance</h3>
            <p>
              If we become aware that we have collected personal information from a child without proper consent or authorisation, 
              we will take immediate steps to delete such data.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be effective immediately upon posting the revised policy on our website. 
              We encourage you to review the policy regularly to stay informed.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>For questions or concerns regarding this Privacy Policy, contact us at:</p>
            <p className="font-medium">grievance@medhfoundation.org</p>
            <p>By accessing/using the Medh Foundation website, you agree to this Privacy Policy.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
