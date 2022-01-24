let key = "21a3d050-7929-11ec-a125-d526f855eaa6";
        let convertBtn = document.querySelector(".convertBtn")
        let firstCurrency = document.querySelector(".firstcurrency")
        let result = document.querySelector(".result")

        convertBtn.addEventListener("click", function(){
            let base = firstCurrency.value;
            let api = `https://freecurrencyapi.net/api/v2/latest?apikey=${key}&base_currency=${base}`

            fetch(api).then(function (res){
                
                return res.json()
            }).then((mdata)=>{
                console.log(mdata);
                let secondcurrency = document.querySelector(".secondcurrency")
                let sCurrency = secondcurrency.value;
                result.textContent = mdata.data[sCurrency];
            }).catch((err) => {
                console.log(err.message);
            })
        })