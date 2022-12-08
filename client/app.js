// const feetch = document.querySelector("#fetch").addEventListener("click", function(e){
//     console.log("clicked")
//     fetch("https://billing-staging.bytestacks.io/api/v1/bundles", {
// 		method: 'POST',
// 		headers: {
//             "Content-type" : "application/json",
//             "api-key": "Fincra_6VA35CDPQNMRS"
// 		},
//         body: JSON.stringify({
//             "telco": "AIRTEL"
//         })
// 	})
//     .then(data => data.json())
//     .then(data => console.log(data))
// })

// fetch("https://billing-staging.bytestacks.io/api/v1/electricity/billers", {
//     method: "GET",
//     headers: {
//         "Content-type" : "application/json",
//         "api-key": "Fincra_6VA35CDPQNMRS"
//     }
// })
//     .then(data => data.json())
//     .then(telco => {
//         console.log(telco)
//         telco.data.map(li => {
//         let list = document.createElement("li")
//         list.innerHTML = li.name
//         document.getElementById("plan-list").append(list)
//        })
//     })





// https://billing-staging.bytestacks.io/api/v1/telcos
// https://billing-staging.bytestacks.io/api/v1/balance
// https://billing-staging.bytestacks.io/api/v1/bundles