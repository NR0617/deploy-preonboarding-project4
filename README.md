
## **✨ 배포링크**

## [페이지 바로가기](https://phenomenal-cendol-ac68ea.netlify.app/)

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/94212747/221352944-f475883e-53cc-4916-80f8-8ffbbf99502c.gif)


## 📝 목차

- [📰 프로젝트 설명](#-프로젝트-설명)
- [🛠️ Dev Tools](#-dev-tools)
- [🖥 프로젝트 실행 방법](#-프로젝트-실행-방법)

## **📰 프로젝트 설명**

광고 현황 대시보드 및 광고 관리 서비스입니다.

## **🛠 Dev Tools**

![badge](https://img.shields.io/badge/React-61dafb?logo=React&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/redux_toolkit-764ABC?style=flat-square&logo=redux&logoColor=black) ![badge](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styled%20components&logoColor=white) ![badge](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white)

## **🖥 프로젝트 실행 방법**

```sh
### Installation
# Repositorie Clone
git clone git@github.com:NR0617/deploy-preonboarding-project4.git

# npm으로 설치 진행
deploy-preonboarding-project4 % npm install

### Usage
# Local Dev Server 실행
deploy-preonboarding-project4 % npm start

```
## **📝 디렉토리 구조**

```sh
📂 pre-onboarding-7th-2-2-9
┣ 📂 public
┣ 📂 src
┃   ┣ 📂 apis             # axios 호출 관련
┃   ┣ 📂 asset            # 파일들 (이미지 파일 등)
┃   ┣ 📂 components       # component 모음
┃   ┣ 📂 costants         # constant 모음
┃   ┣ 📂 pages            # 페이지 단위로 구분     
┃   ┣ 📂 reducer          # slice 디렉토리
┃   ┣ 📂 styles           # global style
┃   ┗ 📂 utils            # 재사용성 높은 함수 모음
┗ 📄 README.md
```



## 🔒 팀 규칙

<details>
<summary>커밋 규칙</summary>
<div markdown="1">

## **commit message 규칙**

⭐ feat : 새로운 기능에 대한 커밋

🎨 ui : 새로운 CSS관련 디자인에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 파일 이동, 파일명 수정, 변수 제거 등의 자잘한 수정에 대한 커밋

⚒ refactor : 코드 리팩토링에 대한 커밋

📝 style : 공백 제거와 같은, 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지 ⚠ 무엇을 했는지 명확하게 작성

</div>
</details>

<details>
<summary>코딩 컨벤션 규칙</summary>
<div markdown="1">

## **코딩 컨벤션**

> - 컴포넌트의 ID사용은 지양한다.
> - react의 state는 여러개 사용시 최소 집합을 찾아 사용한다.
> - 컴포넌트의 이벤트에서 불필요한 익명함수를 사용하지 않는다. (예시: 함수의 인자가 event 하나인 경우)
> - 코드를 설명하는 주석은 가급적 사용하지 않는다.
> - 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용한다.(예시: SYMBOLIC_CONSTANTS)
> - 반환 값이 불린인 변수는 'is'로 시작한다
> - 반환 값의 유무를 사용하는 변수는 has로 시작한다
>   > -`예시. loading -> isLoading / Error -> hasError`
> - const와 let은 사용 시점에 선언 및 할당한다.
> - 함수는 사용 전에 선언해야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.
> - 이벤트 핸들러는 'on'으로 시작한다.
> - 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.
>   > ` 한 줄짜리 블록일 경우 {}를 생략할 수 있지만, 이는 코드 구조를 애매하게 만든다. 당장은 두 줄을 줄일 수 있겠지만 이후 오류 발생 확률이 높아 잠재된 위험 요소가 된다.` >> `단, map과 같은 화살표 함수의 암시적 반환은 허용한다. `
> - API 인스턴스를 만드는 함수는 API/axiosInstance.js 파일내에서 axiosInstance 라는 이름으로 통일한다

</div>
</details>

<details>
<summary>Lint, Formatter 규칙</summary>
<div markdown="1">

## **Prettier, ESLint 규칙**

##### prettier

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

##### ESLint

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

 </div>
  </details>

## 📚 사용 Library

<details>
<summary>Lib List</summary>
<div markdown="1">

### 공통 Lib

- eslint
- eslint-config-prettier
- husky
- prettier

### 차트 Lib

- Recharts
</div>
</details>
