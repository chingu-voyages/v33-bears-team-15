import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import DashLayout from '~/components/layouts/dash';
import Page from '~/components/dashboard/page';
import Button from '~/components/ui/button';
import Input from '~/components/ui/input';
import Textarea from '~/components/ui/textarea';
import UploadIcon from '~/assets/icons/uploadIcon';
import PlusIcon from '~/assets/icons/plusIcon';

type FormValues = {
  name: string;
  description: string;
  cover: any;
  file: any;
  isbn: string;
  author: string;
};

const DEFAULT_FORM_VALUES = {
  name: '',
  description: '',
  cover: null,
  file: null,
  isbn: '',
  author: '',
} as FormValues;

export default function BookCreateDashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
  } = useForm<FormValues>({
    defaultValues: DEFAULT_FORM_VALUES,
    mode: 'all',
  });

  const [serverErrorState, setServerError] = useState<string | null>(null);

  const onSubmitHandler: SubmitHandler<FormValues> = async () => {
    try {
      // @TODO Implement submit
      // await onSubmit(formData.email, formData.password);

      reset(DEFAULT_FORM_VALUES);
      setServerError(null);
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <DashLayout>
      <Page title="Create new book">
        <form className="grid grid-cols-3 gap-8" onSubmit={handleSubmit(onSubmitHandler)}>
          {serverErrorState && (
            <span
              role="alert"
              className="block text-sm dark:text-red-500 text-red-700 mb-2.5 pl-0.5"
            >
              {serverErrorState}
            </span>
          )}

          <div className="col-span-2 bg-gray-50 shadow-lg border border-gray-200 rounded-xl p-6 space-y-8">
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Book name"
              aria-invalid={!!errors.name}
              isError={errors.name && touchedFields.name}
              error={errors.name?.message}
              {...register('name')}
            />

            <Textarea
              name="description"
              id="description"
              placeholder="Write a book description..."
              rows={5}
              aria-invalid={!!errors.description}
              isError={errors.description && touchedFields.description}
              error={errors.description?.message}
              {...register('description')}
            />

            <label htmlFor="cover" className="relative cursor-pointer block">
              <div className="h-20 bg-gray-100 flex items-center justify-center border border-gray-300 rounded-lg hover:opacity-80">
                <UploadIcon className="w-14 mr-6" strokeWidth={1} />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg pb-1">Select cover image</span>
                  <span className="text-sm">
                    Click here to{' '}
                    <span className="text-green-500 dark:text-green-400 underline">
                      browse
                    </span>{' '}
                    through your machine
                  </span>
                </div>
              </div>

              <Input
                id="cover"
                name="cover"
                accept="image/jpeg,image/png"
                type="file"
                className="sr-only"
              />
            </label>

            <label htmlFor="file" className="relative cursor-pointer block">
              <div className="h-20 bg-gray-100 flex items-center justify-center border border-gray-300 rounded-lg hover:opacity-80">
                <UploadIcon className="w-14 mr-6" strokeWidth={1} />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg pb-1">Select book PDF file</span>
                  <span className="text-sm">
                    Click here to{' '}
                    <span className="text-green-500 dark:text-green-400 underline">
                      browse
                    </span>{' '}
                    through your machine
                  </span>
                </div>
              </div>

              <Input
                id="file"
                name="file"
                accept="image/jpeg,image/png"
                type="file"
                className="sr-only"
              />
            </label>
          </div>

          <div className="col-span-1 space-y-8">
            <div className="bg-gray-50 shadow-lg border border-gray-200 rounded-xl p-6 space-y-8 h-[fit-content]">
              <Input
                type="number"
                name="isbn"
                id="isbn"
                placeholder="Book ISBN"
                aria-invalid={!!errors.isbn}
                isError={errors.isbn && touchedFields.isbn}
                error={errors.isbn?.message}
                {...register('isbn')}
              />

              <Input
                type="text"
                name="author"
                id="author"
                placeholder="Author ID"
                aria-invalid={!!errors.author}
                isError={errors.author && touchedFields.author}
                error={errors.author?.message}
                {...register('author')}
              />
            </div>

            <Button colorScheme="primary" className="h-[fit-content] flex items-center">
              <PlusIcon className="w-5 mr-2" strokeWidth={3} />
              <span>{isSubmitting ? 'Creating...' : 'Create Book'}</span>
            </Button>
          </div>
        </form>
      </Page>
    </DashLayout>
  );
}
