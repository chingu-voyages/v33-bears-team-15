import { useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import DashLayout from '~/components/layouts/dash';
import Page from '~/components/dashboard/page';
import Button from '~/components/ui/button';
import Input from '~/components/ui/input';
import Select from '~/components/ui/select';
import Textarea from '~/components/ui/textarea';
import UploadIcon from '~/assets/icons/uploadIcon';
import PlusIcon from '~/assets/icons/plusIcon';
import useAuth from '~/hooks/use-auth';
import { CREATE_BOOK_SCHEMA } from '~/utils';
import {
  useCreateBookMutation,
  useGetAllAuthorsQuery,
  useGetAllCategoriesQuery,
} from '~/services/api';
import { CreateBookDto, FormSelect } from '~/types';

const DEFAULT_FORM_VALUES = {
  name: '',
  description: '',
  cover: {},
  file: {},
  isbn: 0,
  author: {},
  categories: [],
} as CreateBookDto;

export default function BookCreateDashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
    control,
    setValue,
  } = useForm<CreateBookDto>({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(CREATE_BOOK_SCHEMA as any),
    mode: 'all',
  });
  const { data: categoryData, isLoading: categoryLoading } = useGetAllCategoriesQuery();
  const { data: authorData, isLoading: authorLoading } = useGetAllAuthorsQuery();
  const { currentUser } = useAuth();
  const [createBook] = useCreateBookMutation();
  const [serverErrorState, setServerError] = useState<string | null>(null);
  const [pdfPreviewName, setPdfPreviewName] = useState<string | null>(null);
  const [coverPreviewName, setCoverPreviewName] = useState<string | null>(null);

  const onSelectInit = (selectRawData: any): any => {
    return selectRawData.map((c: any) => ({ value: c._id, label: c.name }));
  };

  const processSelect = (data: FormSelect[]) => {
    return data.map((c) => c.value);
  };

  const onSubmitHandler: SubmitHandler<CreateBookDto> = async (formDto) => {
    try {
      const fd = new FormData();
      fd.append('name', formDto.name);
      fd.append('description', formDto.description);
      fd.append('cover', formDto.cover);
      fd.append('file', formDto.file);
      fd.append('isbn', String(formDto.isbn));
      fd.append('categories', String(processSelect(formDto.categories)));
      fd.append('author', formDto.author.value);
      fd.append('publisher', currentUser._id);
      fd.append('releaseDate', String(Date.now()));

      await createBook(fd);

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

          <div className="col-span-2 bg-gray-50 dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 rounded-xl p-6 space-y-8">
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
              <div className="h-20 bg-gray-100 dark:bg-gray-900 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:opacity-80">
                <UploadIcon className="w-14 mr-6" strokeWidth={1} />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg pb-1">
                    {coverPreviewName ? 'Selected' : 'Select cover image'}
                  </span>
                  <span className="text-sm">
                    {coverPreviewName ? (
                      <span className="text-green-500 dark:text-green-400 underline">
                        {coverPreviewName}
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
                id="cover"
                name="cover"
                accept="image/jpeg,image/png,image/webp"
                type="file"
                className="sr-only"
                onChange={({ target }) => {
                  setCoverPreviewName(target.files[0].name);
                  setValue('cover', target.files[0]);
                }}
              />
            </label>

            <label htmlFor="file" className="relative cursor-pointer block">
              <div className="h-20 bg-gray-100 dark:bg-gray-900 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:opacity-80">
                <UploadIcon className="w-14 mr-6" strokeWidth={1} />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg pb-1">
                    {pdfPreviewName ? 'Selected' : 'Select book PDF file'}
                  </span>
                  <span className="text-sm">
                    {pdfPreviewName ? (
                      <span className="text-green-500 dark:text-green-400 underline">
                        {pdfPreviewName}
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

              <Input
                id="file"
                name="file"
                accept="application/pdf,application/vnd.ms-excel"
                type="file"
                className="sr-only"
                onChange={({ target }) => {
                  setPdfPreviewName(target.files[0].name);
                  setValue('file', target.files[0]);
                }}
              />
            </label>
          </div>

          <div className="col-span-1 space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 rounded-xl p-6 space-y-8 h-[fit-content]">
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

              <Controller
                name="author"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  const { ref, ...restField } = field;

                  return (
                    <Select
                      // @ts-ignore
                      inputRef={ref}
                      isLoading={authorLoading}
                      placeholder="Select author"
                      options={authorLoading ? null : onSelectInit(authorData)}
                      {...restField}
                    />
                  );
                }}
              />

              <Controller
                name="categories"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  const { ref, ...restField } = field;

                  return (
                    <Select
                      // @ts-ignore
                      inputRef={ref}
                      isMulti
                      isLoading={categoryLoading}
                      placeholder="Select categories"
                      options={categoryLoading ? null : onSelectInit(categoryData)}
                      {...restField}
                    />
                  );
                }}
              />
            </div>

            <Button
              type="submit"
              colorScheme="primary"
              className="h-[fit-content] flex items-center"
            >
              <PlusIcon className="w-5 mr-2" strokeWidth={3} />
              <span>{isSubmitting ? 'Creating...' : 'Create Book'}</span>
            </Button>
          </div>
        </form>
      </Page>
    </DashLayout>
  );
}
