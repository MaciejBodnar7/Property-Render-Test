import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";

const getPropertyHtml = (saleArr = placeholderPropertyObj) => {
  const popertyTotalSize = saleArr.reduce((total, currentItem) => {
    return total + currentItem.roomsM2[0];
  }, 0);

  const propertyArr = saleArr
    .map((prop) => {
      return (prop.innerHTML = `<section class="card">
                            <img src="./images/${prop.image}">
                            <div class="card-right">
                                <h2>${prop.propertyLocation}</h2>
                                <h3>${prop.priceGBP}</h3>
                                <p>${prop.comment}</p>
                                <h3>${popertyTotalSize}m2</h3>
                            </div>
                        </section> 
    `);
    })
    .join("");
  return propertyArr;
};

document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr);
