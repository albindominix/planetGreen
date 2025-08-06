import { useForm } from "@tanstack/react-form";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Input from "../components/ui/Input";
import { useRegisterMutation } from "../hooks/queries";
import { ROUTES } from "../libs/constants";
import { validateEmail, validatePassword } from "../libs/utils";
import TermsModal from "../components/TermsModal";
import AuthLayout from "../layout/AuthLayout";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const registerMutation = useRegisterMutation();
  const [isTermsModalOpen, setIsTermsModalOpen] = React.useState(false);
  const form = useForm({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      acceptTerms: false, // <-- State is now managed by the form
    },
    onSubmit: async ({ value }) => {
      // The form's own validation now prevents submission if terms aren't accepted.
      await registerMutation.mutateAsync(value);
    },
  });

  return (
       <AuthLayout>

      {/* Main Card Container */}
      <div className="w-full max-w-md lg:max-w-2xl bg-[#141414] rounded-3xl p-4 sm:p-6 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <div className="flex items-center gap-2 w-full justify-between">
            <div>
              <h1 className="text-lg sm:text-2xl font-semibold text-white/70 mb-1">
                <span className="font-bold text-white">Create</span> your
                account!
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm">
                Sign up to unlock exclusive features.
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <img src={logo} alt="" className="h-6 sm:h-8" />
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="flex flex-col gap-4 sm:gap-7"
        >
          {/* Profile Image and Full Name Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 ">
            {/* Profile Image Placeholder */}
            <div className="w-24 h-24 sm:h-auto self-stretch bg-[#1f1f1f] border border-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 ">
              <div className="w-5 h-5 text-gray-500">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Full Name Field */}
            <div className="flex-1 w-full sm:w-auto sm:my-3">
              <label className="block text-white text-sm font-medium mb-1">
                Full Name
              </label>
              <form.Field
                name="fullName"
                validators={{
                  onBlur: ({ value }) =>
                    !value ? "Full name is required" : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <Input
                      placeholder="Enter your full name"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      error={field.state.meta.errors}
                    />
                    {field.state.meta.errors && (
                      <p className="mt-1 text-xs text-red-400">
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>
            </div>
          </div>

          {/* Username and Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Username Field */}
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Username
              </label>
              <form.Field
                name="username"
                validators={{
                  onChange: ({ value }) =>
                    !value ? "Username is required" : undefined,
                  onBlur: ({ value }) =>
                    !value ? "Username is required" : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <Input
                      placeholder="Enter your username"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      error={field.state.meta.errors}
                    />
                    {field.state.meta.errors && (
                      <p className="mt-1 text-xs text-red-400">
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Email Address
              </label>
              <form.Field
                name="email"
                validators={{
                  onChange: ({ value }) =>
                    !value
                      ? "Email is required"
                      : !validateEmail(value)
                      ? "Please enter a valid email"
                      : undefined,
                  onBlur: ({ value }) =>
                    !value
                      ? "Email is required"
                      : !validateEmail(value)
                      ? "Please enter a valid email"
                      : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      error={field.state.meta.errors}
                    />
                    {field.state.meta.errors && (
                      <p className="mt-1 text-xs text-red-400">
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>
            </div>
          </div>

          {/* Password and Confirm Password Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Password Field */}
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Password
              </label>
              <form.Field
                name="password"
                validators={{
                  onChange: ({ value }) =>
                    !value
                      ? "Password is required"
                      : !validatePassword(value)
                      ? "Password must be at least 8 characters"
                      : undefined,
                  onBlur: ({ value }) =>
                    !value
                      ? "Password is required"
                      : !validatePassword(value)
                      ? "Password must be at least 8 characters"
                      : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <Input
                      placeholder="Enter password"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      showPasswordToggle
                      showPassword={showPassword}
                      onTogglePassword={() => setShowPassword(!showPassword)}
                      error={field.state.meta.errors}
                    />
                    {field.state.meta.errors && (
                      <p className="mt-1 text-xs text-red-400">
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Confirm Password
              </label>
              <form.Field
                name="passwordConfirm"
                validators={{
                  onChange: ({ value, fieldApi }) => {
                    const password = fieldApi.form.getFieldValue("password");
                    return !value
                      ? "Please confirm your password"
                      : value !== password
                      ? "Passwords do not match"
                      : undefined;
                  },
                  onBlur: ({ value, fieldApi }) => {
                    const password = fieldApi.form.getFieldValue("password");
                    return !value
                      ? "Please confirm your password"
                      : value !== password
                      ? "Passwords do not match"
                      : undefined;
                  },
                }}
              >
                {(field) => (
                  <div>
                    <Input
                      placeholder="Confirm password"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      showPasswordToggle
                      showPassword={showConfirmPassword}
                      onTogglePassword={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      error={field.state.meta.errors}
                    />
                    {field.state.meta.errors && (
                      <p className="mt-1 text-xs text-red-400">
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>
            </div>
          </div>

          {/* Terms and Submit Button Row */}
          <div className="grid grid-cols-2 gap-3 items-start">
            {/* Terms and Conditions */}
            <form.Field
              name="acceptTerms"
              validators={{
                onChange: ({ value }) =>
                  !value ? "You must accept the Terms & Conditions" : undefined,
              }}
            >
              {(field) => (
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="acceptTerms"
                    checked={field.state.value}
                    onChange={(e) => field.handleChange(e.target.checked)}
                    onBlur={field.handleBlur}
                    className="mt-1 flex-shrink-0"
                  />
                  <div>
                    <label
                      htmlFor="acceptTerms"
                      className="text-white text-sm leading-tight cursor-pointer"
                    >
                      I accept the{" "}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsTermsModalOpen(true);
                        }}
                        className="underline hover:no-underline font-medium cursor-pointer"
                      >
                        Terms & Conditions
                      </button>
                    </label>
                    {field.state.meta.touched && field.state.meta.errors && (
                      <p className="mt-1 text-xs text-red-400">
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </form.Field>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              className="bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-full px-6 py-2 text-sm flex items-center gap-1"
              loading={registerMutation.isPending}
              disabled={!form.state.canSubmit} // <-- Simplified logic
            >
              {registerMutation.isPending ? (
                "Creating Account..."
              ) : (
                <>
                  Create Account
                  <span className="text-lg">→</span>
                </>
              )}
            </Button>
          </div>
          <div className="flex justify-between items-center pt-4">
            {/* Login Link */}
            <div className="text-left pt-3">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  to={ROUTES.LOGIN}
                  className="text-white underline hover:no-underline"
                >
                  Log in
                </Link>
              </p>
            </div>

            {/* Footer */}
            <div className="text-left pt-2">
              <p className="text-xs text-gray-500">2025 © Demo Panel | FE</p>
            </div>
          </div>
        </form>
      </div>
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </AuthLayout>
  );
};

export default RegisterPage;
