const mailjet = require ('node-mailjet')
.connect('25bb9ebbe5d570a267a57f81f463a55a', '63b7958b10e4d6ea19a779da72167ef9')
let send = function (to, subject, text, html, id){ 
    mailjet.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "luca.manfrin@ptpvenezia.edu.it",
        "Name": "Progetti Corner"
      },
      "To": [
        {
          "Email": to,
          "Name": "User"
        }
      ],
      "Subject": subject,
      "TextPart": text,
      "HTMLPart": html,
      "CustomID": id
    }
  ]
})
}
  exports.send = send;