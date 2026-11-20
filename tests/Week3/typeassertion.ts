let response : any = 'success'

let responsevalue = response as string
console.log(responsevalue.length);

let responsevalue1 = <string>response
console.log(responsevalue1.toUpperCase());