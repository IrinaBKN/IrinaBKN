// esimene ülesanne

function checkTemp(x){
			if (x>=0 && x<=20){
				console.log("On liiga külm")
			}
			if (x>=21 && x<=41)
			{
				console.log("on paras temperatuur")
			} 
			if (x>=41 && x<=60)
			{
				console.log("on liiga soe ")
			}
		}

/// teine ülesanne
function checkTemp(x){
			if (x>=0 && x<=20){
				return (-1)
			}
			if (x>=21 && x<=40)
			{
				return (0)
			} 
			if (x>=41 && x<=60)
			{
				return (1)
			}
		}
