
# 其他
- 註解 //
- VS code 註解快捷鍵: ctrl + /

# 資料類型
## number 數值
### number 函式
- 固定小數位數 toFixed()
- 四捨五入 Math.round

## string 字串
- 在 body 區塊的尾段引入 js 檔, 讓網頁載入速度的體感更快
- 加號 '+' 結合字串
- 字串模板: 反引號 `` + 變數${}，把變數插入字串中
### string 函式
- 顯示字串長度 string.length 
- 替代部分字串 string.replace("原字樣", "新字樣")
- 擷取部分字串 string.slice(起始索引, 結束索引)

## 布林 boolean
### 注意
- 兩個等於 == 只判斷數值 不管型別, 所以 60 == "60" 會得到 true
- 三個等於 === 會將值跟型別一起判斷, 所以 60 === "60" 會得到 false