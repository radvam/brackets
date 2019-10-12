module.exports = function check(str, bracketsConfig) {
  let itemStr = str.split('');
  let stack = [];
  
  if (!(itemStr.length % 2 === 0))
    return false;
  
  for (let i = 0; i <= itemStr.length - 1; i++) {
    for (let j = 0; j <= bracketsConfig.length - 1; j++) {

      if (itemStr[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
        if (stack[stack.length - 1] === bracketsConfig[j][0]) {
          stack.pop();
          break;
        } else if (stack[stack.length - 1] !== bracketsConfig[j][0]) {
          stack.push(itemStr[i]);
          break;
        } else {
          return false;
        }
      }

      if (itemStr[i] === bracketsConfig[j][0]) {
        stack.push(itemStr[i]);
        break;  
      }

      if (itemStr[i] === bracketsConfig[j][1]) {
        if(stack[stack.length - 1] === bracketsConfig[j][0]) {
          stack.pop();
          break;
        } else {
          return false;
        }
      }

    }
  }
  return !stack.length;
}
