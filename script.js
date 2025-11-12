document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.style.opacity = 0;

      setTimeout(() => {
        const temp = mainImage.getAttribute("src");
        mainImage.setAttribute("src", thumb.getAttribute("src"));
        thumb.setAttribute("src", temp);

        mainImage.style.opacity = 1;
      }, 300);
    });
  });

  const nextBtn = document.getElementById("nextPageBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      window.location.href = "index2.html";
    });
  }

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "fr" ? "en" : "fr";
      applyTranslations(currentLang);

      langBtn.textContent = currentLang === "fr" ? "EN" : "FR";
    });
  }
});

const translations = {
  fr: {
    title: "Bienvenue au Musée du Français",
    paragraph: [
      "Île de la Cité",
      "L’Île de la Cité est une petite île située au cœur de Paris, sur la Seine. C’est le centre historique de la ville et l’un des plus anciens lieux habités de Paris. Autrefois, c’était un village gaulois avant de devenir le siège du pouvoir royal et religieux au Moyen Âge. Aujourd’hui, on y trouve plusieurs bâtiments importants comme le Palais de Justice, la Conciergerie (ancienne prison où fut enfermée Marie-Antoinette) et la Sainte-Chapelle, célèbre pour ses magnifiques vitraux. C’est aussi un lieu très visité par les touristes qui aiment se promener le long des quais et admirer la vue sur les ponts de Paris.",
      "La cathédrale Notre-Dame de Paris",
      "La cathédrale Notre-Dame, située sur l’Île de la Cité, est l’un des monuments les plus célèbres de France. Sa construction a commencé en 1163 et a duré plus de 180 ans. Elle est un chef-d’œuvre de l’architecture gothique, connue pour ses vitraux colorés, ses gargouilles et ses deux grandes tours. Victor Hugo l’a rendue encore plus célèbre avec son roman Notre-Dame de Paris publié en 1831. En 2019, un grand incendie a gravement endommagé la cathédrale, mais des travaux de restauration sont en cours pour la rouvrir en 2025. Un fait amusant : le « point zéro des routes de France », qui marque le centre officiel du pays, se trouve juste devant Notre-Dame !",
    ],
    mapTitle: "📍 Carte du Site — Cathédrale Notre-Dame de Paris",
    subtitle: "Une île faite d'histoire",
    caption: "Cliquez sur une miniature pour la mettre en grand",
    next: "Page Suivante →",
  },
  en: {
    title: "Καλωσορίσατε στο γαλλικό μουσείο",
    subtitle: "Ένα νησί βυθισμένο στην ιστορία",
    paragraph: [
      "Île de la Cité",
      "«Το νησί της πόλης» είναι ένα μικρό νησί στο κέντρο του Παρισιού, πάνω στον Σηκουάνα. Είναι το ιστορικό κέντρο της πόλης και ένα από τα πιο παλιά κατοικημένα μέρη του Παρισιού. Παλαιότερα ήταν ένα γαλατικό χωριό, πριν γίνει έδρα της βασιλικής και θρησκευτικής εξουσίας κατά τον Μεσαίωνα. Σήμερα φιλοξενεί σημαντικά κτίρια, όπως το Δικαστικό Μέγαρο, τη Κονσιερζερί (παλιά φυλακή όπου κρατήθηκε η Μαρία Αντουανέτα) και τη Σαιντ-Σαπέλ, διάσημη για τα υπέροχα βιτρώ της. Είναι επίσης ένα πολύ αγαπημένο μέρος για τους τουρίστες που απολαμβάνουν να περπατούν στις όχθες και να θαυμάζουν τη θέα προς τις γέφυρες του Παρισιού.",
      "Ο Καθεδρικός Ναός της Παναγίας των Παρισίων (Notre-Dame de Paris)",
      "Ο Καθεδρικός Ναός της Παναγίας των Παρισίων, που βρίσκεται στο νησί Ιλ ντε λα Σιτέ, είναι ένα από τα πιο γνωστά μνημεία της Γαλλίας. Η κατασκευή του ξεκίνησε το 1163 και διήρκεσε πάνω από 180 χρόνια. Είναι αριστούργημα της γοτθικής αρχιτεκτονικής, γνωστό για τα πολύχρωμα βιτρώ, τα γκαργκόιλς και τους δύο μεγάλους πύργους του. Ο Βίκτωρ Ουγκό τον έκανε ακόμα πιο διάσημο με το μυθιστόρημά του Η Παναγία των Παρισίων το 1831. Το 2019, μια μεγάλη πυρκαγιά προκάλεσε σοβαρές ζημιές στον ναό, αλλά βρίσκονται σε εξέλιξη έργα αποκατάστασης ώστε να ανοίξει ξανά το 2025. Ένα διασκεδαστικό γεγονός: το «σημείο μηδέν των δρόμων της Γαλλίας», που δείχνει το κέντρο της χώρας, βρίσκεται ακριβώς μπροστά από τη Νοτρ-Νταμ!",
    ],
    mapTitle: "📍 Site Map — Notre-Dame Cathedral of Paris",
    caption: "Click a thumbnail to enlarge it",
    next: "Επόμενη σελίδα →",
  },
};

const elements = {
  title: document.querySelector("header h1"),
  mapTitle: document.querySelector("#map-frame h3"),
  caption: document.querySelector(".caption"),
};

// default language
let currentLang = "fr";

function applyTranslations(lang) {
  const t = translations[lang];

  if (elements.title) elements.title.textContent = t.title;

  const textSide = document.querySelector("main .text-side");
  if (textSide) {
    textSide.innerHTML = "";

    const subtitle = document.createElement("h2");
    subtitle.textContent = t.subtitle;
    textSide.appendChild(subtitle);

    t.paragraph.forEach((p) => {
      const para = document.createElement("p");
      para.textContent = p;
      textSide.appendChild(para);
    });
  }

  if (elements.mapTitle) elements.mapTitle.textContent = t.mapTitle;
  if (elements.caption) elements.caption.textContent = t.caption;

  const nextBtn = document.getElementById("nextPageBtn");
  if (nextBtn) nextBtn.textContent = t.next;
}

applyTranslations(currentLang);

const initialLangBtn = document.getElementById("lang-toggle");
if (initialLangBtn)
  initialLangBtn.textContent = currentLang === "fr" ? "ΕΛ" : "FR";
