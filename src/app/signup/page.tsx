'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import Head from 'next/head';
import toast from 'react-hot-toast';
import { memo } from 'react';

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm your password'),
    }),
    onSubmit: async (values) => {
      try {
        // Simulate signup logic
        toast.success('Account created successfully!');
        // redirect or store user logic...
      } catch (error) {
        toast.error('Something went wrong!');
      }
    },
  });

  return (
    <>
      <Head>
        <title>Sign Up | MyApp</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 max-w-md w-full"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                {...formik.getFieldProps('name')}
                className={`peer w-full h-12 px-3 border-b-2 bg-transparent placeholder-transparent focus:outline-none transition-all ${
                  formik.touched.name && formik.errors.name
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
              >
                Full Name
              </label>
              {formik.touched.name && formik.errors.name && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                {...formik.getFieldProps('email')}
                className={`peer w-full h-12 px-3 border-b-2 bg-transparent placeholder-transparent focus:outline-none transition-all ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
              >
                Email Address
              </label>
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                id="password"
                {...formik.getFieldProps('password')}
                className={`peer w-full h-12 px-3 border-b-2 bg-transparent placeholder-transparent focus:outline-none transition-all ${
                  formik.touched.password && formik.errors.password
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-3 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
              >
                Password
              </label>
              {formik.touched.password && formik.errors.password && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
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
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default memo(SignUpPage);
