
// ✅ البيانات مدمجة مباشرة هنا
let data;

if (localStorage.getItem("amazighData")) {
  data = JSON.parse(localStorage.getItem("amazighData"));
} else {
  data = 
{
  "الجسم": [
    {
      "word": "أودم",
      "translation": "وجه"
    },
    {
      "word": "زاو",
      "translation": "شعر"
    },
    {
      "word": "أبلاو",
      "translation": "حاجب"
    },
    {
      "word": "طيط",
      "translation": "عين"
    },
    {
      "word": "تينجار",
      "translation": "أنف"
    },
    {
      "word": "إيمي",
      "translation": "فم"
    },
    {
      "word": "تيغماس",
      "translation": "أسنان"
    },
    {
      "word": "إيلس",
      "translation": "لسان"
    },
    {
      "word": "تاكرومت",
      "translation": "رقبة"
    },
    {
      "word": "فوش",
      "translation": "يد"
    },
    {
      "word": "دار",
      "translation": "رجل"
    }
  ],
  "الضمائر": [
    {
      "word": "نتش",
      "translation": "أنا"
    },
    {
      "word": "نتشنا",
      "translation": "نحن"
    },
    {
      "word": "شَك",
      "translation": "أنت للمذكر"
    },
    {
      "word": "شَم",
      "translation": "أنت للمؤنث"
    },
    {
      "word": "نَتٌَا",
      "translation": "هو"
    },
    {
      "word": "نَتات",
      "translation": "هي"
    },
    {
      "word": "نَتنين",
      "translation": "هما"
    }
  ],
  "الأوقات": [
    {
      "word": "أشو",
      "translation": "يوم"
    },
    {
      "word": "سمانت",
      "translation": "أسبوع"
    },
    {
      "word": "يور",
      "translation": "شهر"
    },
    {
      "word": "أسقاس",
      "translation": "سنة"
    },
    {
      "word": "غابسا",
      "translation": "الصباح"
    },
    {
      "word": "دقاس",
      "translation": "المساء"
    },
    {
      "word": "ضقيد G",
      "translation": "الليل"
    },
    {
      "word": "أسناط / ايناط",
      "translation": "الأمس"
    },
    {
      "word": "أشا",
      "translation": "الغد"
    },
    {
      "word": "ساعت",
      "translation": "ساعة"
    },
    {
      "word": "ازقن ساعات",
      "translation": "نصف ساعة"
    },
    {
      "word": "دقيقت",
      "translation": "دقيقة"
    },
    {
      "word": "ايمارو",
      "translation": "الأن"
    },
    {
      "word": "تفاصكا أشا",
      "translation": "العيد غدا"
    }
  ],
  "الأقارب": [
    {
      "word": "دَادَا",
      "translation": "الأب"
    },
    {
      "word": "نانا",
      "translation": "الأم"
    },
    {
      "word": "أمٍِي / أرا",
      "translation": "الإبن "
    },
    {
      "word": "أمٌَا",
      "translation": "الأخ"
    },
    {
      "word": "وَتْنَا",
      "translation": "الأخت"
    },
    {
      "word": "حَدْ",
      "translation": "الإنسان أو شخص ما"
    }
  ],
  "الأشياء": [
    {
      "word": "تافياست",
      "translation": "القارورة"
    }
  ],
  "الملابس": [
    {
      "word": "اسراويل",
      "translation": "السروال"
    },
    {
      "word": "تريكو",
      "translation": "القميص"
    },
    {
      "word": "الشورط",
      "translation": "الشورط"
    },
    {
      "word": "تريحت",
      "translation": "الحذاء"
    },
    {
      "word": "انقاشير",
      "translation": "التقاشر"
    },
    {
      "word": "الربة",
      "translation": "الربة / الفستان"
    },
    {
      "word": "القفالي",
      "translation": "الأزرار"
    }
  ],
  "الأفعال": [
    {
      "word": "يوشد",
      "translation": "أتى - يأتي"
    },
    {
      "word": "يخش",
      "translation": "أحب / يحب"
    },
    {
      "word": "يبي",
      "translation": "أخذ / يأخذ"
    },
    {
      "word": "يفاتش",
      "translation": "بحث / يبحث"
    },
    {
      "word": "ازد",
      "translation": "ترك / يترك"
    },
    {
      "word": "يفو",
      "translation": "وجد / يجد"
    },
    {
      "word": "اتازل",
      "translation": "جرى / يجري"
    },
    {
      "word": "أود",
      "translation": "جلب / يجلب / اجلب"
    },
    {
      "word": "يزور",
      "translation": "يرى / ينظر"
    },
    {
      "word": "يخش",
      "translation": "أراد / يريد"
    },
    {
      "word": "يسول",
      "translation": "سأل / يسأل"
    },
    {
      "word": "يسغو",
      "translation": "اشترى"
    },
    {
      "word": "يتحوسا",
      "translation": "يشعر / يحس"
    },
    {
      "word": "يوض",
      "translation": "وصل / يصل"
    },
    {
      "word": "يشن",
      "translation": "عرف / يعرف"
    },
    {
      "word": "يشو",
      "translation": "أعطى / يعطي"
    },
    {
      "word": "يخدم",
      "translation": "عمل / يعمل"
    },
    {
      "word": "يزووا",
      "translation": "غادر / يغادر / ذهب / يذهب"
    },
    {
      "word": "يوشد",
      "translation": "جاء / يجيء"
    },
    {
      "word": "يشن",
      "translation": "عرف / يعرف"
    },
    {
      "word": "يناياك",
      "translation": "قال / يقول"
    },
    {
      "word": "يكشب",
      "translation": "ملك / يملك"
    },
    {
      "word": "يفو",
      "translation": "وجد / يجد"
    },
    {
      "word": "يزرو",
      "translation": "نظر / ينظر"
    },
    {
      "word": "يغو",
      "translation": "حصل على  /  يحصل على"
    },
    {
      "word": "تاقيمت",
      "translation": "جلس / يجلس"
    },
    {
      "word": "إرد",
      "translation": "لبس / يلبس / إلبس"
    }
  ],
  "الحيوانات": [
    {
      "word": "أيدي",
      "translation": "الكلب أكرمكم الله"
    },
    {
      "word": "أغْيول",
      "translation": "الحمار أكرمكم الله"
    },
    {
      "word": "أتْبير",
      "translation": "الحمام"
    },
    {
      "word": "أجديد",
      "translation": "عصفور"
    },
    {
      "word": "موش",
      "translation": "القط"
    }
  ],
  "في المنزل": [
    {
      "word": "تدارت",
      "translation": "المنزل"
    },
    {
      "word": "ايكومار",
      "translation": "الغرفة"
    },
    {
      "word": "كوزينة",
      "translation": "المطبخ"
    },
    {
      "word": "امورو",
      "translation": "الحائط"
    },
    {
      "word": "تاوورت",
      "translation": "الباب"
    },
    {
      "word": "التاقة",
      "translation": "النافذة"
    },
    {
      "word": "تشونان",
      "translation": "السلم"
    },
    {
      "word": "انج",
      "translation": "السطح"
    },
    {
      "word": "تالا",
      "translation": "الحنفية"
    },
    {
      "word": "اكات",
      "translation": "السرير"
    },
    {
      "word": "تيكيمت",
      "translation": "الوسادة"
    },
    {
      "word": "ادان",
      "translation": "الغطاء"
    },
    {
      "word": "طاولت",
      "translation": "الطاولة"
    }
  ],
  "الصفات": [
    {
      "word": "ايبها",
      "translation": "جميل"
    },
    {
      "word": "اجعلوك",
      "translation": "كبير"
    },
    {
      "word": "أكشيش",
      "translation": "صغير"
    },
    {
      "word": "يقوى",
      "translation": "شجاع"
    },
    {
      "word": "يحوى",
      "translation": "جبان"
    },
    {
      "word": "يقوى",
      "translation": "قوي"
    },
    {
      "word": "اجيوار",
      "translation": "سمين"
    },
    {
      "word": "ازداد",
      "translation": "رقيق"
    },
    {
      "word": "ازقرار G",
      "translation": "طويل"
    },
    {
      "word": "اقزول",
      "translation": "قصير"
    }
  ],
  "الأكل": [
    {
      "word": "إتشو",
      "translation": "الطعام"
    },
    {
      "word": "إسْوا",
      "translation": "الشرب"
    },
    {
      "word": "أغروم / أفرشيش",
      "translation": "الخبز"
    }
  ],
  "كلمات أخرى": [
    {
      "word": "أمزداغ",
      "translation": "البلد"
    },
    {
      "word": "إسْلان",
      "translation": "العرس"
    },
    {
      "word": "تامورت",
      "translation": "الأرض"
    },
    {
      "word": "أدٌََرب",
      "translation": "الشارع"
    },
    {
      "word": "تامْزيدا",
      "translation": "المسجد"
    },
    {
      "word": "أمْزار",
      "translation": "المطر"
    },
    {
      "word": "إثران",
      "translation": "النجوم"
    },
    {
      "word": "تاصمودي",
      "translation": "البرد"
    },
    {
      "word": "آضُو",
      "translation": "الرياح"
    }
  ],
  "بعض الجمل المتكررة": [
    {
      "word": "اوشينا ماتا يوشد",
      "translation": "لا أدري إذا جا / مانعرف إذا جا"
    },
    {
      "word": "اوشينا إيلا دا",
      "translation": "لا أدري إذا كان هنا"
    },
    {
      "word": "سهود فوشك",
      "translation": "أنزل يديك"
    },
    {
      "word": "أو بقار G",
      "translation": "لا ترمي"
    },
    {
      "word": "أزِن ناناك",
      "translation": "اجري لماماك"
    },
    {
      "word": "كش دارك",
      "translation": "انزع قدمك"
    }
  ],
  "الألوان": [
    {
      "word": "أزقاغ G",
      "translation": "الأحمر"
    },
    {
      "word": "أزيزاو",
      "translation": "الأخضر"
    },
    {
      "word": "أملال",
      "translation": "الأبيض"
    },
    {
      "word": "أغقال G",
      "translation": "الأسود"
    },
    {
      "word": "أوراغ",
      "translation": "الأصفر"
    },
    {
      "word": "أعزازي",
      "translation": "البنفسجي"
    }
  ],
  "الخضر": [
    {
      "word": "زاليم",
      "translation": "البصل"
    },
    {
      "word": "تيفسناغ",
      "translation": "الجزر"
    },
    {
      "word": "تيشرت",
      "translation": "الثوم"
    },
    {
      "word": "تاخلابت",
      "translation": "فلفل حار"
    }
  ],
  "الفواكه": [
    {
      "word": "ارمون",
      "translation": "الرمان"
    },
    {
      "word": "أضيل",
      "translation": "العنب"
    }
  ],
  "الأرقام": [
    {
      "word": "إقن G",
      "translation": "واحد"
    },
    {
      "word": "سن",
      "translation": "إثنان"
    }
  ]
};
  localStorage.setItem("amazighData", JSON.stringify(data));
}

