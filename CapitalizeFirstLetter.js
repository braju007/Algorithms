const capitalizeFirstLetter = (string) =>{
    return string.split(' ').map(a=>a.charAt(0).toUpperCase() + a.slice(1)).join(' ')
  }
  
  console.log(capitalizeFirstLetter("i am raju juganavar from yaragatti"));
  // "I Am Raju Juganavar From Yaragatti"
  