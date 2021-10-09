import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import GoogleIcon from '~/assets/icons/googleIcon';
import MailIcon from '~/assets/icons/mailIcon';
import Link from '~/components/common/link';
import Layout from '~/components/layouts/default';
import Button from '~/components/ui/button';
import Container from '~/components/ui/container';
import Input from '~/components/ui/input';
import useAuth from '~/hooks/use-auth';
import useRoleAuthorization from '~/hooks/use-role-authorization';
import { SIGNIN_SCHEMA } from '~/utils/validations';
import { ISigninDto } from '~/types/auth.type';

const DEFAULT_FORM_VALUES = {
  email: '',
  password: '',
} as ISigninDto;

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields, isValid, isDirty },
    reset,
  } = useForm<ISigninDto>({
    resolver: yupResolver(SIGNIN_SCHEMA) as any,
    defaultValues: DEFAULT_FORM_VALUES,
    mode: 'all',
  });
  const { signInWithEmailAndPassword, signInWithGoogleProvider } = useAuth();
  const [serverErrorState, setServerError] = useState<string | null>(null);

  const onSubmitHandler: SubmitHandler<ISigninDto> = async (formDto) => {
    try {
      await signInWithEmailAndPassword(formDto);

      reset(DEFAULT_FORM_VALUES);
      setServerError(null);
    } catch (error) {
      setServerError(error.response.data.message);
    }
  };

  useRoleAuthorization();

  return (
    <Layout
      headerProps={{ withBorder: true, sticky: true }}
      customMeta={{ title: 'Signin | Dekoo' }}
    >
      <section className="py-16">
        <Container maxW="max-w-md" className="flex flex-col items-center px-12">
          <h1 className="text-4xl font-bold pb-8">Sign In</h1>

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

            <div id="error_message" />

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

            <Button variant="google" size="full" onClick={signInWithGoogleProvider}>
              <GoogleIcon className="w-6 mr-2" /> Continue with Google
            </Button>

            <p className="mt-14 w-full pt-5 border-t text-lg border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold text-center">
              Don&apos;t have an account?
              <Link
                href="/signup"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                {' '}
                Join the club
              </Link>
            </p>
          </form>
        </Container>
      </section>
    </Layout>
  );
}
