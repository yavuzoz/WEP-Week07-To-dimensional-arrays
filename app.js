/** 
A- Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
B- Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
C- Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
D- Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
E- Sinifin en kötü oldugu dersi gostermesi
F- Tüm derslerin en iyi ögrencilerini bulmasi
 */
const notes = [
  ["Hans", 80, 90, 10, 50],
  ["Ulrich", 94, 36, 76, 74],
  ["Olaf", 30, 60, 34, 78],
  ["Otto", 60, 60, 78, 23],
  ["Tina", 71, 45, 89, 100],
  ["Rosalina", 40, 56, 82, 40],
  ["Urs", 49, 45, 56, 67],
  ["Monika", 49, 42, 16, 62],
];

const students = notes.length;

// **A- Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi */
//1- Sinifin Matematik ortalamasi
function findMathAvarage() {
  let index;
  let avarageMathe = null;
  let summ = 0;

  for (index = 0; index < students; index++) {
    let matheNote = notes[index][1];
    summ += matheNote;
    avarageMathe = summ / students;
  }
  console.log("Sinifin Matematik ortalamasi :" + avarageMathe);
  return avarageMathe;
}

//2-Sinifin Almanca ortalamasi
function findGermanAvarage() {
  let index;
  let avarageGerman = null;
  let summ = 0;

  for (index = 0; index < students; index++) {
    let germanNote = notes[index][2];
    summ += germanNote;
    avarageGerman = summ / students;
  }
  console.log("Sinifin Almanca ortalamasi :" + avarageGerman);
  return avarageGerman;
}

//3-Sinifin Ingilizce ortalamasi
function findEnglishAvarage() {
  let index;
  let avarageEnglish = null;
  let summ = 0;

  for (index = 0; index < students; index++) {
    let englishNote = notes[index][3];
    summ += englishNote;
    avarageEnglish = summ / students;
  }
  console.log("Sinifin Ingilizce ortalamasi :" + avarageEnglish);
  return avarageEnglish;
}

//4- Sinifin Cografya ortalamasi 
function findGeoAvarage() {
  let index;
  let avarageGeo = null;
  let summ = 0;

  for (index = 0; index < students; index++) {
    let geoNote = notes[index][4];
    summ += geoNote;
    avarageGeo = summ / students;
  }
  console.log("Sinifin Cografya ortalamasi :" + avarageGeo);
  return avarageGeo;
}

// B-70 puandan fazla alan öğrencilerin listesi
function findSuccessfullStudents(pLessons, pNoteList, pIndex) {
  let newList = [];
  for (let index = 0; index < pNoteList.length; index++) {
    if (pNoteList[index][pIndex] > 70) {
      console.log(pNoteList[index][pIndex]);
      newList.push(pNoteList[index][0] + " " + pNoteList[index][pIndex]);
    }
  }
  console.log(pLessons, newList);
}

let matheAvarage = findMathAvarage();
let germanAvarage = findGermanAvarage();
let englishAvarage = findEnglishAvarage();
let geoAvarage = findGeoAvarage();

findSuccessfullStudents("Matematikten 70 üzeri alanlar: ", notes, 1);
findSuccessfullStudents("Almancadan 70 üzeri alanlar: ", notes, 2);
findSuccessfullStudents("Ingilizceden 70 üzeri alanlar", notes, 3);
findSuccessfullStudents("Cografyadan 70 üzeri alanlar", notes, 4);

