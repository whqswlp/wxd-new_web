document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 这里仅作演示，实际应用中需要连接服务器验证
    if (username === '555' && password === '1234') {
      window.location.href = 'https://www.cnblogs.com/wxd501'; // 登录成功，跳转到指定网站
    } else {
      alert('用户名或密码错误');
    }
  });
});
