var ebay = require('ebay-api');

var addItem = function addItem(listingInfo){

    var parameters =  {
        'authToken': 'AgAAAA**AQAAAA**aAAAAA**w1/BVQ**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4GhDZmEqQ6dj6x9nY+seQ**+4YDAA**AAMAAA**1pOjUlyZtpQTHt2tiuzjW4MKeSesYkU6hQh9J6S5tkf59thE+34j8Qs0PUWTSqDcSnF5OJcA3UxYptSpA6oHG8F3YnZB/rxZQxCc5g3MZAsJXXrxHljEh0AqW2VDa9AXGpjGW6ksHKiIBdqh7mA64zJ4gv6bDda9g6C2Bb//hM9rkrA8XW4m8fFOk9uYrjzY3y4ErBq96XD2ia57/Clv+ferYcheTZLramPQhxopiKKk6a9Z2dI0MEbuUtxQRzuDNleLUIwEEBkf/DsGYN+iVepm7sZaFvAQkTQaxjEx4nzhtL6GaxAsyFjI570eZVNodGWGHbk/bJW62/Z/D/EDrsMn+RkHP78T3WQe3doPRDKs/WJ7hsAQs+xPRZ/7YEOZwqDh1ulbn+g2R51/stc3bsT5SZIn779Je90wEgHjI681+ELH4+fjVfqNosImR88lZy9kEUvJCSSEsa3UI2kXKvotIIEO9h/4P8WKjkuz1GiKWtPiQQyt4hyyyLLvpbET19gLHyBOfNyXByHGnrUqk6afFYm1H9Tj8hnTlP08G/MPSGD5F+s7/a8b+w+afgxiTFjJA/S03BOB55b4q0tFqpyPDUYz/G97sJ7ySQONkXOyz4vtApzc3YcBje9DB6wmIMWbYl38rm4l8y6q9hhT8dYTsxW5tVLcu6lXtxMj/UUXZoAcvsEcA1k2KarF5sZ2o6IqwbokI0r4VQhtW7FP2a/Kp5HrAFA96xF+1UctR9jyOfAgi3mdcXlKe8YM1mKM',
        'item': { 
            'StartPrice' : 500,
          'ConditionID': 1000,
          'Country':'US',
          'Currency':'USD',
          'DispatchTimeMax':3,
          'ListingDuration':'Days_7',
          'ListingType':'FixedPriceItem',
          'PaymentMethods':'PayPal',
          'PayPalEmailAddress':'selling.ebay.via.email@gmail.com',
          'PostalCode':95125,
          'ProductListingDetails' : {'ISBN':listingInfo, 'IncludePrefilledItemInformation':true,'IncludeStockPhotoURL':true} ,
          'Quantity':6,
          'ReturnPolicy': {'ReturnsAcceptedOption':'ReturnsAccepted','RefundOption':'MoneyBack','ReturnsWithinOption':'Days_30', 'Description': 'If not satisfied, return the item for refund.'},
          'ShippingDetails': {'ShippingServiceOptions': {'ShippingServicePriority':1, 'ShippingService':'UPSGround', 'ShippingServiceCost':'0.00', 'ShippingServiceAdditionalCost':'0.00' } },
          'Site':'US' 
        }
      };

    ebay.ebayApiPostXmlRequest({
      serviceName : 'Trading',
      opType : 'AddItem',
      
      devName: '5efbfe99-d841-4d67-afae-372fff6461e3',
      cert: 'ab31c9fa-b55a-4430-b777-c0fb295e7b5c',
      appName: 'eBayInc55-75f1-4099-ae6a-c4775491fe3',
      
      sandbox: true,
      
      params: parameters
      
    }, function(error, results) {
      if (error) {
        console.dir(error);
        process.exit(1);
      }
      console.dir(results);
    });

};

module.exports.addItem = addItem;