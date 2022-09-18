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
const logWeight = 20
const truckCarryLimit = 1100

const lengthString = prompt('What is the length of the log (0.25, 0.5 or 1): ')
const lengthNumber = Number(lengthString)
console.log(`The log length is ${lengthNumber}m.`)

let weight = lengthNumber * logWeight
weight = truckCarryLimit / weight
console.log(`The amount of logs that can fit in the truck is ${weight}.`)

console.log('\nDone.')
