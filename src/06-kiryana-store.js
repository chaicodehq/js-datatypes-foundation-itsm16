/**
 * 🏪 Kiryana Store Bill - Array Transform
 *
 * Gupta ji ki kiryana (grocery) store hai. Monthly hisaab kitaab karna hai —
 * items ka total nikalna, sorting karna, bill format karna.
 * Array transform methods se Gupta ji ki dukaan digital banao!
 *
 * Data format: items = [
 *   { name: "Atta", price: 40, qty: 2 },
 *   { name: "Daal", price: 80, qty: 1 },
 *   ...
 * ]
 *
 * Methods to explore: .map(), .filter(), .reduce(), .sort(), .join()
 *
 * Functions:
 *
 *   1. getItemNames(items)
 *      - .map() se sirf names nikalo
 *      - Agar items array nahi hai, return []
 *      - Example: getItemNames([{name:"Atta",price:40,qty:2}]) => ["Atta"]
 *
 *   2. getAffordableItems(items, maxPrice)
 *      - .filter() se items nikalo jinka price <= maxPrice
 *      - Agar items array nahi hai ya maxPrice number nahi hai, return []
 *      - Example: getAffordableItems([{name:"Atta",price:40},{name:"Ghee",price:500}], 100)
 *                 => [{name:"Atta",price:40}]
 *
 *   3. calculateTotal(items)
 *      - .reduce() se (price * qty) ka sum nikalo
 *      - Agar items array nahi hai ya empty hai, return 0
 *      - Example: calculateTotal([{name:"Atta",price:40,qty:2},{name:"Daal",price:80,qty:1}])
 *                 => 160
 *
 *   4. sortByPrice(items, ascending)
 *      - [...items].sort() se NEW sorted array return karo (original mat badlo!)
 *      - ascending = true => low to high, false => high to low
 *      - Agar items array nahi hai, return []
 *      - Example: sortByPrice([{name:"Ghee",price:500},{name:"Atta",price:40}], true)
 *                 => [{name:"Atta",price:40},{name:"Ghee",price:500}]
 *
 *   5. formatBill(items)
 *      - .map() se har item ko "name x qty = Rs.total" format karo
 *      - Phir .join("\n") se multi-line bill banao
 *      - Agar items array nahi hai ya empty hai, return ""
 *      - Example: formatBill([{name:"Atta",price:40,qty:2}]) => "Atta x 2 = Rs.80"
 *
 * @example
 *   getItemNames([{name:"Atta",...}])         // => ["Atta"]
 *   calculateTotal([{price:40,qty:2},...])    // => 160
 *   formatBill([{name:"Atta",price:40,qty:2}]) // => "Atta x 2 = Rs.80"
 */
export function getItemNames(items) {
  if(!Array.isArray(items)){
    return []
  }

  let itemNames = items.map(ele => ele.name)
  // console.log(itemNames)
  return itemNames  
}
// getItemNames([{name:"Atta",price:40},{name:"Ghee",price:500}])
// using map gives(returns) new val, returns without condition too (like above), func on each 

//  filter works on condition
export function getAffordableItems(items, maxPrice) {
  if(!Array.isArray(items) || !Number.isInteger(maxPrice)){
    return []
  }

  let filtered = items.filter(ele => ele.price <= maxPrice)
  
  return filtered
}

export function calculateTotal(items) {
  if(!Array.isArray(items) || items.length <= 0){
    return 0
  }

  let sum = items.reduce((prev, cur) => 
    prev += cur.price * cur.qty, 0 )
    // prev => previous returned value after performing the function
    // 0 is initial value to give a start , accumulator is 0

  return sum
}

calculateTotal([{name:"a",price:80,qty:1}, {name:"b",price:80,qty:1}])

export function sortByPrice(items, ascending) {
    if(!Array.isArray(items) || items.length <= 0){
    return []
  }

let newItems = [...items]

return newItems.sort((a, b) =>
  ascending ? a.price - b.price : b.price - a.price
)
// arrange in order
}

export function formatBill(items) {
  if(!Array.isArray(items) || items.length <= 0){
    return ""
  }

  let bill = items.map(ele => {
    let total = ele.price * ele.qty
    let str= `${ele.name} x ${ele.qty} = Rs.${total}`

    // ele = str
    // doens't work

    return str
    // "return" - that'll add the returned element in arr
  })

  bill = bill.join("\n")
  // change separator with \n and update the bill (store it in bill)

  return bill
}

formatBill([{name:"Ghee",price:500, qty:2},{name:"Atta",price:40, qty:3}])