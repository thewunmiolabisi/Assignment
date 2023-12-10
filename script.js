 

function calculateAge(birthDate, currentDate) {
  const birthDateMs = new Date(birthDate).getTime(); 
  const currentDateMs = new Date(currentDate).getTime();

  const ageInMs = currentDateMs - birthDateMs;

  return Math.round (ageInMs / 1000 / 60 / 60 / 24 / 365);
}


const age = calculateAge('1/1/1990', '1/1/2023'); 

console.log(age); 