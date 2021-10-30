// var | let & const

// hoisting di var

console.log(name);
var name;

// scope variabel
var nama = "Mufti" // global variabel

if(true){
  var b = 5; // global variabel
  let c = 5; // local variabel
  console.log(b);
  console.log(nama);
}

function test(){
  var a = 4; // local variabel
  console.log(a);
  console.log(nama);
}

test();

let angka = 5; // bisa diubah
// const angka = 5; // gak bisa dibah
angka = 6;
console.log(angka);

// summery
// pake const kalo datanya gak mau diubah
// pake let kalo datanya mau diubah
// kalo bisa hindari pake var


