import DashLayout from '~/components/layouts/dash';
import Page from '~/components/dashboard/page';
import PlusIcon from '~/assets/icons/plusIcon';
import Link from '~/components/common/link';
import Table from '~/components/ui/table';
import useRoleAuthorization from '~/hooks/use-role-authorization';
import { Role } from '~/types';
import { useGetAllCategoriesQuery } from '~/services/api';

const cols = [
  {
    Header: 'Name',
    accessor: 'name',
    minWidth: 150,
  },
  {
    Header: 'Description',
    accessor: 'description',
    minWidth: 150,
  },
] as const;

export default function CategoryListDashboard() {
  const { data, isLoading } = useGetAllCategoriesQuery();

  useRoleAuthorization([Role.ADMIN, Role.SUPER_ADMIN]);

  return (
    <DashLayout>
      <Page
        title="Category List"
        withButton
        buttonProps={{
          children: (
            <>
              <PlusIcon className="w-5 mr-2" strokeWidth={3} />
              <span>New Category</span>
            </>
          ),
          as: Link,
          href: '/dashboard/categories/create',
        }}
      >
        {isLoading ? (
          'Loading...'
        ) : (
          <Table
            columns={cols}
            data={data as any}
            searchKey="name"
            editHref="/dashboard/categories"
            editAccessor="_id"
          />
        )}
      </Page>
    </DashLayout>
  );
}
