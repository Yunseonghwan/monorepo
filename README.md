# Yarn Workspace monorepo

yarn workspace monorepo boilerPlate

## 실행방법

git clone 다운로드후 yarn or yarn install 후

yarn dev:admin and yarn dev:agent and yarn dev:client(package.json 참고)

or

yarn workspace [패키지명] dev (nextjs 실행)

react 파일인경우 yarn workspace [패키지명] start

## 프로젝트 생성 방법

npx create-next-app --typescript packages/[프로젝트 이름]
후
git 관련 파일과 node_modules파일 삭제

and

mkdir packages/components
cd packages/components
yarn init

## 라이브러리 다운

yarn add -W [라이브러리이름] (루트폴더에서 실행)

### 개별의존성 설치
