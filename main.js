import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";

const getPropertyHtml = (saleArr = placeholderPropertyObj) => {
  // prettier-ignore
  const propertyArr = saleArr.map((prop) => {
      const { propertyLocation, priceGBP, roomsM2, comment, image } = prop;

      const totalRoomSize = roomsM2.reduce((total, currentItem) => {
        return total + currentItem;
      });

      return (prop.innerHTML = `<section class="card">
                            <img src="./images/${image}">
                            <div class="card-right">
                                <h2>${propertyLocation}</h2>
                                <h3>${priceGBP}</h3>
                                <p>${comment}</p>
                                <h3>${totalRoomSize}m2</h3>
                            </div>
                        </section> 
    `);
    })
    .join("");
  return propertyArr;
};

document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr);