//C-ortalamanın üzerindeki öğrencilerin listesi
function findStudentsOverAvarage(pLessons, pNoteList, pIndex) {
  let studentsList = [];
  for (let index = 0; index < pNoteList.length; index++) {
    if (pIndex == 1 && pNoteList[index][pIndex] > matheAvarage) {
      studentsList.push(
        pLessons + pNoteList[index][0] + " " + pNoteList[index][pIndex]
      );
    } else if (pIndex == 2 && pNoteList[index][pIndex] > germanAvarage) {
      studentsList.push(
        pLessons + pNoteList[index][0] + " " + pNoteList[index][pIndex]
      );
    } else if (pIndex == 3 && pNoteList[index][pIndex] > englishAvarage) {
      studentsList.push(
        pLessons + pNoteList[index][0] + " " + pNoteList[index][pIndex]
      );
    } else if (pIndex == 4 && pNoteList[index][pIndex] > geoAvarage) {
      studentsList.push(
        pLessons + pNoteList[index][0] + " " + pNoteList[index][pIndex]
      );
    }
  }
  console.log(studentsList);
}

findStudentsOverAvarage("Matematikten ortalamanin üzerinde alan: ", notes, 1);
findStudentsOverAvarage("Almancadan ortalamanin üzerinde alan: ", notes, 2);
findStudentsOverAvarage("Ingilizceden ortalamanin üzerinde alan: ", notes, 3);
findStudentsOverAvarage("Cografyadan ortalamanin üzerinde alan: ", notes, 4);

// D-En başarılı dersler
function findMostSuccessfullLesson() {
  let avarageList = [matheAvarage, germanAvarage, englishAvarage, geoAvarage];
  let maxAvarage = Math.max.apply(null, avarageList);

  let mostSuccessfullLesson = null;
  if (maxAvarage == matheAvarage) {
    mostSuccessfullLesson = "Mathematik";
  } else if (maxAvarage == germanAvarage) {
    mostSuccessfullLesson = "Almanca";
  } else if (maxAvarage == englishAvarage) {
    mostSuccessfullLesson = "Ingilizce";
  } else {
    mostSuccessfullLesson = "Cografya";
  }
  console.log(
    "En iyi not ortalamasina sahip ders: " +
    mostSuccessfullLesson +
    " " +
    maxAvarage
  );
}

findMostSuccessfullLesson();

//E-Sinifin en kötü oldugu dersler
function findMinSuccessfulLesson() {
  let avarageList = [matheAvarage, germanAvarage, englishAvarage, geoAvarage];
  let minAvarage = Math.min.apply(null, avarageList);

  let minSuccessfullLesson = null;
  if (minAvarage == matheAvarage) {
    minSuccessfullLesson = "Mathematik";
  } else if (minAvarage == germanAvarage) {
    minSuccessfullLesson = "Almanca";
  } else if (minAvarage == englishAvarage) {
    minSuccessfullLesson = "Ingilizce";
  } else {
    minSuccessfullLesson = "Cografya";
  }
  console.log(
    "En kötü not ortalamasina sahip ders: " +
    minSuccessfullLesson +
    " " +
    minAvarage
  );
}

findMinSuccessfulLesson();

// F-En başarılı öğrencilerin listesi
function findMostSuccessfullStudent(pIndex) {
  let successStudent = [];
  let maxNotes = notes[0][1];
  for (let index = 0; index < notes.length; index++) {
    if (notes[index][pIndex] >= maxNotes) {
      maxNotes = notes[index][pIndex];
      successStudent = notes[index][0];
    }
  }
  if (pIndex == 1) {
    console.log(
      "Mathematik dersinde en iyi: " + maxNotes
      + " puan ile: " + successStudent
    );
  } else if (pIndex == 2) {
    console.log(
      "Almanca dersinde en iyi: " + maxNotes
      + " puan ile: " + successStudent
    );
  } else if (pIndex == 3) {
    console.log(
      "Ingilizce dersinde en iyi: " + maxNotes
      + " puan ile: " + successStudent
    );
  } else {
    console.log(
      "Cografya dersinde en iyi: " + maxNotes
      + " puan ile: " + successStudent
    );
  }
}

findMostSuccessfullStudent(1);
findMostSuccessfullStudent(2);
findMostSuccessfullStudent(3);
findMostSuccessfullStudent(4);