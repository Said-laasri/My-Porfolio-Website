const nome = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('text');
function StoreData() {
  const dataObj = {
    fullname: nome.value,
    email: email.value,
    comment: text.value,
  };
  localStorage.setItem('form', JSON.stringify(dataObj));
}

document.addEventListener('DOMContentLoaded', () => {
  const formData = localStorage.getItem('form');
  if (formData) {
    const formObj = JSON.parse(formData);
    nome.value = formObj.fullname;
    email.value = formObj.email;
    text.value = formObj.comment;
  }
});

nome.onchange = StoreData();
email.onchange = StoreData();
text.onchange = StoreData();