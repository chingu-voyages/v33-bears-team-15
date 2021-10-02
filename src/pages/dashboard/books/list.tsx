import DashLayout from '~/components/layouts/dash';
import Page from '~/components/dashboard/page';
import PlusIcon from '~/assets/icons/plusIcon';
import Link from '~/components/common/link';

export default function BookListDashboard() {
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
          href: '/dahsboard/books/create',
        }}
      >
        list
      </Page>
    </DashLayout>
  );
}
