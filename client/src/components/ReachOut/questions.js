const questions = [
  {
    question: 'Enter your name: ', fieldType: 'name', error: 'Please enter your name in appropriate format -> \n Ex: John Doe', answer: null,
  },
  {
    question: 'Your email: ', fieldType: 'email', error: 'Please enter your email in appropriate format -> \n Ex: Visa239u@gmail.com', answer: null,
  },
  {
    question: 'Your phone (optional): ', fieldType: 'phone', error: 'Please enter your phone in appropriate format -> \n Ex: (941)374-0327', answer: null,
  },
  {
    question: 'Message: ', fieldType: 'message', error: 'Expected length: > 20 chars', answer: null,
  },
  {
    question: 'Submit The question (Y/N)?: ', fieldType: 'submit', error: 'Error: Y/N - yes/no expected', answer: null,
  },
  {
    question: 'Your Inquiry has been recorded, start over (Y/N)?: ', fieldType: 'restart', error: 'Error: Y/N - yes/no expected', answer: null,
  },
];

export default questions;
