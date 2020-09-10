module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) {
    // if enhancement less than 20, add 1. 
    return { ...item, enhancement: item.enhancement + 1 }
  } else {
    // otherwise do not.
    return { ...item }
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    // if enhancement < 15, we subtract 5 from durability upon fail.
    return { ...item, durability: item.durability - 5 }
  } else if (item.enhancement > 16) {
    // if enhancement is greater than 16, 
    // we subtract 1 from enhancement AND 10 from durability upon fail
    return { ...item, enhancement: item.enhancement - 1, durability: item.durability - 10 }
    // if greater than or equal to 15, subtract 10 from durability.
    // this one is essentially only called for enhancement of
    // 15 or 16. if its 17 or greater, the one above will be called.
  } else if (item.enhancement >= 15) {
    return { ...item, durability: item.durability - 10 }
  } else {
    return { ...item }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancement > 0) {
    // if enhancement is greater then 0, return item with the enhancement formatted properly with
    // the brackets and plus sign and then the item.name
    return { ...item, name: `[+` + item.enhancement + `]` + item.name }
  } else {
    // otherwise if it is 0 just return item
    return { ...item }
  }
}