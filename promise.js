// function getTempCallback(location, callback){
// 	callback(undefined, 78);
// 	callback('City Not Found');
// }

// getTempCallback("Philadelphia", function(err, temp){
// 	if (err) {
// 		console.log("error", err);
// 	}
// 	else{
// 		console.log("success", temp);
// 	}
// });

// function getTempPromise(location){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){

// 			resolve(79);
// 			reject("City not found");

// 		}, 2000);
		
// 	});
// }

// getTempPromise("Philadelphia").then(function(temp){
// 	console.log("promise success", temp);
// }, function(err){
// 	console.log("promise error", err);
// });

//challenge area

function addPromise(a, b){
	return new Promise(function(resolve, reject){
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a + b);
		}
		else{
			reject("These are not numbers");
		}
	});
}

addPromise(1, 2).then(function(sum){
	console.log("success", sum);
}, function(err){
	console.log("failure", err);
});

addPromise("hello", 2).then(function(sum){
	console.log("success", sum);
}, function(err){
	console.log("failure", err);
});

