var ebay = require('ebay-api');
var _ = require('underscore');

var addItem = function addItem(listingInfo){

  _.each(users, function(userInfo, email){

        if(email === listingInfo.userEmail){

                var list

                var parameters =  {
                  'authToken': userInfo.authToken,
                  'item': { 
                      'StartPrice' : listingInfo.startPrice,
                      'ConditionID': 1000,
                      'Country':'US',
                      'Currency':'USD',
                      'DispatchTimeMax':3,
                      'ListingDuration':'Days_7',
                      'ListingType':'FixedPriceItem',
                      'PaymentMethods':'PayPal',
                      'PayPalEmailAddress':userInfo.PayPalEmailAddress,
                      'PostalCode':95125,
                      'ProductListingDetails' : {'IncludePrefilledItemInformation':true,'IncludeStockPhotoURL':true} ,
                      'Quantity':6,
                      'ReturnPolicy': {'ReturnsAcceptedOption':'ReturnsAccepted','RefundOption':'MoneyBack','ReturnsWithinOption':'Days_30', 'Description': 'If not satisfied, return the item for refund.'},
                      'ShippingDetails': {'ShippingServiceOptions': {'ShippingServicePriority':1, 'ShippingService':'UPSGround', 'ShippingServiceCost':'0.00', 'ShippingServiceAdditionalCost':'0.00' } },
                      'Site':'US',
                      'Description':listingInfo.description
                  }
                };

                parameters.item.ProductListingDetails[listingInfo.type] = listingInfo.typeInfo;

              ebay.ebayApiPostXmlRequest({
                serviceName : 'Trading',
                opType : 'AddItem',
                
                devName: userInfo.devName,
                cert: userInfo.cert,
                appName: userInfo.appName,
                
                sandbox: true,
                
                params: parameters
                
              }, function(error, results) {
                if (error) {
                  console.dir(error);
                  process.exit(1);
                }
                console.dir(results);
              });


        }

  });

};

module.exports.addItem = addItem;

var users = {


};