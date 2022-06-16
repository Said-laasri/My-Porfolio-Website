const nome = document.getElementById('name');
const emails = document.getElementById('email');
const text = document.getElementById('text');

function StoreData() {
  const dataObj = {
    fullname: nome.value,
    email: emails.value,
    comment: text.value,
  };
  localStorage.setItem('form', JSON.stringify(dataObj));
}

document.addEventListener('DOMContentLoaded', () => {
  const formData = localStorage.getItem('form');
  if (formData) {
    const formObj = JSON.parse(formData);
    nome.value = formObj.fullname;
    emails.value = formObj.email;
    text.value = formObj.comment;
  }
});

nome.onchange = StoreData();
emails.onchange = StoreData();
text.onchange = StoreData();
