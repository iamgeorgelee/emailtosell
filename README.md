Account information:
Test gmail account:selling.ebay.via.email@gmail.com

So far, you can download the code and run it locally. After the service starts up, the service will listen to the gmail account.
(but not sure if will work on your side, since I have fix a bug in an open-source dependency )
So you can:
Start an email with  subject “Selling”
Put an ISBN number (for book) in the text file, and send to the gmail account

Example: I want to sell ISBN 12345 for 50 dollars, verygood.

The service will get the latest email, and post the listing of that book on sandbox ebay (example: http://cgi.sandbox.ebay.com/ws/eBayISAPI.dll?ViewItem&item=110166388234&ssPageName=ADME:L:LCA:US:1123#ht_500wt_1156)

The next part will be sending and parsing the richer email context. So far I only have the ISBN number for input and other params fixed for making the end-to-end test flow easier. Ideally user can put more meaningful thing in the payload.  And I will also be working on putting this service to Heroku, will keep you guys updated.

References:
Ebay api in node: https://github.com/benbuckman/nodejs-ebay-api
Add item api: http://developer.ebay.com/DevZone/XML/docs/Reference/eBay/AddItem.html
Email receiving in node: https://github.com/chirag04/mail-listener2