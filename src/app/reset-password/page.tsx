'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import Head from 'next/head';
import toast from 'react-hot-toast';
import { memo } from 'react';

const ResetPasswordPage = () => {
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('New password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        .required('Please confirm your password'),
    }),
    onSubmit: async (values) => {
      try {
        // Placeholder logic (replace with API call)
        if (values.newPassword === 'newpass123') {
          toast.success('Password reset successfully!');
          // redirect or logic...
        } else {
          toast.success('Password updated!');
        }
      } catch (error) {
        toast.error('Something went wrong!');
      }
    },
  });

  return (
    <>
      <Head>
        <title>Reset Password | MyApp</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 max-w-md w-full"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Reset Password</h1>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* New Password */}
            <div className="relative">
              <input
                type="password"
                id="newPassword"
                {...formik.getFieldProps('newPassword')}
                className={`peer w-full h-12 px-3 border-b-2 bg-transparent placeholder-transparent focus:outline-none transition-all ${
                  formik.touched.newPassword && formik.errors.newPassword
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="New Password"
              />
              <label
                htmlFor="newPassword"
                className="absolute left-3 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
              >
                New Password
              </label>
              {formik.touched.newPassword && formik.errors.newPassword && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.newPassword}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                {...formik.getFieldProps('confirmPassword')}
                className={`peer w-full h-12 px-3 border-b-2 bg-transparent placeholder-transparent focus:outline-none transition-all ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Confirm Password"
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-3 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
              >
                Confirm Password
              </label>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Reset Password
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Back to{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default memo(ResetPasswordPage);
