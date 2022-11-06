
const alphabhets ='qwertyuiopasdfghjklzxcvbnm'
export const randomChar = () =>{
  return alphabhets[Math.round(Math.random() * alphabhets.length)];
};
