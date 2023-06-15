DefaultBtn 컴포넌트로 추출

Tabs 컴포넌트로 추출 :
tab과 delBtn, toggleBtn을 props로 받고
tab 내부에는 id, title, detail, isDone 가 있다.

DefaultBtn (기본버튼)을 불러와서 각 버튼마다 삽입.
각 버튼이 클릭될 때 마다 실행되는 함수는 다르며,
deleBtn은 삭제,
toggleBtn은 boolean 값으로 각 tab의 isDone의 true : false 값에
따라 상태가 변경된다.

컴포넌트를 내보낼 때에는 최하단에 [ export default 이름] 을 입력하여 내보낸다.
