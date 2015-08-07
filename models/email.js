var MailListener = require("mail-listener2");
var listing = require('./listing');

var mailListener = new MailListener({
  username: "selling.ebay.via.email",
  password: "happyhacking",
  host: "imap.gmail.com",
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX",
  markSeen: true,
  fetchUnreadOnStart: true,
  attachments: true,
  attachmentOptions: { directory: "attachments/" }
});

mailListener.start(); // start listening

// stop listening
//mailListener.stop();

mailListener.on("server:connected", function(){
  console.log("imapConnected");
});

mailListener.on("server:disconnected", function(){
  console.log("imapDisconnected");
});

mailListener.on("error", function(err){
  console.log(err);
});

mailListener.on("mail", function(mail, seqno, attributes){
  // do something with mail object including attachments
  console.log("emailParsed", mail);
  // mail processing code goes here
  
  if(mail.headers.subject.substring(0, 7) === 'Selling'){



        try{
          //a=JSON.parse(mail.text.replace(/(\r\n|\n|\r)/gm,""));

                  var content = mail.text.split(" ");
            // I want to sell ISBN 123 for 500 dollars, verygood
            var a = {};
            a.startPrice = content[7];
            a.type = content[4];
            a.typeInfo = content[5]
            a.description = content[9];
          
          a.userEmail = mail.from[0].address;

        }catch(e){
            console.log(e); //error in the above string(in this case,yes)!
        }
        listing.addItem(a);
      
  } else {

    console.log('non-selling email coming in')
  }


});

mailListener.on("attachment", function(attachment){
  console.log(attachment.path);
});

// it's possible to access imap object from node-imap library for performing additional actions. E.x.
//mailListener.imap.move(:msguids, :mailboxes, function(){})