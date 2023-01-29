function sendMail(){
   let params={
            from_name:document.querySelector("#fullnameId").value,
            email:document.querySelector("#emailId").value,
            subject:document.querySelector("#subjectId").value,
            message:document.querySelector("#messageId").value,
    };
    const serviceId ="service_v5ynq7w";
    const templateId="template_x25ylvm";

    emailjs.send(serviceId,templateId,params).then(res=>{
        document.querySelector("#fullnameId").value="" ,
         document.querySelector("#emailId").value="" ,
         document.querySelector("#subjectId").value="",
         document.querySelector("#messageId").value="",
         console.log(res)
         alert("Message sent Successfully");

    }).catch(err=>console.log(err));
}
