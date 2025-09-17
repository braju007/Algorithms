function getRandomHexaValue(num){
    const hexa='0123456789ABCDEF';
      let color="#";
      for(let i=0; i<num; i++){
        color +=hexa[Math.floor(Math.random()*16)];
      }
      return color;
    }
    
    console.log(getRandomHexaValue(6));
    // #F82093
    // #89DA52
    // #6AB31B
    