function sendMail(params) {
  var temParams = {
    to_name: document.getElementById(toName),
    message: document.getElementById(msg),
  };
  emailjs.send("gmail", "template_5x53cdw", temParams).then(function (res) {
    console.log("succes", res.status);
  });
}
