function saveJournal() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var journalContent = document.getElementById("journal").value;
  
    // 檢查是否有填寫日誌內容
    if (year && month && day && journalContent) {
      var date = year + "-" + month + "-" + day;
      var journalEntry = {
        date: date,
        content: journalContent
      };
  
      // 從 localStorage 中讀取現有的日誌列表
      var journalList = JSON.parse(localStorage.getItem("journalList")) || [];
      // 將新的日誌添加到列表的開頭
      journalList.unshift(journalEntry);
      // 將更新後的日誌列表存回 localStorage
      localStorage.setItem("journalList", JSON.stringify(journalList));
  
      // 清空輸入框
      document.getElementById("year").value = "";
      document.getElementById("month").value = "";
      document.getElementById("day").value = "";
      document.getElementById("journal").value = "";
  
      // 更新顯示日誌列表
      displayJournalList();
    } else {
      alert("請填寫完整日誌內容！");
    }
  }
  function deleteJournal(index) {
    var journalList = JSON.parse(localStorage.getItem("journalList")) || [];
    // 移除指定索引的日誌項目
    journalList.splice(index, 1);
    // 將更新後的日誌列表存回 localStorage
    localStorage.setItem("journalList", JSON.stringify(journalList));
    // 更新顯示日誌列表
    displayJournalList();
  }
  function editJournal(index) {
    var journalList = JSON.parse(localStorage.getItem("journalList")) || [];
    var entry = journalList[index];
  
    // 顯示修改欄位及儲存按鈕
    var yearInput = document.createElement("input");
    yearInput.type = "number";
    yearInput.value = entry.date.split("-")[0];
    var monthInput = document.createElement("input");
    monthInput.type = "number";
    monthInput.value = entry.date.split("-")[1];
    var dayInput = document.createElement("input");
    dayInput.type = "number";
    dayInput.value = entry.date.split("-")[2];
    var contentInput = document.createElement("textarea");
    contentInput.value = entry.content;
    var saveButton = document.createElement("button");
    saveButton.textContent = "儲存";
    saveButton.onclick = function() {
      entry.date = yearInput.value + "-" + monthInput.value + "-" + dayInput.value;
      entry.content = contentInput.value;
      // 將更新後的日誌列表存回 localStorage
      localStorage.setItem("journalList", JSON.stringify(journalList));
      // 更新顯示日誌列表
      displayJournalList();
    };
  
    // 替換原來的內容為修改欄位及儲存按鈕
    var listItem = document.getElementById("journalItem-" + index);
    listItem.innerHTML = "";
    listItem.appendChild(yearInput);
    listItem.appendChild(monthInput);
    listItem.appendChild(dayInput);
    listItem.appendChild(contentInput);
    listItem.appendChild(saveButton);
  }
  function displayJournalList() {
    var journalList = JSON.parse(localStorage.getItem("journalList")) || [];
    var journalListElement = document.getElementById("journalList");
    // 清空現有的日誌列表
    journalListElement.innerHTML = "";
    // 逐個添加日誌項目到列表中
    journalList.forEach(function(entry, index) {
      var listItem = document.createElement("li");
      listItem.id = "journalItem-" + index;
      listItem.textContent = entry.date + "：" + entry.content;
  
      // 添加刪除按鈕

  
      // 添加修改按鈕
      var editButton = document.createElement("button");
      editButton.textContent = "修改";
      editButton.onclick = function() {
        editJournal(index);
      };
      listItem.appendChild(editButton);
      
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "刪除";
      deleteButton.onclick = function() {
        deleteJournal(index);
      };
      listItem.appendChild(deleteButton);
      journalListElement.appendChild(listItem);
    });
  }
  
  // 頁面加載時顯示已存儲的日誌
  displayJournalList();