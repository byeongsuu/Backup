/*
    < confirm > - 확인/취소 버튼을 제공하는 대화상자 활성화.

- 사용자가 확인 또는 취소 버튼을 누를 때까지 메시지가 창에 보여지고
  사용자가 확인 버튼을 누르면 true를, 취소 버튼이나 Esc를 누르면 false를 반환.

형식    :    confirm( message? : string ) : boolean

-----------------------------------------------------------------------------------

    < close > - 브라우저 창 닫기.

- IE에서는 정상적으로 동작하나 크롬에서는 단독 창에서는 실행되지 않음.
  크롬에서 실행 시 'Scripts may close only the windows that were opened by them.'
  이와 같은 경고와 함께 실행되지 않음.
  이는 크롬의 보안 정책상 독립창에서 자기 자신 창을 닫는 것을 금지.

※ 이상은 비동기적 처리 상황에 해당하는 것이며 동기적 처리 상황에서는 정상적으로
   실행되는 것을 확인 가능.

*/

'use strict';

const id = 'psy7758';

for (let inputId;;) {
    inputId = prompt('아이디 입력');

    if (confirm('아이디가 정확합니까?')) {
        if (inputId === id) {
            alert('입력한 아이디가 정확히 일치합니다.');
            break;
        } else {
            alert('아이디가 일치하지 않습니다. 재입력 바랍니다.');
        }
    }
}

close();