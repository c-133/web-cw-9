// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

// let img = document.getElementById("image");
// img.src = "./images/moon.jpg";

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر

// let title = document.getElementById("caption");
// title.innerHTML = "القمر ";

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1

function switcher() {
  let img = document.getElementById("image");
  let title = document.getElementById("caption");
  let body = document.getElementById("body");

  if (title.innerHTML == "القمر") {
    title.innerHTML = "الشمس";
    img.src = "./images/sun.jpg";
    body.style.background = `orange`;
  } else {
    title.innerHTML = "القمر";
    img.src = "./images/moon.jpg";
    body.style.background = `gray`;
  }
}
// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
    يتغير لون إطار البطاقة للأبيض
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