document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

const groups = [
  "الضمائر", "الأوقات", "الخضر", "الفواكه", "الحيوانات",
  "الأرقام", "الألوان", "الأقارب", "التحيات", "الأشياء",
  "الصفات","الأفعال","الأكل", "الجسم", "الملابس", "الأواني","في المنزل","كلمات أخرى", "بعض الجمل المتكررة",
];

const wordList = document.getElementById("wordList");
const wordInput = document.getElementById("wordInput");
const translationInput = document.getElementById("translationInput");
const globalSearchInput = document.getElementById("globalSearchInput");
const groupTabs = document.getElementById("groupTabs");

let currentGroup = groups[0];

groups.forEach(group => {
  const btn = document.createElement("button");
  btn.textContent = group;
  btn.onclick = () => {
    currentGroup = group;
    updateActiveTab();
    globalSearchInput.value = "";
    renderGroupWords();
  };
  groupTabs.appendChild(btn);
});

function updateActiveTab() {
  const buttons = groupTabs.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.textContent === currentGroup);
  });
}

function saveData() {
  localStorage.setItem("amazighData", JSON.stringify(data));
}

function getWordsByGroup(group) {
  return data[group] || [];
}

function addWord() {
  const word = wordInput.value.trim();
  const translation = translationInput.value.trim();
  if (!word || !translation) return;

  if (!data[currentGroup]) data[currentGroup] = [];
  data[currentGroup].push({ word, translation });
  saveData();

  wordInput.value = "";
  translationInput.value = "";
  renderGroupWords();
}

