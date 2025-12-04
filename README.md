# 🚀 프로젝트명 (Project Name)
> React + Zustand 기반 당구 경기 기록 관리 시스템

## 📘 개요 (Overview)
- 사용자 친화적인 UI를 통해 당구 경기 기록을 관리할 수 있는 웹 애플리케이션입니다.
- React와 Zustand를 활용한 전역 상태 관리, 컴포넌트 구조화, 렌더링 최적화 경험 가능.

## 🧱 기술 스택 (Tech Stack)
| 구분 | 사용 기술 |
|------|------------|
| Frontend | React, Vite, CSS / SCSS |
| State Management | Zustand |
| Tools | Git, GitHub, VSCode |

## 🛠️ 설치 및 실행 (Installation & Run)
# 1. 프로젝트 클론
```bash
git clone https://github.com/kimsesdook/Billiards-Project.git
cd Billiards-Project

# 2. 의존성 설치
- npm install

# 3. 개발 서버 실행
- npm run dev

# 4. 브라우저에서 접속
- http://localhost:5173

## 📂 프로젝트 구조 (Directory Structure)
src/
├─ components/
│  └─ MatchForm/
├─ pages/
│  ├─ Home.jsx
│  ├─ LoginPage.jsx
│  ├─ SignUpPage.jsx
│  ├─ MyPage.jsx
│  ├─ PlayerPage.jsx
│  ├─ MatchPage.jsx
│  ├─ MatchListPage.jsx
│  ├─ MatchDetailPage.jsx
│  └─ MatchEditPage.jsx
├─ store/
│  ├─ useUserStore.js
│  ├─ usePlayerStore.js
│  └─ useMatchStore.js
└─ App.jsx / index.js

## 🌟 주요 기능 (Key Features)
✅ 회원가입 / 로그인 / 로그아웃
✅ 닉네임 변경 및 회원 탈퇴
✅ 선수 등록 / 관리
✅ 경기 기록 작성 / 수정 / 삭제
✅ 선수별 승/패/총 경기수 통계 자동 계산
✅ Zustand 기반 전역 상태 관리 및 자동 UI 업데이트
## 📸 화면 미리보기 (Preview)

| 기능 | 미리보기 |
|------|-----------|
홈 화면	|
로그인 화면 |	
선수 목록	|
경기 목록	|
경기 추가 |


## 💡 학습 포인트 (Learning Points)

- React 상태 관리 및 컴포넌트 구조화

- Zustand 기반 글로벌 상태 관리 및 구독 최적화

- props를 통한 컴포넌트 간 데이터 전달

- 렌더링 최적화 및 상태 동기화

- 실시간 UI 업데이트와 데이터 일관성 유지
