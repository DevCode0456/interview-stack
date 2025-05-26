'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Interview Stack</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 max-w-3xl w-full"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              At Interview Stack, we are committed to protecting your privacy. This Privacy Policy outlines how your personal information is collected, used, and protected when you visit our website.
            </p>
            <p>
              <strong>Information Collection:</strong> We only collect the information you voluntarily provide to us such as your name, email, and message details for contact or account purposes.
            </p>
            <p>
              <strong>Use of Information:</strong> We use your information to provide services, improve user experience, and communicate updates or responses.
            </p>
            <p>
              <strong>Security:</strong> Your data is stored securely and we take appropriate measures to protect it from unauthorized access or disclosure.
            </p>
            <p>
              <strong>Third-Party Services:</strong> We do not sell or share your information with third parties except to comply with legal obligations.
            </p>
            <p>
              <strong>Policy Updates:</strong> We may update this policy from time to time. Any changes will be posted on this page.
            </p>
            <p>
              For any questions or concerns, please <a href="/contact-us" className="text-blue-600 underline">contact us</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
