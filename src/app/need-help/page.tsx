'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

const NeedHelpPage = () => {
  return (
    <>
      <Head>
        <title>Need Help? | Interview Stack</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 max-w-3xl w-full"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Need Help?</h1>

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              We’re here to help! If you’re facing issues while using Interview Stack, check the following:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>🔍 Can't log in? Try resetting your password via the <a href="/forgot-password" className="text-blue-600 underline">Forgot Password</a> page.</li>
              <li>📧 Didn't receive a verification email? Visit the <a href="/verify-email" className="text-blue-600 underline">Verify Email</a> page and click on “Resend”.</li>
              <li>💬 Have a question? Visit our <a href="/contact-us" className="text-blue-600 underline">Contact Us</a> page and send us a message.</li>
              <li>📃 Want to understand how we use your data? Check our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.</li>
            </ul>

            <p>
              If your issue is not listed here, feel free to contact us. We’ll get back to you as soon as possible!
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NeedHelpPage;
