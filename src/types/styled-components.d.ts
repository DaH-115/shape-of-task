import 'styled-components';
import { DeviceTypes, SizeTypes } from 'styles/theme-device';
import { CommonColorsTypes, PaletteTypes } from 'styles/theme-colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    // 반응형 브레이크포인트 크기
    size: SizeTypes;

    // 미디어 쿼리 디바이스 설정
    device: DeviceTypes;

    // 공통 색상 (흑백, 회색 계열)
    commonColors: CommonColorsTypes;

    // 테마별 색상 팔레트
    colors: PaletteTypes;

    // CSS 믹스인 (재사용 가능한 스타일)
    mixins: {
      hideScrollbar: string;
    };
  }
}
