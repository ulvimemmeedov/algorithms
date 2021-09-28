
const qaytarilmaliMebleg = 12;

const kassadakiPullar  = {

	"20 manat": 20,
	"19 manat": 19.0,
	"5 manat": 5.0,
	"1 manat": 1.0,
    "50 qepik":0.5,
    "10 qepik":0.1,
    "5 qepik":0.05,
    "1 qepik":0.01

}

const QaytarilmaniTap = (kassa, mebleg) => {

	let nəticəHesablari = {};
	
    let nağdQalıq = mebleg;

	for (let key in kassa)	{

		while (nağdQalıq >= kassa[key])	{

            if (nəticəHesablari[key]) {   
		
                nəticəHesablari[key] += 1;
		
            }   
		
            else	{
		
                nəticəHesablari[key] = 1;
		
            }
		
            nağdQalıq = (nağdQalıq - kassa[key]).toFixed(2);
		
        }
	
    }
	
    return nəticəHesablari;

}

console.log(QaytarilmaniTap(kassadakiPullar, qaytarilmaliMebleg));