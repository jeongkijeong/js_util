convertVariable(data) {
  if (data == undefined){
    return data;
  }

  let source = data;
  let target = '';
  let substr = '';

  let lastEnd = 0;

  let flag = true;
  while(flag==true) {
    let currStt = source.indexOf('var ', lastEnd);
    let currEnd = source.indexOf(';'   , currStt);

    if (currStt > -1 && currEnd > -1) {
      let gap = currEnd - lastEnd;

      if (gap > 0) {
        target = target + source.substring(lastEnd, currStt);
      }

      substr = source.substring(currStt, currEnd + 1);
      target = target + substr.replace(/(?:\r\n|\r|\n)/g, '\\n ');

      lastEnd = currEnd + 1;
    } else {
      flag = false;
      target = target + source.substring(lastEnd, source.length);
    }
  }

  return target;
}
