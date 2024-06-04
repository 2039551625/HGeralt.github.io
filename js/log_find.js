// 定义默认用户与密码
window.persons = [
    {"user": "hsb", "passwd": "123"},
    {"user": "202232221002", "passwd": "123"},
    {"user": "HGeralt", "passwd": "123"}
]

// 将每个账户加载到localStorage
function loadAccount() {
    //确保只加载一次
    if(!localStorage.getItem('accountsLoaded')) {
        for (let item of persons) {
            localStorage.setItem(item.user, item.passwd);
        }
    }
    localStorage.setItem('accountsLoaded', 'true');
}

function loginAction(user, passwd) {
    loadAccount();
    console.log(user + passwd);
    let passwd1 = localStorage.getItem(user);
    console.log(passwd1);
    if(passwd == passwd1) {
        window.open('./blog_detail.html','_self');
    } else {
        mypassword.value="";
        openPopup();
    }
} 


function refind(user) {
    loadAccount();
    var para = document.querySelector('#popup p');
    var head = document.querySelector('#popup h2');
    if(localStorage.hasOwnProperty(user)) {
        head.textContent = '该用户存在';
        para.textContent = '密码为' + localStorage.getItem(user);
    } else {
        head.textContent = user+'用户不存在';
        para.textContent = '请重新输入';
    }
    openPopup();
}1