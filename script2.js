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

  document.getElementById("prevPageBtn").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

const translations = {
  fr: {
    title: "Bienvenue au Musée du Français",
    subtitle: "L’Hôtel de Ville et le main sites",
    paragraph: [
      "Hôtel de Ville (Mairie de Paris)",
      "L’Hôtel de Ville est le bâtiment où se trouve la mairie de Paris. Il est situé près de la Seine, en face de l’Île de la Cité. Le bâtiment actuel a été construit au XIXᵉ siècle dans un style néo-Renaissance après qu’un incendie a détruit l’ancien en 1871. C’est ici que se déroulent les grandes cérémonies officielles de la ville. Devant l’Hôtel de Ville, il y a souvent des événements, des marchés de Noël ou une patinoire en hiver.",
      "Centre Pompidou",
      "Le Centre Pompidou est un grand musée d’art moderne et contemporain à Paris. Il a été inauguré en 1977 et est célèbre pour son architecture originale : les tuyaux colorés, les escaliers et les structures métalliques sont à l’extérieur du bâtiment ! À l’intérieur, on trouve le Musée National d’Art Moderne, une bibliothèque et des espaces pour les expositions. C’est aussi un lieu vivant, avec des artistes de rue et une belle vue sur Paris depuis le dernier étage.",
      "Île Saint-Louis",
      "L’Île Saint-Louis est une petite île tranquille juste à côté de l’Île de la Cité. Elle a été construite au XVIIᵉ siècle et garde encore son charme ancien avec ses rues calmes et ses beaux immeubles. C’est un endroit chic et romantique, parfait pour une promenade. On y trouve aussi la célèbre glace Berthillon, que beaucoup de Parisiens et touristes adorent.",
      "Le Marais (partie sud)",
      "Le Marais est un quartier historique du centre de Paris, situé près de la Seine. La partie sud du Marais est connue pour ses hôtels particuliers, ses petites rues pleines de boutiques et de cafés, et ses beaux bâtiments anciens. C’est un quartier à la fois élégant et vivant, où l’on sent encore l’atmosphère du vieux Paris. On peut y visiter la place des Vosges, l’une des plus jolies places de la ville.",
    ],
    mapTitle: "4th arrondissement",
    caption: "Cliquez sur une miniature pour la mettre en grand",
    next: "← Page Précédente",
  },
  en: {
    title: "Les attraits du continent",
    subtitle: "Τα αξιοθέατα της ηπείρου",
    paragraph: [
      "Το Δημαρχείο του Παρισιού",
      "Το Δημαρχείο του Παρισιού (Hôtel de Ville) είναι το κτίριο όπου βρίσκεται η δημαρχία της πόλης. Βρίσκεται κοντά στον Σηκουάνα, απέναντι από το νησί Ιλ ντε λα Σιτέ. Το σημερινό κτίριο χτίστηκε τον 19ο αιώνα σε νεοαναγεννησιακό στυλ μετά από πυρκαγιά που κατέστρεψε το παλιό το 1871. Εδώ γίνονται οι μεγάλες επίσημες τελετές της πόλης. Μπροστά από το Δημαρχείο υπάρχουν συχνά εκδηλώσεις, χριστουγεννιάτικες αγορές ή παγοδρόμιο τον χειμώνα.",
      "Το Κέντρο Πομπιντού",
      "Το Κέντρο Πομπιντού είναι ένα μεγάλο μουσείο μοντέρνας και σύγχρονης τέχνης στο Παρίσι. Άνοιξε το 1977 και είναι διάσημο για την πρωτότυπη αρχιτεκτονική του: οι σωλήνες χρωματισμένοι, οι σκάλες και οι μεταλλικές κατασκευές βρίσκονται έξω από το κτίριο! Μέσα υπάρχουν το Εθνικό Μουσείο Σύγχρονης Τέχνης, μια βιβλιοθήκη και χώροι για εκθέσεις. Είναι επίσης ένας ζωντανός χώρος, με καλλιτέχνες του δρόμου και όμορφη θέα του Παρισιού από τον τελευταίο όροφο. ",
      "Το νησί Saint-Louis",
      "Το νησί Ιλ Σαν-Λουί είναι ένα μικρό ήσυχο νησί δίπλα στο Ιλ ντε λα Σιτέ. Χτίστηκε τον 17ο αιώνα και διατηρεί ακόμα τη παλιά του γοητεία με ήσυχους δρόμους και όμορφα κτίρια. Είναι ένας κομψός και ρομαντικός τόπος, ιδανικός για βόλτες. Εκεί βρίσκεται και η διάσημη παγωταρία Berthillon, που αγαπούν πολλοί Παριζιάνοι και τουρίστες.",
      "Το Marais",
      "Το Μαραί είναι μια ιστορική γειτονιά στο κέντρο του Παρισιού, κοντά στον Σηκουάνα. Το νότιο τμήμα του Μαραί είναι γνωστό για τα παλιά αρχοντικά, τα στενά δρομάκια με καταστήματα και καφέ και τα όμορφα κτίρια. Είναι μια κομψή και ζωντανή περιοχή όπου ακόμα νιώθεις την ατμόσφαιρα του παλιού Παρισιού. Εκεί βρίσκεται και η πλατεία Βοζ, μία από τις πιο όμορφες πλατείες της πόλης.",
    ],
    mapTitle: "4th arrondissement",
    caption: "Click a thumbnail to enlarge it",
    next: "← Προηγούμενη σελίδα",
  },
};

let currentLang = "fr";

const langBtn = document.getElementById("lang-toggle");
const nextBtn = document.getElementById("prevPageBtn");

const elements = {
  title: document.querySelector("header h1"),
  subtitle: document.querySelector("main .text-side h2"),
  paragraphContainer: document.querySelector("main .text-side"),
  mapTitle: document.querySelector("#map-frame h3"),
  caption: document.querySelector(".caption"),
};

function updateLanguage() {
  const langData = translations[currentLang];

  // update static text
  elements.title.textContent = langData.title;
  elements.subtitle.textContent = langData.subtitle;
  elements.mapTitle.textContent = langData.mapTitle;
  elements.caption.textContent = langData.caption;
  nextBtn.textContent = langData.next;

  const existingParagraphs = elements.paragraphContainer.querySelectorAll("p");
  existingParagraphs.forEach((p) => p.remove());

  langData.paragraph.forEach((pText) => {
    const p = document.createElement("p");
    p.textContent = pText;
    elements.paragraphContainer.appendChild(p);
  });
}

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  langBtn.textContent = currentLang === "fr" ? "ΕΛ" : "FR";
  updateLanguage();
});

updateLanguage();

