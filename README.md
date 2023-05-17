# ✨ 오늘 내가 할 일은 ‘세모-네모-동그라미’

💻 **Website**: [https://tsc-todo-list.vercel.app](https://tsc-todo-list.vercel.app/)

<img src="https://i.ibb.co/hgFC2y5/P1-mobile.png" alt="TSC-TodoList-mobile-view" />
<img src="https://i.ibb.co/S6mkBc6/P1-desktop.png" alt="TSC-TodoList-desktop-view" />

<세모-네모-동그라미>는 할 일의 우선 순위를 세모, 네모, 동그라미 도형으로 지정하여 리스트와 이미지로 만들 수 있는 투두 리스트 앱입니다. 사용자가 할 일을 완료하면, 처음에 지정한 도형 이미지가 쌓여집니다. 이를 통해 사용자는 일을 모두 마치고 직접 눈으로 성취감을 느낄 수 있도록 설계되었습니다.

# 사용한 기술

- **React**

- **Redux-toolkit**

- **React-router**

- **Styled-components**

# 설명

- 투두를 입력할 <새로운 일> 버튼을 누르면 모달창이 뜹니다.

- 투두를 입력하고 우선 순위에 따라 도형을 선택한 뒤 투두를 목록에 추가합니다.

  - SVG 파일을 사용하여 선택에 따라 색상 변경이 가능하도록 구현했습니다.
  - 내용과 도형 둘 중 하나라도 입력하지 않으면 Alert가 뜹니다.
  - 투두는 사이트를 닫아도 계속 유지됩니다.

- 투두를 클릭하면 기존에 선택한 도형이 추가되었다는 Notification이 뜨고 <도형> 페이지에 추가됩니다.

  - React Portal로 Notification을 구현했습니다.
  - 데스크탑 화면에서는 도형 리스트가 오른쪽 화면에 나타납니다.

- 오른쪽 상단 <이미지> 버튼을 누르면 자신이 만든 도형 리스트를 이미지로 변경할 수 있습니다.

- <설정> 버튼을 누르면 슬라이드 메뉴가 나오며, 도형의 색상 및 전체 테마 색상을 변경할 수 있습니다.
  - Styled-components와 localStorage를 사용하여 디자인 테마의 색상을 변경 가능하도록 구현했습니다.
  - 변경한 색상은 창을 닫아도 계속 유지됩니다.
