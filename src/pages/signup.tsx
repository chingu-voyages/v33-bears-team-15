import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Container from '~/components/ui/container';
import Footer from '~/components/common/footer';
import SEO from '~/components/common/SEO';
import Link from '~/components/common/link';
import Button from '~/components/ui/button';
import Input from '~/components/ui/input';
import Logo from '~assets/images/logo.png';
import GoogleIcon from '~/assets/icons/googleIcon';
import MailIcon from '~/assets/icons/mailIcon';
import CheckCircleIcon from '~/assets/icons/checkCircleIcon';
import advantages from '~data/advantages';
import useAuth from '~/hooks/use-auth';
import useRoleAuthorization from '~/hooks/use-role-authorization';
import { SIGNUP_SCHEMA } from '~/utils';
import { ISignupDto } from '~/types';

const DEFAULT_FORM_VALUES = {
  email: '',
  password: '',
  fullName: '',
} as ISignupDto;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields, isValid, isDirty },
    reset,
  } = useForm<ISignupDto>({
    resolver: yupResolver(SIGNUP_SCHEMA) as any,
    defaultValues: DEFAULT_FORM_VALUES,
    mode: 'all',
  });
  const { signUpWithEmailAndPassword } = useAuth();
  const [serverErrorState, setServerError] = useState<string | null>(null);

  const onSubmitHandler: SubmitHandler<ISignupDto> = async (formDto) => {
    try {
      await signUpWithEmailAndPassword(formDto);

      reset(DEFAULT_FORM_VALUES);
      setServerError(null);
    } catch (error) {
      setServerError(error.message);
    }
  };

  useRoleAuthorization();

  return (
    <>
      <SEO title="Signup | Dekoo" />
      <section className="min-h-screen relative flex items-center">
        <div
          className="absolute lg:block hidden h-full w-1/2 top-0 left-0 z-0 bg-lightGray dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700"
          aria-hidden
        />

        <Container className="py-10">
          <Link href="/" title="Dekoo branding">
            <Image src={Logo} alt="Dekoo" priority width={176} height={46} />
          </Link>

          <div className="lg:grid grid-cols-2 lg:mt-8 mt-12 flex flex-col-reverse items-center lg:items-start">
            <div className="z-10 lg:mt-0 mt-6">
              <dl className="pt-10 max-w-sm space-y-12">
                {advantages.map(({ name, description }) => (
                  <div className="relative" key={name}>
                    <dt>
                      <div className="absolute flex items-center justify-center">
                        <CheckCircleIcon
                          className="w-8 text-primary-800 dark:text-primary-600"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-14 text-2xl leading-6 font-bold text-black-normal">
                        {name}
                      </p>
                    </dt>
                    <dd className="mt-4 ml-14 text-lg font-medium text-gray-700 dark:text-gray-300">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col lg:pl-14 max-w-sm">
              <h1
                className="sm:text-5xl text-4xl font-semibold mb-12"
                style={{ lineHeight: 1.15 }}
              >
                Join the most epic platform
              </h1>
              <form onSubmit={handleSubmit(onSubmitHandler)} className="w-full">
                {serverErrorState && (
                  <span
                    role="alert"
                    className="block text-sm dark:text-red-500 text-red-700 mb-2.5 pl-0.5"
                  >
                    {serverErrorState}
                  </span>
                )}

                <div className="mb-3.5">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>

                  <Input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    aria-invalid={!!errors.email}
                    isError={errors.email && touchedFields.email}
                    error={errors.email?.message}
                    {...register('email')}
                  />
                </div>

                <div className="mb-3.5">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    showPasswordToggle
                    aria-invalid={!!errors.password}
                    isError={errors.password && touchedFields.password}
                    error={errors.password?.message}
                    {...register('password')}
                  />
                </div>

                <div className="mb-3.5">
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>

                  <Input
                    type="text"
                    id="fullName"
                    autoComplete="given-name"
                    placeholder="Full Name"
                    aria-invalid={!!errors.fullName}
                    isError={errors.fullName && touchedFields.fullName}
                    error={errors.fullName?.message}
                    {...register('fullName')}
                  />
                </div>

                <Button
                  type="submit"
                  colorScheme="primary"
                  size="full"
                  className="mb-3.5"
                  disabled={isDirty && !isValid}
                >
                  <MailIcon className="w-6 mr-2" />{' '}
                  {isSubmitting ? 'Loading...' : 'Continue with Email'}
                </Button>

                <Button variant="google" size="full">
                  <GoogleIcon className="w-6 mr-2" /> Continue with Google
                </Button>
              </form>

              <p className="mt-8">
                By clicking continue, you agree to our{' '}
                <Link
                  href="/legal/terms"
                  className="text-green-700 dark:text-green-400 hover:underline"
                  external
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/legal/privacy-policy"
                  className="text-green-700 dark:text-green-400 hover:underline"
                  external
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <p className="mt-14 w-full pt-5 border-t text-lg border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold">
                Already have an account?
                <Link
                  href="/signin"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  {' '}
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
