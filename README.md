# React.js를 이용한 기능 구현

## 프로젝트 실행 방법

git clone https://github.com/SeungJaeHong/coding-test.git
또는
zip 파일 다운로드 및 압축 해제

```shell
cd <YOUR DOWNLOAD DIRECTORY>

npm install

npm start
```

## 프로젝트 세팅

```shell
npx create-react-app --template typescript ./

npm install react-redux @reduxjs/toolkit msw axios styled-components react-router-dom
npm install --save-dev @types/styled-components
```

## 설치한 라이브러리 및 용도 설명

### react-redux

- React App 에서 전역적으로 상태 관리를 하기 위해서 사용

### @reduxjs/toolkit

- redux 사용시 필요한 보일러플레이트 생성을 위해서 사용

### msw

- service worker를 기반으로 구현하는 mock-server
- API mocking server를 구현하기 위해서 사용

### axios

- http request client로 사용

### styled-components

- 간단한 디자인 시스템 설정 및 스타일링 용도로 사용

### react-router-dom

- 페이지 설정 및 페이지 레이아웃 설정용으로 사용

### @types/styled-components

- styled-components의 theme 설정을 override 하기 위해서 사용

## 폴더 및 파일 구조

```
# > : 폴더, - 파일
> public
  > assets
    > images
      > icons
        - close.svg # x 모양 아이콘
        - empty.svg # 검색 결과 없음 아이콘
        - logo_musinsa.svg # 무신사 로고 아이콘
        - refresh.svg # 필터 초기화 버튼
        - search.svg # 돋보기 모양 아이콘
  - favicon.ico # 무신사 탭 로고
  - index.html # 루트 html
  - mockServiceWorker.js # mock server service-worker 세팅
> src
  > mock-server
    - goods-json.fixture.ts # 샘플데이터
    - handlers.ts # mock serve api 스펙 정의
    - index.ts # 내보내기
  > modules
    > common
      > components
        - DataEmpty.tsx # `검색 결과가 없습니다` 페이지
        - PageLayout.tsx # 고정된 헤더가 적용된 페이지
        - SimpleSpinner.tsx # 데이터 로딩 spinner
      > constants # 공통 상수 모음
        - goods.constants.ts
      > hooks # 공통 hooks 모음
        - useInfiniteScroll.tsx
      > networks # http client axios adapter (RESTful 방식)
        - header-pipe.factory.ts # header pipe
        - index.ts # 내보내기
        - network.parser.ts # response & responseError parser
        - network.type.ts # networks에서 공통으로 사용하는 types
        - rest-client.factory.ts # axios adapter factory
      > types
        - index.ts # 내보내기
        - record.ts # Record<T, E> 종류의 타입 정의
        - serializable.ts
      > utils
        - converter.util.ts # 공통으로 사용하는 유틸
        - index.ts # 내보내기
    > core
      > components # 디자인 시스템 기반 공통 컴포넌트
        - Button.tsx # 버튼
        - index.ts # 내보내기
        - Typography.tsx # 텍스트 관련
      > constants # 전역적으로 사용하는 상수값
        - image.constant.ts # public/assets 밑 이미지 경로 상수
        - index.ts # 내보내기
        - paging.constant.ts # 페이징 처리 기본값 상수
        - theme.constant.ts # 디자인 시스템에서 쓰이는 상수값 정의
      > entities # 서버 응답 객체 타입
        - common.entity.ts # 공통 응답 객체
        - goods.entity.ts # 상품 응답 객체
        - index.ts # 내보내기
      > repositories # http request로 데이터 받아오는 부분
        - goods.repository.ts # 상품 관련 api 통신
        - index.ts # 내보내기
      > utils # 전역에서 사용하는
        - flex.util.ts # css flex 설정 관련 유틸 함수
        - index.ts # 내보내기
        - theme.util.ts # theme 설정 관련 유틸 함수
      - networks.ts # http-client instance
      - override-default-theme.ts # styled-components 테마 세팅 type
      - repository.ts # repository entry 포인트
      - ResetInitialStyle.tsx # 기본 스타일 reset
      - theme.ts # theme override
      - theme.type.ts # theme override types
    > goods # 상품 페이지 관련 컴포넌트 및 스타일, 상태관리, 라우팅 등
      > components
        - Goods.styles.ts
        - Goods.tsx
        - GoodsList.tsx
        - index.ts
        - SearchFilterBox.styles.ts
        - SearchFilterBox.tsx
        - SearchToolbar.tsx
      > containers # 컴포넌트에 내려줄 데이터 및 함수를 가공하는 레이어
        - GoodsFallbackContainer.tsx
        - GoodsListContainer.tsx
        - GoodsSearchBoxContainer.tsx
        - index.ts
        - PageContainer.tsx
      > models # Component에서 받는 데이터 타입 entity에서 뷰에 맞게 가공된 형태
        - goods.model.ts
        - index.ts
      > pages # 모듈의 페이지 엔트리 포인트
        - GoodsListPage.tsx
        - index.ts
      > stores # 리덕스 관련 세팅
        - goods.converter.ts
        - goods.effect.ts
        - goods.slice.ts
        - index.ts
      > utils # goods 도메인에서 사용할 유틸 함수
        - goods.util.ts
        - index.ts
      - routes.ts # 라우트에 적용할 페이지 세팅 ex) lazy-load
    - AppRoutes.tsx # 리액트 앱 라우트 세팅
    - rootStore.ts # 리덕스 엔트리 포인트
  - App.tsx # 앱 엔트리 포인트
  - index.tsx # 앱 전역 환경 세팅
- package.json
- package-lock.json
```
