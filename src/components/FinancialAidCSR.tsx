
import React from "react";
import { 
  Users, FileText, CheckSquare, Search, 
  Building, Gift, Handshake, School, 
  Globe, Heart, BookOpen, BarChart3 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const FinancialAidCSR = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Financial Aid & CSR Programs
        </h2>

        {/* Process Flow Visualization */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Financial Aid Process Flow</h3>
          <div className="relative">
            {/* Process Steps with Connecting Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary-green -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: FileText, title: "1. Application", desc: "Complete online or paper forms" },
                { icon: CheckSquare, title: "2. Documentation", desc: "Submit required documents" },
                { icon: Search, title: "3. Review", desc: "Applications reviewed by committee" },
                { icon: Heart, title: "4. Support", desc: "Ongoing assistance provided" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md border-2 border-primary-green mb-4">
                    <step.icon className="h-8 w-8 text-primary-green" />
                  </div>
                  <h4 className="font-semibold mb-1 text-center">{step.title}</h4>
                  <p className="text-sm text-center text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Eligibility Criteria */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-primary-green text-white pb-4">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Eligibility Criteria
              </CardTitle>
              <CardDescription className="text-white/90">
                Our comprehensive approach to identifying candidates in need
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Income Assessment</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Prioritize children from low-income families</li>
                    <li>Special consideration for single-mother households</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Academic Performance</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Consider academic achievements and potential</li>
                    <li>Recognize improvement trends in academic records</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Special Circumstances</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provisions for children with disabilities</li>
                    <li>Consideration for families facing extraordinary hardships</li>
                    <li>Priority for single mothers struggling with childcare and education costs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Procedures */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-accent-green text-white pb-4">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Application Procedures
              </CardTitle>
              <CardDescription className="text-white/90">
                Step-by-step guidance through our application process
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="p-3 border-l-4 border-accent-green">
                  <h4 className="font-semibold text-lg">1. Application Form</h4>
                  <p className="text-sm text-gray-700">Comprehensive online and paper-based forms to collect information on:</p>
                  <ul className="list-disc pl-5 text-sm mt-1">
                    <li>Family background</li>
                    <li>Financial status</li>
                    <li>Academic performance</li>
                    <li>Special circumstances (if applicable)</li>
                  </ul>
                </div>
                
                <div className="p-3 border-l-4 border-accent-green">
                  <h4 className="font-semibold text-lg">2. Required Documentation</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Proof of income (pay stubs, tax returns)</li>
                    <li>Academic records</li>
                    <li>Single parent status verification (for applicable cases)</li>
                  </ul>
                </div>
                
                <div className="p-3 border-l-4 border-accent-green">
                  <h4 className="font-semibold text-lg">3. Submission Process</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Online submission through secure portal</li>
                    <li>In-person submission at designated centers</li>
                    <li>Assistance available for form completion</li>
                  </ul>
                </div>
                
                <div className="p-3 border-l-4 border-accent-green">
                  <h4 className="font-semibold text-lg">4. Review and Selection</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Initial screening by administrative staff</li>
                    <li>Thorough review by selection committee</li>
                    <li>Personal communication with shortlisted candidates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CSR Integration */}
        <h3 className="text-2xl font-semibold mb-6">Integration with CSR Contributions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { 
              icon: Building, 
              title: "Corporate Partnerships", 
              items: [
                "Dedicated CSR funding channels",
                "Corporate-sponsored scholarships",
                "In-kind contributions (e.g., laptops, books)"
              ]
            },
            { 
              icon: Gift, 
              title: "Individual Donations", 
              items: [
                "Monthly giving programs",
                "One-time donation options",
                "Sponsor-a-Child initiatives"
              ]
            },
            { 
              icon: Handshake, 
              title: "Joint CSR Initiatives", 
              items: [
                "Mentorship programs with corporate volunteers",
                "Skill development workshops led by industry professionals",
                "Career guidance sessions for older children and single mothers"
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary-orange/10 flex items-center justify-center mr-3">
                  <item.icon className="w-5 h-5 text-secondary-orange" />
                </div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
              </div>
              <ul className="space-y-2">
                {item.items.map((listItem, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary-orange mt-1.5 mr-2"></span>
                    <span className="text-gray-700">{listItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Program Effectiveness */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Enhancing Program Effectiveness</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: School, 
                title: "NGO and Educational Institution Partnerships", 
                desc: "We collaborate with leading organizations to identify candidates, streamline processes, and provide ongoing support and monitoring."
              },
              { 
                icon: Globe, 
                title: "Government Program Alignment", 
                desc: "Our initiatives coordinate with existing government schemes, leverage public resources, and advocate for policies supporting target groups."
              },
              { 
                icon: Users, 
                title: "Community Engagement", 
                desc: "Through awareness campaigns, community leader involvement, and local support groups for single mothers, we ensure grassroots impact."
              }
            ].map((box, idx) => (
              <Card key={idx} className="group hover:border-primary-green transition-all duration-300">
                <CardHeader>
                  <div className="rounded-full w-12 h-12 bg-primary-green/10 flex items-center justify-center mb-3 group-hover:bg-primary-green/20 transition-colors">
                    <box.icon className="w-6 h-6 text-primary-green" />
                  </div>
                  <CardTitle className="text-lg">{box.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{box.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Focus on Single Mothers */}
        <div className="bg-gradient-to-r from-primary-green/10 to-accent-green/10 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-6">Special Focus on Single Mothers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Heart, 
                title: "Tailored Support", 
                items: [
                  "Flexible study options to accommodate work schedules",
                  "Childcare assistance during classes or study periods",
                  "Career development resources and job placement support"
                ]
              },
              { 
                icon: BarChart3, 
                title: "Financial Management Education", 
                items: [
                  "Workshops on budgeting and financial planning",
                  "Guidance on accessing additional support services",
                  "Micro-loan programs for education-related expenses"
                ]
              },
              { 
                icon: BookOpen, 
                title: "Holistic Family Support", 
                items: [
                  "Mental health and counseling services",
                  "Peer support networks for single mothers",
                  "Educational resources for effective parenting"
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <section.icon className="w-6 h-6 text-primary-green mr-2" />
                  <h4 className="font-semibold text-lg">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-primary-green mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring and Evaluation */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Monitoring and Evaluation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Regular Progress Checks",
                items: [
                  "Quarterly academic performance reviews",
                  "Annual family situation reassessments",
                  "Continuous feedback collection from beneficiaries"
                ]
              },
              {
                title: "Impact Measurement",
                items: [
                  "Track long-term educational outcomes",
                  "Assess improvement in family financial stability",
                  "Evaluate program effectiveness and make adjustments"
                ]
              },
              {
                title: "Transparency and Reporting",
                items: [
                  "Annual impact reports for stakeholders and donors",
                  "Success stories and case studies",
                  "Open communication channels for improvement suggestions"
                ]
              }
            ].map((col, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-primary-green hover:shadow-md transition-all">
                <h4 className="text-lg font-semibold mb-4 pb-2 border-b">{col.title}</h4>
                <ol className="space-y-2">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="font-bold text-primary-green mr-2">{i+1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAidCSR;
