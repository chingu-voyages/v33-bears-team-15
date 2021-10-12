import DashLayout from '~/components/layouts/dash';
import Page from '~/components/dashboard/page';
import PlusIcon from '~/assets/icons/plusIcon';
import Link from '~/components/common/link';
import Table from '~/components/ui/table';
import useRoleAuthorization from '~/hooks/use-role-authorization';
import { Role } from '~/types';

const data = [
  {
    bookname: "The Catalyst: How to Change Anyone's Mind",
    author: 'Jonah Berger',
    review: '308',
  },

  {
    bookname: 'What You Do Is Who You Are: How To Create Your Business Culture',
    author: 'Ben Horowitz',
    review: '442',
  },

  {
    bookname: 'Great by Choice: Uncertainty, Chaos',
    author: 'Morten T. Hansen',
    review: '123',
  },
] as const;

const cols = [
  {
    Header: 'Name',
    accessor: 'bookname',
    minWidth: 150,
  },
  {
    Header: 'Author',
    accessor: 'author',
    minWidth: 150,
  },
  {
    Header: 'Reviews',
    accessor: 'review',
    minWidth: 150,
  },
] as const;

export default function BookListDashboard() {
  useRoleAuthorization([Role.ADMIN, Role.SUPER_ADMIN]);

  return (
    <DashLayout>
      <Page
        title="Book List"
        withButton
        buttonProps={{
          children: (
            <>
              <PlusIcon className="w-5 mr-2" strokeWidth={3} />
              <span>New Book</span>
            </>
          ),
          as: Link,
          href: '/dashboard/books/create',
        }}
      >
        <Table columns={cols} data={data} searchKey="bookname" />
      </Page>
    </DashLayout>
  );
}
