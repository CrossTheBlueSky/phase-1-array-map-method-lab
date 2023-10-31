const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  const out = tutorials.map((e)=>{
    let title = ""
    let toCap = true
    for(let i = 0; i < e.length ; i++){
      if(toCap === true){
        title += e[i].toUpperCase()
        toCap = false;
      }else if(e[i] === " "){
        title += e[i]
        toCap = true;
      } else {
        title += e[i]
      }
    }

    return title
  })

    return out
}
