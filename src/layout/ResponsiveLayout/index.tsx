import { Suspense } from 'react';
import MainPage from '@/pages/MainPage';
import RoutesComponent from '@/routes/Routes';
import { useBreakpoint } from '@/hooks';
import { Loading } from '@/components/common';
import { TaskListPage, ShapeListPage } from '@/pages';
import {
  DesktopContainer,
  DesktopColumn,
  MobileContainer,
} from '@/layout/ResponsiveLayout/index.styles';

/**
 * 브레이크포인트에 따라 데스크톱(3열) / 모바일(라우팅) 레이아웃 전환
 */
const ResponsiveLayout = () => {
  const { isAboveBreakpoint: isDesktop } = useBreakpoint({ breakpoint: 768 });

  if (isDesktop) {
    return (
      <DesktopContainer>
        <DesktopColumn>
          <MainPage />
        </DesktopColumn>
        <DesktopColumn>
          <Suspense fallback={<Loading />}>
            <TaskListPage />
          </Suspense>
        </DesktopColumn>
        <DesktopColumn>
          <Suspense fallback={<Loading />}>
            <ShapeListPage />
          </Suspense>
        </DesktopColumn>
      </DesktopContainer>
    );
  }

  return (
    <MobileContainer>
      <RoutesComponent />
    </MobileContainer>
  );
};

export default ResponsiveLayout;
