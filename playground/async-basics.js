console.log('starting app');

setTimeout(()=>{
  console.log('Inside callback');


}, 2000);
setTimeout(()=>{
  console.log('Second callback');


}, 0);

console.log('Finishing up');
