/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {

  if(!thali || !thali.name || thali.isVeg === undefined || !thali.price || typeof thali !== "object"){
    // !thali.isVeg - if isVeg is false it'll return "", so we check for undefined
    return ""
  }

  // let type = thali.isVeg ? "Veg" : "Non-Veg";
  let type = "Veg";
  if (!thali.isVeg) type = "Non-Veg";

  let str = `${thali.name.toUpperCase()} (${type}) - Items: ${thali.items.join(", ")} - Rs.${thali.price.toFixed(2)}`
  // .join give in string from array

  console.log(str)
  return str
}

export function getThaliStats(thalis) {
  if(!thalis || thalis.length <= 0 || !Array.isArray(thalis)){
    return null
  }

  let vegCount = thalis.filter(ele => ele.isVeg).length
  let nonVegCount = thalis.filter(ele => !ele.isVeg).length

  let total = thalis.reduce((acc, ele)=> acc +=ele.price, 0)
  // initializer 0 , is necessary, acc starts as 0 
  //  else accumulator is the whole first obj
  let avgPrice = total/thalis.length
  avgPrice = avgPrice.toFixed(2)

  let names = thalis.map(ele => ele.name)

  let prices = thalis.map(ele => ele.price)
  let cheapest = Math.min(...prices)
  //use ... , this wouldn't have worked let cheapest = Math.min(prices)
  let costliest = Math.max(...prices)
  let totalThalis = thalis.length
  return {totalThalis , vegCount, nonVegCount, avgPrice, cheapest, costliest, names }
}

export function searchThaliMenu(thalis, query) {
  if(!Array.isArray(thalis) || typeof query !== "string"){
    return []
  }

  if(typeof query !== "string" || !Array.isArray(thalis)){
    return []
  }

  let thali = thalis.filter(ele=> {
    if(ele.name.toLowerCase().includes(query.toLowerCase())){
      return ele
    }

    let itemStr = ele.items.join(", ")
    if(itemStr.toLowerCase().includes(query.toLowerCase())){
      return ele
    }

  })

  if(!thali || thali.length <=0){
    return []
  }

  return thali
}
// searchThaliMenu([{name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true}, {name:"Kpr Thali", items:["",""], price:250, isVeg:true}], "kpr")


export function generateThaliReceipt(customerName, thalis) {
  if(!customerName || typeof customerName !== "string" || thalis.length <= 0 || !Array.isArray(thalis)){
    return ""
  }

  customerName = customerName.toUpperCase()

  let lineItems = thalis.map(ele => `- ${ele.name} x Rs.${ele.price}`)
  lineItems = lineItems.join("\n")
  let total = thalis.reduce((acc, ele) => acc += ele.price, 0)
  let count = thalis.length

  let format = `THALI RECEIPT\n---\nCustomer: ${customerName}\n${lineItems}\n---\nTotal: Rs.${total}\nItems: ${count}`
  return format
}