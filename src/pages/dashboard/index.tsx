import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Layout from '~/components/layouts/default';
import Button from '~/components/ui/button';
import Container from '~/components/ui/container';
import Input from '~/components/ui/input';
import { SIGNIN_SCHEMA } from '~/utils';
import { Role } from '~/types';
import useRoleAuthorization from '~/hooks/use-role-authorization';

type FormValues = {
  email: string;
  password: string;
};

const DEFAULT_FORM_VALUES = {
  email: '',
  password: '',
} as FormValues;

export default function DashboardSigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields, isValid, isDirty },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(SIGNIN_SCHEMA) as any,
    defaultValues: DEFAULT_FORM_VALUES,
    mode: 'all',
  });

  const [serverErrorState, setServerError] = useState<string | null>(null);

  const onSubmitHandler: SubmitHandler<FormValues> = async () => {
    try {
      // @TODO Implement submit

      reset(DEFAULT_FORM_VALUES);
      setServerError(null);
    } catch (error) {
      setServerError(error.message);
    }
  };

  useRoleAuthorization();

  return (
    <Layout
      headerProps={{ withBorder: true, sticky: true }}
      customMeta={{ title: 'Sign In | Admin Dashboard' }}
      withFooter={false}
    >
      <section className="py-16">
        <Container maxW="max-w-md" className="flex flex-col items-center px-12">
          <h1 className="text-4xl font-bold pb-8">Admin Dashboard</h1>

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

            <Button
              type="submit"
              colorScheme="primary"
              size="full"
              disabled={isDirty && !isValid}
              className="mb-3.5"
            >
              {isSubmitting ? 'Loading...' : 'Sign In'}
            </Button>
          </form>
        </Container>
      </section>
    </Layout>
  );
}
