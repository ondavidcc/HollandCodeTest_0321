function selectLimit(limit){
    const checkedCheckboxes = document.querySelectorAll('.checkbox:checked');

    if (checkedCheckboxes.length < limit) {
        //使用者選擇太少，顯示彈窗並取消送出
        document.getElementById("popupMessage").innerHTML = "您至少需選擇6個職業！";
        document.getElementById("popupBackground").style.display = "flex";
        return false;

    }else if (checkedCheckboxes.length == limit){ 
        //數量正確則正常送出
        let version = document.createElement('input');
        version.type = "hidden";
        version.name = "ver";
        version.value = "v2";

        document.getElementById('mainForm').appendChild(version);
        document.getElementById('mainForm').action = "../result/result.html";

    }else if (checkedCheckboxes.length > limit){
        //使用者選擇超過6個

        if(/ver=[v1|v2]/.test(window.location.href)){
            //若是有query，應是在第二階段，顯示彈窗並取消送出
            document.getElementById("popupMessage").innerHTML = "您最多只能選擇6個職業！";
            document.getElementById("popupBackground").style.display = "flex";
            return false;
        }

        //則為第一頁，進入第二階段。
        //數量正確則正常送出
        let version = document.createElement('input');
        version.type = "hidden";
        version.name = "ver";
        version.value = "v1";

        document.getElementById('mainForm').appendChild(version);
        document.getElementById('mainForm').action = "../page2/index_p2.html";
    }
}