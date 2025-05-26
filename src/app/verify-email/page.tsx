'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import Head from 'next/head';
import toast from 'react-hot-toast';
import { memo } from 'react';

const VerifyEmailPage = () => {
  const formik = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .length(6, 'Code must be 6 characters')
        .required('Verification code is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Example verification logic
        if (values.code === '123456') {
          toast.success('Email verified successfully!');
          // redirect or logic...
        } else {
          toast.error('Invalid verification code');
        }
      } catch (error) {
        toast.error('Verification failed!');
      }
    },
  });

  return (
    <>
      <Head>
        <title>Email Verification | MyApp</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 max-w-md w-full"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Verify Your Email</h1>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Verification Code */}
            <div className="relative">
              <input
                type="text"
                id="code"
                maxLength={6}
                {...formik.getFieldProps('code')}
                className={`peer w-full h-12 px-3 border-b-2 bg-transparent placeholder-transparent focus:outline-none transition-all ${
                  formik.touched.code && formik.errors.code
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Enter 6-digit code"
              />
              <label
                htmlFor="code"
                className="absolute left-3 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
              >
                Verification Code
              </label>
              {formik.touched.code && formik.errors.code && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.code}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Verify Email
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Didn't get the code?{' '}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => toast.success('Verification email re-sent!')}
            >
              Resend
            </button>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default memo(VerifyEmailPage);
