function getElementWidth(content, padding, border) {
    const totalPading = Number.parseFloat(padding) * 2;
    const totalBorder = Number.parseFloat(border) * 2;
    return  Number.parseFloat(content) + totalPading + totalBorder ;
};



console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
  

