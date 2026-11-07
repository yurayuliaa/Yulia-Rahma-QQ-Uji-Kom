// Membandingkan isi dua array: true jika panjang dan semua elemennya sama
function bandingkanArray(arr1, arr2) {
  // Panjang berbeda -> pasti tidak sama
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Bandingkan elemen satu per satu pada indeks yang sama
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // Lolos semua pemeriksaan
  return true;
}

// Pengujian
console.log(bandingkanArray([1, 2, 3], [1, 2, 3])); // true
console.log(bandingkanArray([1, 2, 3], [1, 2, 4])); // false
console.log(bandingkanArray([1, 2], [1, 2, 3]));    // false
console.log(bandingkanArray([], []));               // true
console.log(bandingkanArray([a, b, c], [a, b, c])); // false (urutan beda)
