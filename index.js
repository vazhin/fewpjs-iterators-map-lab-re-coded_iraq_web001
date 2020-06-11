const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

<<<<<<< HEAD
// yup just one line :D
=======
>>>>>>> 1b0548e38375e1f42d897d76261f1a8a0b72cf7f
const titleCased = () => tutorials.map(string => string.split(' ').map(word => word.toLowerCase().charAt(0).toUpperCase() + word.slice(1)).join(' '))
