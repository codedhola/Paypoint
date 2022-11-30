const feetch = document.querySelector("#fetch").addEventListener("click", function(e){
    console.log("clicked")
    fetch("https://billing-staging.bytestacks.io/api/v1/bundles", {
		method: 'POST',
		headers: {
            "Content-type" : "application/json",
            "api-key": "Fincra_6VA35CDPQNMRS"
		},
        body: JSON.stringify({
            "telco": "AIRTEL"
        })
	})
    .then(data => data.json())
    .then(data => console.log(data))
})






// https://billing-staging.bytestacks.io/api/v1/telcos
// https://billing-staging.bytestacks.io/api/v1/balance
// https://billing-staging.bytestacks.io/api/v1/bundles