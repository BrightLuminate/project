function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 올바른 인증 정보
    var correctUsername = "1234";
    var correctPassword = "1234";

    // 인증 정보 확인
    if(username === correctUsername && password === correctPassword) {
        // 프로젝트 페이지로 리디렉션
        window.location.href = "index2";
    } else {
        alert("잘못된 인증 정보");
    }
}

function logout() {
    // 로그인 컨테이너 표시
    document.getElementById('login-container').style.display = 'block';
    // 로그아웃 컨테이너 숨김
    document.getElementById('logout-container').style.display = 'none';
    // 입력 필드 지우기
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
