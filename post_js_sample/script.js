const messageField = document.getElementById('message-field')
const button = document.getElementById('message-button')
const messageList = document.getElementById('message-list')

const addMessage = () => {
  messageList.insertAdjacentHTML('afterbegin', `<p>${messageField.value}</p>`)
  messageField.value = ''
}

// ボタンクリックで投稿
button.onclick = () => addMessage()

// enterキーで投稿
messageField.onkeydown = (e) => {
  if (e.keyCode == '13') addMessage()
}