function updateWord(group, index, newWord, newTranslation) {
  const old = data[group][index];

  if (newWord === old.word && newTranslation === old.translation) return;

  const confirmEdit = confirm("هل تريد حقا تغيير الكلمة ؟");
  if (!confirmEdit) {
    renderGroupWords();
    return;
  }

  data[group][index] = { word: newWord, translation: newTranslation };
  saveData();
  renderGroupWords();
}

function deleteWord(group, index) {
  const confirmDelete = confirm("هل تريد حقًا حذف الكلمة؟");
  if (!confirmDelete) return;

  data[group].splice(index, 1);
  saveData();
  renderGroupWords();
}

function renderGroupWords() {
  const words = getWordsByGroup(currentGroup);
  renderWords(words, currentGroup);
}

function renderWords(words, group = null) {
  wordList.innerHTML = "";
  words.forEach((item, index) => {
    const li = document.createElement("li");

    const wordField = document.createElement("input");
    wordField.value = item.word;
    wordField.onchange = () => updateWord(group, index, wordField.value, translationField.value);

    const translationField = document.createElement("input");
    translationField.value = item.translation;
    translationField.onchange = () => updateWord(group, index, wordField.value, translationField.value);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ حذف";
    deleteBtn.onclick = () => deleteWord(group, index);

    li.appendChild(translationField);
    li.appendChild(wordField);
    li.appendChild(deleteBtn);
    wordList.appendChild(li);
  });
}

function searchAllWords(query) {
  const results = [];

  for (const group in data) {
    data[group].forEach((item, index) => {
      if (item.word.includes(query) || item.translation.includes(query)) {
        results.push({ ...item, group, index });
      }
    });
  }

  wordList.innerHTML = "";

  results.forEach(result => {
    const li = document.createElement("li");

    const wordField = document.createElement("input");
    wordField.value = result.word;
    wordField.onchange = () => updateWord(result.group, result.index, wordField.value, translationField.value);

    const translationField = document.createElement("input");
    translationField.value = result.translation;
    translationField.onchange = () => updateWord(result.group, result.index, wordField.value, translationField.value);

    const groupLabel = document.createElement("small");
    groupLabel.textContent = "📂 (" + result.group + ")";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ حذف";
    deleteBtn.onclick = () => deleteWord(result.group, result.index);

    li.appendChild(translationField);
    li.appendChild(wordField);
    li.appendChild(groupLabel);
    li.appendChild(deleteBtn);

    wordList.appendChild(li);
  });
}

globalSearchInput.addEventListener("input", () => {
  const query = globalSearchInput.value.trim();
  if (query) {
    searchAllWords(query);
  } else {
    renderGroupWords();
  }
});

updateActiveTab();
renderGroupWords();
