const questionBank = [
    {
      question:'Most dinosaur fossils have been discovered in which continent' ,
      answers:['Africa','North America','South America'], 
      correct: 'North America',
      questionId:'1'
    },
    {
        question:'Who is the director of famous movies like “Jurassic Park” and “ET”?' ,
        answers:['Steven Spielberg','Christopher Nolan','Quentin Tarantino'], 
        correct: 'Steven Spielberg',
        questionId:'2'
      }
      ,{
        question:'What is the most popular colour in the flags of most countries in the world?' ,
        answers:['green','blue','red'], 
        correct: 'red',
        questionId:'3'
      },
      {
        question:'Which country won the 2018 FIFA World Cup?' ,
        answers:['Brazil','Germany','France'], 
        correct: 'France',
        questionId:'4'
      },
      {
        question:'How many valves are there in the human heart?' ,
        answers:['2','3','4'], 
        correct: '4',
        questionId:'5'
      },
      {
        question:' Batman is a fictional superhero in which shared universe?' ,
        answers:['DC Universe','Marvel Universe','SW Universe'], 
        correct: 'DC Universe',
        questionId:'6'
      },
      {
        question:'  Denmark is a country located on which part of Europa?' ,
        answers:['South','Middle','North'], 
        correct: 'North',
        questionId:'7'
      },
      {
        question:'Popcorn kernels typically pop at which temperature?' ,
        answers:['100 degrees','180 degrees','260 degrees'], 
        correct: '180 degrees',
        questionId:'8'
      },
       {
      question:'Who of the following is the Roman god of war?' ,
      answers:[' Hades','Mars','Ares'], 
      correct: 'Mars',
      questionId:'9'
    },
    {
      question:'Which of the following football players has the most followers on Instagram?' ,
      answers:['Cristiano Ronaldo','Lionel Messi','Neymar'], 
        correct: 'Cristiano Ronaldo',
        questionId:'10'
      }
      ,{
        question:'Which is the closest planet to the sun? ',
        answers:['Mercury','Mars','Saturn'], 
        correct: 'Mercury',
        questionId:'11'
      },
      {
        question:'What is the first name of Harry Potter’ mother?' ,
        answers:['Anna','Ginny','Lily'], 
        correct: 'Lily',
        questionId:'12'
      },
      {
        question:'What is the largest ocean in the world?' ,
        answers:['Arctic Ocean','Atlantic Ocean','Pacific Ocean'], 
        correct: 'Pacific Ocean',
        questionId:'13'
      },
      {
        question:'How many stars are there on the flag of the USA?' ,
        answers:['13','34','50'], 
        correct: '50',
        questionId:'14'
      },
      {
        question:'Neuschwanstein Castle is a famous tourist attraction in which European country?' ,
        answers:['Germany','France','Portugal'], 
        correct: 'Germany',
        questionId:'15'
      },
      {
        question:'How many members are there in the rock band The Beatles?' ,
        answers:['3','4','5'], 
        correct: '4',
        questionId:'16'
      },
       {
      question:'What is the busiest airport in Great Britain?' ,
      answers:['Heathrow Airport','J.L. Airport','Gatwick Airport'], 
      correct: 'Heathrow Airport',
      questionId:'17'
    },
    {
        question:'What was the first animals sent into space?' ,
        answers:['Monkeys','Cockroaches','Fruit flies'], 
        correct: 'Fruit flies',
        questionId:'18'
      }
      ,{
        question:'Which bird is able to fly backwards?' ,
        answers:['Hummingbird','Finch','Canary'], 
        correct: 'Hummingbird',
        questionId:'19'
      },
      {
        question:'Vanilla is derived from which flower?' ,
        answers:['Sunflower','Orchid','Rose'], 
        correct: 'Orchid',
        questionId:'20'
      }
]

export default (n=5)=>
Promise.resolve(questionBank.sort(() => 0.5-Math.random()).slice(0,n))