function sendMail(contactForm) {
  emailjs
    .send("gmail", "greenhouse", {
      from_name: contactForm.id_name.value,
      subject: contactForm.id_subject.value,
      from_email: contactForm.id_email.value,
      message: contactForm.id_message.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
}
