/** 
- Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
- Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
- Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
- Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
- Sinifin en kötü oldugu dersi gostermesi
- Tüm derslerin en iyi ögrencilerini bulmasi
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
  
  // Sinifin Matematik ortalamasi
  function findMathAvarage() {
    let index;
    let avarageMathe = null;
    let summe = 0;
  
    for (index = 0; index < students; index++) {
      let matheNote = notes[index][1];
      summe += matheNote;
      avarageMathe = summe / students;
    }
    console.log("Sinifin Matematik ortalamasi :" + avarageMathe);
    return avarageMathe;
  }
  
  //Sinifin Almanca ortalamasi
  function findGermanAvarage() {
    let index;
    let avarageGerman = null;
    let summe = 0;
  
    for (index = 0; index < students; index++) {
      let germanNote = notes[index][2];
      summe += germanNote;
      avarageGerman = summe / students;
    }
    console.log("Sinifin Almanca ortalamasi :" + avarageGerman);
    return avarageGerman;
  }
  
  //Sinifin Ingilizce ortalamasi
  function findEnglishAvarage() {
    let index;
    let avarageEnglish = null;
    let summe = 0;
  
    for (index = 0; index < students; index++) {
      let englishNote = notes[index][3];
      summe += englishNote;
      avarageEnglish = summe / students;
    }
    console.log("Sinifin Ingilizce ortalamasi :" + avarageEnglish);
    return avarageEnglish;
  }
  
  // Sinifin Cografya ortalamasi 
  function findGeoAvarage() {
    let index;
    let avarageGeo = null;
    let summe = 0;
  
    for (index = 0; index < students; index++) {
      let geoNote = notes[index][4];
      summe += geoNote;
      avarageGeo = summe / students;
    }
    console.log("Sinifin Cografya ortalamasi :" + avarageGeo);
    return avarageGeo;
  }
  
  // 70 puandan fazla alan öğrencilerin listesi
  function findSuccessfullStudents(pLessons, pNoteList, pIndex) {
    let newList = [];
    for (let i = 0; i < pNoteList.length; i++) {
      if (pNoteList[i][pIndex] > 70) {
        newList.push(pNoteList[i][0] + " " + pNoteList[i][pIndex]);
      }
    }
    console.log(pLessons, newList);
  }
  
  let matheAvarage = findMathAvarage();
  let germanAvarage = findGermanAvarage();
  let englishAvarage = findEnglishAvarage();
  let geoAvarage = findGeoAvarage();
  
  //ortalamanın üzerindeki öğrencilerin listesi
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
  
  // en başarılı dersler
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
  
  //Sinifin en kötü oldugu dersler
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
  
  // en başarılı öğrencilerin listesi
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
        "Mathematik dersi en iyi: " + maxNotes
        + " puan ile: " + successStudent
      );
    } else if (pIndex == 2) {
      console.log(
        "Almanca dersi en iyi: " + maxNotes
        +" puan ile: " + successStudent
      );
    } else if (pIndex == 3) {
      console.log(
        "Ingilizce dersi en iyi: " + maxNotes
        +" puan ile: " + successStudent
      );
    } else {
      console.log(
        "Cografya dersi en iyi: " + maxNotes
        +" puan ile: " + successStudent
      );
    }
  }
  
  findMathAvarage();
  findGermanAvarage();
  findEnglishAvarage();
  findGeoAvarage();
  findSuccessfullStudents("Matematikten 70 üzeri alanlar: ", notes, 1);
  findSuccessfullStudents("Almancadan 70 üzeri alanlar: ", notes, 2);
  findSuccessfullStudents("Ingilizceden 70 üzeri alanlar", notes, 3);
  findSuccessfullStudents("Cografyadan 70 üzeri alanlar", notes, 4);
  findStudentsOverAvarage("Matematikten ortalamanin üzerinde alan: ", notes, 1);
  findStudentsOverAvarage("Almancadan ortalamanin üzerinde alan: ", notes, 2);
  findStudentsOverAvarage("Ingilizceden ortalamanin üzerinde alan: ", notes, 3);
  findStudentsOverAvarage("Cografyadan ortalamanin üzerinde alan: ", notes, 4);
  findMostSuccessfullLesson();
  findMinSuccessfulLesson();
  findMostSuccessfullStudent(1);
  findMostSuccessfullStudent(2);
  findMostSuccessfullStudent(3);
  findMostSuccessfullStudent(4);