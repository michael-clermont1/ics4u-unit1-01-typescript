/**
 * The program calculates the amount of logs
 *   that can fit into a truck.
 *
 * By:      Michael Clermontl
 * Version: 1.0
 * Since:   2022-11-25
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const lengthString = prompt('What is the length of the log (0.25, 0.5 or 1): ')
let lengthNumber = Number(lengthString)
console.log(`The log length is ${lengthNumber}m.`)

let weight = lengthNumber * 20
weight = 1100 / weight
console.log(`The amount of logs that can fit in the truck is ${weight}.`)

console.log('\nDone.')
