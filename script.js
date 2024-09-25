//topic Perkenalan Tentang Prototype Di Javascript
// const arr = [1, 2];
// arr.hello = () => {
//   console.log("hello world");
// };
// arr.hello();
// //mengcostum method pada object array utama
// Array.prototype.greeting = () => {
//   console.log("hello world");
// };
// //mewarisi method greeting pada variabel dibawah ini
// const kelasDasar = [1, 2, 3];
// const kelasMenengah = [4, 5, 6];
// //memakai methodnya
// kelasDasar.greeting();
// kelasMenengah.greeting();
// //Mengoverride method yang sudah ada dalam array
// Array.prototype.pop = () => {
//   console.log("Method dinonaktifkan!");
// };
// kelasDasar.pop();

//topic Membuat Object Dengan Factory Function

// const hex = (r, g, b) => {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// const rgb = (r, g, b) => {
//   return `rgb(${r},${g},${b})`;
// };
// console.log(hex(106, 22, 90));
// console.log(rgb(106, 22, 90));

// function convertColor(r, g, b) {
//   const color = {};

//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };

//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };

//   return color;
// }

// const color = convertColor(123, 123, 123);
// console.log(color.rgb()); // Output: rgb(123, 123, 123)
// console.log(color.hex()); // Output: #7b7b7b

//topic Membuat Object Dengan Constructor Function
// function convertColor(r, g, b) {
//   const color = {};

//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };

//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };

//   return color;
// }

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// // console.log(new Color(11, 199, 4).rgb());
// // console.log(new Color(11, 199, 4).hex());
// // const objColor = new Color(12, 200, 89);
// // console.log(objColor.hex());
// // console.log(objColor);
// // console.log(convertColor(123, 123, 123));

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b},${a})`;
// };
// document.body.style.backgroundColor = new Color(19, 200, 30).rgba(0.2);

//topic Membuat Object Dengan Class
function convertColor(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };

  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRgb() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  colorName() {
    console.log("nama warna ini adalahj" + this.name);
  }
  rgb() {
    return `rgb(${this.innerRgb()})`;
  }
  rgba(a = 1.0) {
    return `rgb(${this.innerRgb()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const skyColor = new Color(185, 220, 232, "red");
console.log(skyColor);
document.body.style.backgroundColor = skyColor.hex();
