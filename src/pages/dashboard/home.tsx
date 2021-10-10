import DashLayout from '~/components/layouts/dash';
import useRoleAuthorization from '~/hooks/use-role-authorization';
import { Role } from '~/types';

export default function HomeDashboard() {
  useRoleAuthorization([Role.ADMIN, Role.SUPER_ADMIN]);

  return <DashLayout>home</DashLayout>;
}
