var urlQueryIds = [1,1,1,2,2,2,'www','www','www'];
var urlQueryQty = [5,3,'x',7,7,,'a',4,9,'t'];

function prepareDataFromUrlQuery(urlQueryIds,urlQueryQty) {

	var index;
  
	var idUniqueArr = [];
  	var idsToQuery = [];
  
  	var idQtyRelObj = {};
  	var returnObj = {};

	for (var i = 0; i < urlQueryIds.length; i++) {
  
	  	if (urlQueryQty[i] < 1 || isNaN(urlQueryQty[i]) || urlQueryQty[i] === true) {
	  		continue;
	    }
	      
	    index = idUniqueArr.indexOf(urlQueryIds[i]);

	    if(index === -1) {
	      	idUniqueArr.push(urlQueryIds[i]);
	      
	      	idsToQuery.push({id: urlQueryIds[i]});
	      	idQtyRelObj[urlQueryIds[i]] = urlQueryQty[i];
	    }
	    else {
	      	idQtyRelObj[urlQueryIds[i]] += urlQueryQty[i];
	    }

	}
  
  	returnObj.idQtyRelObj = idQtyRelObj;
  	returnObj.idsToQuery = idsToQuery;
  
	return returnObj;

}

var dataPrepObj = prepareDataFromUrlQuery(urlQueryIds,urlQueryQty);
console.log(dataPrepObj);
