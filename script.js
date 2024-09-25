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

const color = convertColor(123, 123, 123);
console.log(color.rgb()); // Output: rgb(123, 123, 123)
console.log(color.hex()); // Output: #7b7b7b
