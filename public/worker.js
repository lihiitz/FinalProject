
console.log("Service Worker Loaded...");


self.addEventListener("push", e => {
    const data = e.data.json();
  console.log("push Recieved...");
  self.registration.showNotification(data.title, {
    body: "SOS YOUR FRIEND IS IN TROUBLE",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png"
  })
  console.log("hello")
})
