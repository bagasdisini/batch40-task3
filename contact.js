function kirimEmail() {
  let nama = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone-number").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("textarea").value;

  if (nama == "") {
    return alert("insert name");
  } else if (email == "") {
    return alert("insert email");
  } else if (phoneNumber == "") {
    return alert("insert phone number");
  } else if (subject == "") {
    return alert("insert subject");
  } else if (message == "") {
    return alert("insert message");
  }

  let a = document.createElement("a");
  a.href = `mailto:mbagas221@gmail.com?subject=${subject}&body=Hallo nama saya ${nama}, ${message}, silahkan kontak ke nomor ${phoneNumber}`;
  a.target = "_blank";
  a.click();
}
