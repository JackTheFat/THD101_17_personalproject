// !====================== 所有彈窗 ======================!
// ====================== 聯繫彈窗 ======================
// ----------- 開關按鈕
var commBtn = document.getElementById("commBtn");
commBtn.addEventListener("click", function(){
    //打開背景
    var modal = document.getElementById("modal");
    modal.classList.add("-modal_style");
    //打開視窗
    var commPopupId = document.getElementById("commPopupId");
    commPopupId.classList.add("-popup_style");

});
//點叉叉關閉視窗
var btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", function(){
    commPopupId.classList.remove("-popup_style");
    modal.classList.remove("-modal_style");
});
//點黑背景關閉視窗
var modal = document.getElementById("modal");
modal.addEventListener("click", function(){
    commPopupId.classList.remove("-popup_style");
    modal.classList.remove("-modal_style");
});
// ----------- 填空警告
const msgform = document.getElementById("msgform")
const wrongInfo = document.getElementById("wrongInfo")
msgform.addEventListener('submit', (e) => {
    e.preventDefault(); // 阻止默認送出

    const nameinput = document.getElementById('nameinput');
    const emailinput = document.getElementById('emailinput');
    const textinput = document.getElementById('textinput');

    // 檢查輸入是否為空
    if (nameinput.value.trim() === '' || 
        emailinput.value.trim() === '' || 
        textinput.value.trim() === '' ) {
        wrongInfo.style.visibility = 'visible';
    } else {
        msgform.submit(); // 送出
    }
});
// ====================== 登入會員彈窗 ======================
// ----------- 開關按鈕
var memberBtn = document.getElementById("memberBtn");
memberBtn.addEventListener("click", function(){
    console.log('memberBtn:', document.getElementById("memberBtn"));
    //打開背景
    var modal = document.getElementById("modal");
    modal.classList.add("-modal_style");
    //打開視窗
    var popupId = document.getElementById("popupId");
    popupId.classList.add("-popup_style");

});
//點叉叉關閉視窗
var btnClose = document.getElementsByClassName("btnClose")[1];
btnClose.addEventListener("click", function(){
    // console.log("a");
    popupId.classList.remove("-popup_style");
    modal.classList.remove("-modal_style");
});
//點黑背景關閉視窗
var modal = document.getElementById("modal");
modal.addEventListener("click", function(){
    popupId.classList.remove("-popup_style");
    modal.classList.remove("-modal_style");
});
// ====================== 註冊會員彈窗 ======================
var regBtn = document.getElementsByClassName("regBtn")[0];
regBtn.addEventListener("click", function(){
    // 關閉登入視窗
    popupId.classList.remove("-popup_style");
    //打開註冊視窗
    var popupRegId = document.getElementById("popupRegId");
    popupRegId.classList.add("-popup_style");

});
//點叉叉關閉視窗
var btnClose = document.getElementsByClassName("btnClose")[2];
btnClose.addEventListener("click", function(){
    // console.log("a");
    popupRegId.classList.remove("-popup_style");
    modal.classList.remove("-modal_style");
});
//點黑背景關閉視窗
var modal = document.getElementById("modal");
modal.addEventListener("click", function(){
    popupRegId.classList.remove("-popup_style");
    modal.classList.remove("-modal_style");
});
//點返回登入
var logInBtn = document.getElementsByClassName("logInBtn")[0];
logInBtn.addEventListener("click", function(){
    // 關閉註冊
    popupRegId.classList.remove("-popup_style");
    // 打開登入
    popupId.classList.add("-popup_style");
});

// ====================== 忘記密碼彈窗 ======================
var forgetPBtn = document.getElementById("forgetPBtn");
forgetPBtn.addEventListener("click", function(){
    // 關閉登入視窗
    popupId.classList.remove("-popup_style");
    popupRegId.classList.remove("-popup_style");
    //打開註冊視窗
    popupForgetId.classList.add("-popup_style");

});
//點叉叉關閉視窗
var btnClose = document.getElementsByClassName("btnClose")[3];
btnClose.addEventListener("click", function(){
    // console.log("a");
    popupId.classList.remove("-popup_style");
    popupForgetId.classList.remove("-popup_style");
    modal.classList.remove("-modal_style");
});
//點黑背景關閉視窗
var modal = document.getElementById("modal");
modal.addEventListener("click", function(){
    popupId.classList.remove("-popup_style");
    popupRegId.classList.remove("-popup_style");
    modal.classList.remove("-modal_style");
});

//點返回登入
var logInBtn = document.getElementsByClassName("logInBtn")[1];
logInBtn.addEventListener("click", function(){
    // 關閉忘記密碼
    popupForgetId.classList.remove("-popup_style");
    // 打開登入
    popupId.classList.add("-popup_style");
});

// 點加入會員
var regBtn = document.getElementsByClassName("regBtn")[1];
regBtn.addEventListener("click", function(){
    // 關閉登入視窗
    popupId.classList.remove("-popup_style");
    //打開註冊視窗
    var popupRegId = document.getElementById("popupRegId");
    // 關閉其他會員彈窗
    popupId.classList.remove("-popup_style");
    popupForgetId.classList.remove("-popup_style");
    // 開啟加入會員彈窗
    popupRegId.classList.add("-popup_style");

});