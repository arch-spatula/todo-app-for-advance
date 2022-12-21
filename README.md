# Commit Convention

Commit Message 규칙 (Commit Convention)

`feat` : 새로운 기능 추가

`fix` : 버그 수정

`docs` : 문서 관련(주석 및 README 수정)

`style` : 스타일 변경 (포매팅 수정, 들여쓰기 추가, …)

`build` : 빌드 관련 파일 수정

`ETC`: 기타 수정

```txt
(유형), 커밋 제목 #이슈번호

(내용을 입력합니다. 3줄이하 생략가능합니다.)
```

## git amend

`git push`하기 전에 작은 수정이 필요하면 아래 커맨드로 해결합니다.

```sh
git add .
git commit --amend --no-edit
```

# start

```sh
yarn start # 리액트를 실행합니다.
```

```sh
yarn json-server --watch db.json --port 3001 # 모의 서버를 실행합니다.
```

# Tech Stack

React, Redux, JSON Server, Style Component, react-router-dom, axios
