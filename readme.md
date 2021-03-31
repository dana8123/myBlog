# Blog whit node.js

express, mongoDB
CRUD
without Log in 

## what's in myBlog
1. 글목록 조회 
   - [x] 제목,작성자명,작성날짜 조회 
   - [x] 작성날짜 기준 내림차순 정렬하기  
   - [x] 특정 게시글을 클릭할 경우 게시글 조회 페이지로 이동하기
2. 게시글 작성 페이지
   - [x] 제목,작성자명,비밀번호,작성내용 입력하기 
   - [x] 글쓰기 버튼 클릭하면 전체 게시글 목록 조회 페이지로 이동
   - [x] 최신글이 최상단에 위치
3. 게시글 조회 페이지
   - [x] 제목,작성자명,작성날짜,작성내용을 올리기
4. 게시글 수정 페이지
   - [x] 작성페이지와 동일한 폼, 수정하기 버튼을 눌렀던 게시글이 나오게하기
   - [x] 비밀번호란 비워두기
   - [x] 수정하기,삭제하기 버튼 생성
   - [x] 입력된 비밀번호와 동일할 때만 수정하기
   - [x] 입력된 비밀번호와 동일할 때만 삭제하기
5. AWS 배포하기

# UPDATE

회원가입, 로그인, 댓글 CRUD 기능을 추가 예정입니다. (3/29~)

   - [x] 회원가입
   - [x] 로그인
   - [x] 유저인증
   - [x] 댓글 조회하기
     - [x] 로그인하지않은 사용자도 댓글 조회
     - [x] 현재 조회중인 게시글의 댓글 모두 조회(목록형식)
     - [x] 댓글 목록 위 댓글 작성란 만들기 
   - [ ] 댓글 작성하기
     - [x] 로그인 한 사용자만 댓글 작성하기
     - [ ] 로그인 하지 않은 사용자가 댓글 작성란 누르면 알람 띄우기
     - [x] 게시글 하단에 댓글 작성버튼 만들기
     - [ ] 댓글 내용란이 비워져있을 경우, 알람 띄우기
   - [ ] 댓글 수정하기
     - [ ] 내가 작성한 댓글만 수정하도록 하기
     - [ ] 댓글 본문이 사라지고, 댓글 내용, 저장 버튼 생성하기
     - [ ] 댓글 내용에는 이전에 입력했던 댓글 내용을 기본값으로 채우기
     - [ ] 수정할 댓글 내용은 비어있지 않도록 하기
     - [ ] 저장버튼을 누를 경우 수정내용으로 바꾸기
   - [ ] 댓글 삭제하기
     - [ ] 내가 작성한 댓글만 삭제 가능
     - [ ] 삭제 시 알람 띄우기(정말 삭제하시겠습니까? 확인버튼)
   - [] 간단한 css 작업