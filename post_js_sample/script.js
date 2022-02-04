const messageField = document.getElementById('message-field')
const button = document.getElementById('message-button')
const messageList = document.getElementById('message-list')

button.onclick = () => {
  messageList.insertAdjacentHTML('afterbegin', `<p>${messageField.value}</p>`)
}
