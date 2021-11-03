import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import DashLayout from '~/components/layouts/dash';
import Page from '~/components/dashboard/page';
import Button from '~/components/ui/button';
import Input from '~/components/ui/input';
import Textarea from '~/components/ui/textarea';
import PlusIcon from '~/assets/icons/plusIcon';
import { CREATE_AUTHOR_SCHEMA } from '~/utils';
import { CreateAuthorDto } from '~/types';
import { useCreateAuthorMutation } from '~/services/api';
import UploadIcon from '~/assets/icons/uploadIcon';

const DEFAULT_FORM_VALUES = {
  name: '',
  biography: '',
  books: [],
  avatar: {},
} as CreateAuthorDto;

export default function AuthorCreateDashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
    setValue,
  } = useForm<CreateAuthorDto>({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(CREATE_AUTHOR_SCHEMA as any),
    mode: 'all',
  });
  const [createAuthor] = useCreateAuthorMutation();
  const [serverErrorState, setServerError] = useState<string | null>(null);
  const [avatarPreviewName, setAvatarPreviewName] = useState<string | null>(null);

  const onSubmitHandler: SubmitHandler<CreateAuthorDto> = async (formDto) => {
    try {
      const fd = new FormData();
      fd.append('name', formDto.name);
      fd.append('biography', formDto.biography);
      fd.append('avatar', formDto.avatar);
      fd.append('books', '[]');

      await createAuthor(fd);

      reset(DEFAULT_FORM_VALUES);
      setServerError(null);
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <DashLayout>
      <Page title="Create new author">
        <form className="grid grid-cols-3 gap-8" onSubmit={handleSubmit(onSubmitHandler)}>
          {serverErrorState && (
            <span
              role="alert"
              className="block text-sm dark:text-red-500 text-red-700 mb-2.5 pl-0.5"
            >
              {serverErrorState}
            </span>
          )}

          <div className="col-span-2 bg-gray-50 dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 rounded-xl p-6 space-y-8">
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Author name"
              aria-invalid={!!errors.name}
              isError={errors.name && touchedFields.name}
              error={errors.name?.message}
              {...register('name')}
            />

            <Textarea
              name="biography"
              id="biography"
              placeholder="Write an author biography..."
              rows={5}
              aria-invalid={!!errors.biography}
              isError={errors.biography && touchedFields.biography}
              error={errors.biography?.message}
              {...register('biography')}
            />

            <label htmlFor="avatar" className="relative cursor-pointer block">
              <div className="h-20 bg-gray-100 dark:bg-gray-900 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:opacity-80">
                <UploadIcon className="w-14 mr-6" strokeWidth={1} />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg pb-1">
                    {avatarPreviewName ? 'Selected' : 'Select author avatar'}
                  </span>
                  <span className="text-sm">
                    {avatarPreviewName ? (
                      <span className="text-green-500 dark:text-green-400 underline">
                        {avatarPreviewName}
                      </span>
                    ) : (
                      <>
                        {' '}
                        Click here to{' '}
                        <span className="text-green-500 dark:text-green-400 underline">
                          browse
                        </span>{' '}
                        through your machine
                      </>
                    )}
                  </span>
                </div>
              </div>

              <input
                id="avatar"
                name="avatar"
                accept="image/jpeg,image/png"
                type="file"
                className="sr-only"
                onChange={({ target }) => {
                  setAvatarPreviewName(target.files[0].name);
                  setValue('avatar', target.files[0]);
                }}
              />
            </label>
          </div>

          <div className="col-span-1 space-y-8">
            <Button
              type="submit"
              colorScheme="primary"
              className="h-[fit-content] flex items-center"
            >
              <PlusIcon className="w-5 mr-2" strokeWidth={3} />
              <span>{isSubmitting ? 'Creating...' : 'Create author'}</span>
            </Button>
          </div>
        </form>
      </Page>
    </DashLayout>
  );
}
