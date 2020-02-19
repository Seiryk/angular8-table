const data = (() => {
  const arr = [];
  for (let index = 0; index < 10000; index++) {
    console.log('object')
    arr.push({
      label_1: `data ${index}`,
      label_2: `data ${index}`,
      label_3: `data ${index}`,
      label_4: `data ${index}`,
      label_5: `data ${index}`,
      label_6: `data ${index}`,
      label_7: `data ${index}`,
      label_8: `data ${index}`,
      label_9: `data ${index}`,
      label_10: `data ${index}`,
      label_11: `data ${index}`,
      label_12: `data ${index}`,
      label_13: `data ${index}`,
      label_14: `data ${index}`,
      label_15: `data ${index}`,
    });
  }
  return arr;
})()

export default data;
