/*

Install: npm install --save progressbar
Module: require('progressbar')

ProgressBar API
step(step) - set the step, resets the total and the tick
setTick(ticks) - set the completed ticks
addTick() - add 1 to the completed ticks
getTick() - get the completed ticks
setTotal(total) - set the total ticks
addTotal() - add 1 to the total ticks
getTotal() - get the total ticks
finish() - finish manually, will destroy the progress bar

*/


const progress = require('progressbar').create().step('the task you are currently performing')
// use an array of steps that execute one second after each other
// as if we do them all instantly
// you won't see the progress bar as it will be instant
;[
    () => progress.setTotal(5), 
    () => progress.setTick(1),
    () => progress.setTick(2),
    () => progress.setTick(3),
    () => progress.addTick(),
    () => progress.addTick(),
    () => progress.finish()  // remove and destroy the progress bar
].forEach(function (step, index) {
    setTimeout(step, index * 1000)
})