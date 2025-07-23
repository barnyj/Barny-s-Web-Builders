"use client";
import { useState } from "react";

export default function OnboardingPage() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission (e.g., send to backend or integration)
    console.log(formData);
    // Optionally redirect to Calendly after submit
    window.location.href = "https://calendly.com/barnyswebbuilders/project-kick-off-call";
  };

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Client Project Onboarding Form
        </h1>
        <aside className="bg-gray-100 p-4 rounded-lg mb-8 italic text-gray-700">
          👋 Welcome! Thanks for your interest in working with us. Please complete this form to help us understand your project needs.
        </aside>
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Business & Branding Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🗂️ Business & Branding Information
            </h2>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  🏢 Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Your business name"
                />
              </div>
              <div>
                <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">
                  🎯 Target Audience
                </label>
                <textarea
                  id="targetAudience"
                  name="targetAudience"
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Demographics, interests, pain points"
                />
              </div>
              <div>
                <label htmlFor="brandColors" className="block text-sm font-medium text-gray-700">
                  🎨 Brand Colors
                </label>
                <input
                  type="text"
                  id="brandColors"
                  name="brandColors"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Hex codes or descriptions"
                />
              </div>
              <div>
                <label htmlFor="brandVoice" className="block text-sm font-medium text-gray-700">
                  📝 Brand Voice
                </label>
                <input
                  type="text"
                  id="brandVoice"
                  name="brandVoice"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Professional, casual, etc."
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="brandAssets" className="block text-sm font-medium text-gray-700">
                  🖼️ Logo & Brand Assets
                </label>
                <textarea
                  id="brandAssets"
                  name="brandAssets"
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Describe existing assets"
                />
              </div>
              <div>
                <label htmlFor="preferredFonts" className="block text-sm font-medium text-gray-700">
                  🔤 Preferred Fonts
                </label>
                <input
                  type="text"
                  id="preferredFonts"
                  name="preferredFonts"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Font names or styles"
                />
              </div>
              <div>
                <label htmlFor="companyTagline" className="block text-sm font-medium text-gray-700">
                  💫 Company Tagline
                </label>
                <input
                  type="text"
                  id="companyTagline"
                  name="companyTagline"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Your slogan or tagline"
                />
              </div>
            </div>
          </section>

          {/* Website Goals & Features */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🧱 Website Goals & Features
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="websiteGoals" className="block text-sm font-medium text-gray-700">
                  🎯 Website Goals
                </label>
                <textarea
                  id="websiteGoals"
                  name="websiteGoals"
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="e.g., generate leads, improve SEO"
                />
              </div>
              <div>
                <label htmlFor="websitePages" className="block text-sm font-medium text-gray-700">
                  📄 Website Pages
                </label>
                <input
                  type="text"
                  id="websitePages"
                  name="websitePages"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Home, About, Services..."
                />
              </div>
              <div>
                <label htmlFor="inspiration" className="block text-sm font-medium text-gray-700">
                  💡 Inspiration
                </label>
                <textarea
                  id="inspiration"
                  name="inspiration"
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Paste URLs and notes"
                />
              </div>
              <div>
                <label htmlFor="mustHaveFeatures" className="block text-sm font-medium text-gray-700">
                  ⚙️ Must-have Features
                </label>
                <input
                  type="text"
                  id="mustHaveFeatures"
                  name="mustHaveFeatures"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Booking calendar, contact forms..."
                />
              </div>
              <div>
                <label htmlFor="ecommerceNeeds" className="block text-sm font-medium text-gray-700">
                  🛒 eCommerce Needs
                </label>
                <select
                  id="ecommerceNeeds"
                  name="ecommerceNeeds"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <input
                  type="text"
                  id="productCount"
                  name="productCount"
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="If yes, how many products?"
                />
              </div>
            </div>
          </section>

          {/* Content & Assets */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📝 Content & Assets
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="contentReady" className="block text-sm font-medium text-gray-700">
                  📄 Website Content
                </label>
                <select
                  id="contentReady"
                  name="contentReady"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                >
                  <option value="">Select status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="partial">Partially</option>
                </select>
              </div>
              <div>
                <label htmlFor="contentLinks" className="block text-sm font-medium text-gray-700">
                  🔗 Content Access
                </label>
                <input
                  type="text"
                  id="contentLinks"
                  name="contentLinks"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Links to Docs, Dropbox, etc." />
              </div>
              <div>
                <label htmlFor="mediaAssets" className="block text-sm font-medium text-gray-700">
                  📸 Images & Media
                </label>
                <textarea
                  id="mediaAssets"
                  name="mediaAssets"
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Describe photos or needs"
                />
              </div>
              <div>
                <label htmlFor="copywriting" className="block text-sm font-medium text-gray-700">
                  ✍️ Copywriting
                </label>
                <select
                  id="copywriting"
                  name="copywriting"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes, I need help</option>
                  <option value="no">No, I have my own copy</option>
                </select>
              </div>
            </div>
          </section>

          {/* Domain & Technical Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🌐 Domain & Technical Information
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="domainName" className="block text-sm font-medium text-gray-700">
                  🔗 Domain Name
                </label>
                <input
                  type="text"
                  id="domainName"
                  name="domainName"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Your domain or idea"
                />
              </div>
              <div>
                <label htmlFor="domainAccess" className="block text-sm font-medium text-gray-700">
                  🔐 Domain Access
                </label>
                <select
                  id="domainAccess"
                  name="domainAccess"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                >
                  <option value="">Select access</option>
                  <option value="yes">Yes, I have access</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                  📧 Contact Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Email for form submissions"
                />
              </div>
              <div>
                <label htmlFor="analyticsTracking" className="block text-sm font-medium text-gray-700">
                  📊 Analytics & Tracking
                </label>
                <select
                  id="analyticsTracking"
                  name="analyticsTracking"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                >
                  <option value="">Select tools needed</option>
                  <option value="google">Google Analytics</option>
                  <option value="facebook">Facebook Pixel</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          </section>

          {/* Project Scope & Timeline */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ✅ Project Scope & Timeline
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                  ⏱️ Timeline
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="2 weeks, 1 month, etc."
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                  💰 Budget
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="$X,XXX - $X,XXX"
                />
              </div>
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                  📝 Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Any other notes or requests"
                />
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📞 Contact Information
            </h2>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  👤 Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="companyNameContact" className="block text-sm font-medium text-gray-700">
                  🏢 Company Name
                </label>
                <input
                  type="text"
                  id="companyNameContact"
                  name="companyNameContact"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="emailContact" className="block text-sm font-medium text-gray-700">
                  📧 Email Address
                </label>
                <input
                  type="email"
                  id="emailContact"
                  name="emailContact"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phoneContact" className="block text-sm font-medium text-gray-700">
                  📱 Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneContact"
                  name="phoneContact"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
          </section>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Submit & Schedule Call
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}