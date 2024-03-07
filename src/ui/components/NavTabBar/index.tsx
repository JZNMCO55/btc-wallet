import { useNavigate } from '@/ui/pages/MainRoute';
import { TabOption } from '@/ui/state/global/reducer';
import { colors } from '@/ui/theme/colors';

import { Column } from '../Column';
import { Grid } from '../Grid';
import { Icon, IconTypes } from '../Icon';

export function NavTabBar({ tab }: { tab: TabOption }) {
  return (
    <Grid columns={2} style={{ width: '100%', height: '67.5px', backgroundColor: colors.bg2 }}>
      <TabButton tabName="home" icon="wallet" isActive={tab === 'home'} />
      <TabButton tabName="settings" icon="settings" isActive={tab === 'settings'} />
    </Grid>
  );
}

function TabButton({ tabName, icon, isActive }: { tabName: TabOption; icon: IconTypes; isActive: boolean }) {
  const navigate = useNavigate();
  return (
    <Column
      justifyCenter
      itemsCenter
      onClick={(e) => {
        if (tabName === 'home') {
          navigate('MainScreen');
        } else if (tabName === 'settings') {
          navigate('SettingsTabScreen');
        }
      }}>
      <Icon icon={icon} color={isActive ? 'white' : 'white_muted'} />
    </Column>
  );
}