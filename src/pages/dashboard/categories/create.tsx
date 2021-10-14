import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import DashLayout from '~/components/layouts/dash';
import Page from '~/components/dashboard/page';
import Button from '~/components/ui/button';
import Input from '~/components/ui/input';
import Textarea from '~/components/ui/textarea';
import PlusIcon from '~/assets/icons/plusIcon';
import { CREATE_CATEGORY_SCHEMA } from '~/utils';
import { CreateCategoryDto } from '~/types/category.type';
import { useCreateCategoryMutation } from '~/services/api';

const DEFAULT_FORM_VALUES = {
  name: '',
  description: '',
} as CreateCategoryDto;

export default function CategoryCreateDashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
  } = useForm<CreateCategoryDto>({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(CREATE_CATEGORY_SCHEMA as any),
    mode: 'all',
  });
  const [createCategory] = useCreateCategoryMutation();
  const [serverErrorState, setServerError] = useState<string | null>(null);

  const onSubmitHandler: SubmitHandler<CreateCategoryDto> = async (formDto) => {
    try {
      await createCategory(formDto);

      reset(DEFAULT_FORM_VALUES);
      setServerError(null);
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <DashLayout>
      <Page title="Create new category">
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
              placeholder="Category name"
              aria-invalid={!!errors.name}
              isError={errors.name && touchedFields.name}
              error={errors.name?.message}
              {...register('name')}
            />

            <Textarea
              name="description"
              id="description"
              placeholder="Write a category description..."
              rows={5}
              aria-invalid={!!errors.description}
              isError={errors.description && touchedFields.description}
              error={errors.description?.message}
              {...register('description')}
            />
          </div>

          <div className="col-span-1 space-y-8">
            <Button
              type="submit"
              colorScheme="primary"
              className="h-[fit-content] flex items-center"
            >
              <PlusIcon className="w-5 mr-2" strokeWidth={3} />
              <span>{isSubmitting ? 'Creating...' : 'Create category'}</span>
            </Button>
          </div>
        </form>
      </Page>
    </DashLayout>
  );
}
