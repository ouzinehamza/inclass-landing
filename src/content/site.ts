export type Audience = "student" | "tutor" | "parent";

export const AUDIENCE = {
  student: {
    label: "Élève",
    plural: "Élèves",
    accent: "student",
    text: "text-student-600",
    bg: "bg-student-500",
    soft: "bg-student-50",
    softText: "text-student-700",
    border: "border-student-200",
    ring: "ring-student-500",
  },
  tutor: {
    label: "Professeur",
    plural: "Professeurs",
    accent: "tutor",
    text: "text-tutor-600",
    bg: "bg-tutor-500",
    soft: "bg-tutor-50",
    softText: "text-tutor-700",
    border: "border-tutor-200",
    ring: "ring-tutor-500",
  },
  parent: {
    label: "Parent",
    plural: "Parents",
    accent: "parent",
    text: "text-parent-600",
    bg: "bg-parent-500",
    soft: "bg-parent-50",
    softText: "text-parent-700",
    border: "border-parent-200",
    ring: "ring-parent-500",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/comment-ca-marche", label: "Comment ça marche", mega: true },
  { href: "/ressources", label: "Ressources" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const MEGA_MENU = [
  {
    key: "student",
    title: "Élèves",
    tagline: "Trouve le prof qui te fait progresser",
    href: "/comment-ca-marche/eleves",
    links: [
      { label: "Comment ça marche", href: "/comment-ca-marche/eleves", icon: "route" },
      { label: "Demander un professeur", href: "/contact", icon: "search" },
      { label: "Cours à domicile", href: "/comment-ca-marche/eleves", icon: "home" },
      { label: "Cours en ligne", href: "/comment-ca-marche/eleves", icon: "video" },
      { label: "Espace parents", href: "/comment-ca-marche/eleves#parents", icon: "users" },
    ],
  },
  {
    key: "tutor",
    title: "Professeurs",
    tagline: "Enseigne et développe ton activité",
    href: "/comment-ca-marche/profs",
    links: [
      { label: "Devenir professeur", href: "/comment-ca-marche/profs", icon: "cap" },
      { label: "Rémunération & commissions", href: "/comment-ca-marche/profs#commissions", icon: "wallet" },
      { label: "Déposer ma candidature", href: "/comment-ca-marche/profs#candidature", icon: "rocket" },
      { label: "FAQ professeurs", href: "/comment-ca-marche/profs#faq", icon: "help" },
    ],
  },
  {
    key: "parent",
    title: "Parents",
    tagline: "Suivez la progression, sereinement",
    href: "/comment-ca-marche/eleves#parents",
    links: [
      { label: "Espace parent", href: "/comment-ca-marche/eleves#parents", icon: "users" },
      { label: "Suivi & bilans", href: "/comment-ca-marche/eleves#suivi", icon: "chart" },
      { label: "Sécurité & vérification", href: "/a-propos#confiance", icon: "shield" },
      { label: "Questions fréquentes", href: "/comment-ca-marche/eleves#faq", icon: "help" },
      { label: "Être rappelé", href: "/contact", icon: "phone" },
    ],
  },
];

export const STATS = [
  { value: "12 400+", label: "Profs vérifiés" },
  { value: "85 000+", label: "Cours donnés" },
  { value: "48", label: "Matières couvertes" },
  { value: "32", label: "Villes au Maroc" },
  { value: "4,9 ★", label: "Note moyenne" },
];

export const CITIES = [
  "Agadir",
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tanger",
  "Fès",
  "Meknès",
  "Oujda",
  "Kénitra",
  "Tétouan",
  "Salé",
  "El Jadida",
];

export const LEVELS = [
  "Primaire",
  "Collège",
  "Tronc commun",
  "1ère Bac",
  "2ème Bac",
  "Prépa / Supérieur",
  "Adultes",
];

export const FALLBACK_SUBJECTS = [
  { slug: "mathematiques", name: "Mathématiques", icon: "math", learners: 21400, tutorsCount: 1840, category: "Scientifique", popular: true },
  { slug: "physique-chimie", name: "Physique-Chimie", icon: "physics", learners: 14800, tutorsCount: 1120, category: "Scientifique", popular: true },
  { slug: "francais", name: "Français", icon: "french", learners: 18300, tutorsCount: 1460, category: "Langues", popular: true },
  { slug: "anglais", name: "Anglais", icon: "english", learners: 16250, tutorsCount: 1310, category: "Langues", popular: true },
  { slug: "arabe", name: "Arabe", icon: "arabic", learners: 9400, tutorsCount: 870, category: "Langues", popular: true },
  { slug: "svt", name: "SVT", icon: "biology", learners: 7600, tutorsCount: 640, category: "Scientifique", popular: true },
  { slug: "informatique", name: "Informatique & Code", icon: "code", learners: 5200, tutorsCount: 410, category: "Numérique", popular: true },
  { slug: "soutien-primaire", name: "Soutien primaire", icon: "primary", learners: 11900, tutorsCount: 980, category: "Scolaire", popular: true },
  { slug: "economie-gestion", name: "Économie & Gestion", icon: "economics", learners: 4300, tutorsCount: 320, category: "Supérieur", popular: false },
  { slug: "histoire-geo", name: "Histoire-Géographie", icon: "history", learners: 3800, tutorsCount: 290, category: "Littéraire", popular: false },
  { slug: "philosophie", name: "Philosophie", icon: "philosophy", learners: 3100, tutorsCount: 210, category: "Littéraire", popular: false },
  { slug: "espagnol", name: "Espagnol", icon: "spanish", learners: 2900, tutorsCount: 240, category: "Langues", popular: false },
];

export const STUDENT_STEPS = [
  {
    title: "1. Inscription & préférences",
    body: "Crée ton compte et renseigne tes informations : ville, matières ciblées, niveau scolaire et préférences d'apprentissage.",
    icon: "profile",
    image: "/images/hero-student.jpg",
  },
  {
    title: "2. Recharge ton portefeuille",
    body: "Alimente ton wallet sécurisé en dirhams (MAD). Aucun abonnement : ton argent reste disponible et sécurisé.",
    icon: "wallet",
    image: "/images/lesson-home.jpg",
  },
  {
    title: "3. Trouve le meilleur prof",
    body: "Explore le catalogue de profs vérifiés, compare les profils détaillés, les avis d'élèves et les vidéos de présentation.",
    icon: "search",
    image: "/images/hero-wide.jpg",
  },
  {
    title: "4. Réserve et planifie",
    body: "Choisis le créneau idéal, la date et le format (en ligne ou à domicile). Le montant de la séance est réservé.",
    icon: "calendar",
    image: "/images/become-tutor.jpg",
  },
  {
    title: "5. Séance & évaluation",
    body: "Passe ta séance, valide le cours et donne ton avis. Le paiement n'est débloqué au tuteur qu'après réalisation.",
    icon: "trending",
    image: "/images/parents.jpg",
  },
];

export const TUTOR_STEPS = [
  {
    title: "1. Inscription & profil complet",
    body: "Renseigne tes informations, localisation, matières, langues parlées, diplômes et qualifications pédagogiques.",
    icon: "profile",
    image: "/images/become-tutor.jpg",
  },
  {
    title: "2. Activation du portefeuille",
    body: "Configure et recharge ton wallet pour activer ton profil et accéder aux demandes d'élèves qualifiées.",
    icon: "wallet",
    image: "/images/lesson-home.jpg",
  },
  {
    title: "3. Demandes d'élèves & offres",
    body: "Consulte les besoins postés par les élèves de ta région ou fais des propositions personnalisées en direct.",
    icon: "inbox",
    image: "/images/banner-resources.jpg",
  },
  {
    title: "4. Réservations confirmées",
    body: "Reçois des réservations d'élèves et de parents selon tes créneaux de disponibilité et ton tarif horaire libre.",
    icon: "calendar",
    image: "/images/hero-tutor.jpg",
  },
  {
    title: "5. Cours en ligne ou sur place",
    body: "Donne tes cours en visioconférence interactive ou rencontre l'élève au lieu convenu ensemble dans le chat.",
    icon: "users",
    image: "/images/hero-wide.jpg",
  },
  {
    title: "6. Évaluation mutuelle",
    body: "Rédige le compte rendu de la séance et évalue l'élève pour enrichir la réputation de ton profil.",
    icon: "trending",
    image: "/images/hero-student.jpg",
  },
  {
    title: "7. Rémunération garantie",
    body: "L'argent est débloqué et transféré sur ton solde immédiatement après la validation de la séance effectuée.",
    icon: "shield",
    image: "/images/parents.jpg",
  },
];

export const PARENT_STEPS = [
  {
    title: "1. Inscription espace parent",
    body: "Créez votre compte parent en quelques secondes pour suivre et administrer facilement la scolarité de vos enfants.",
    icon: "profile",
    image: "/images/parents.jpg",
  },
  {
    title: "2. Rattachez vos enfants",
    body: "Ajoutez les profils de vos enfants (niveau, école, matières) pour centraliser leur planning et leurs bilans.",
    icon: "users",
    image: "/images/hero-student.jpg",
  },
  {
    title: "3. Choisissez les profs & créneaux",
    body: "Explorez les offres de profs vérifiés et réservez les horaires idéaux pour vos enfants en toute simplicité.",
    icon: "calendar",
    image: "/images/lesson-home.jpg",
  },
  {
    title: "4. Réglez à la séance & suivez",
    body: "Alimentez le wallet familial, payez sans abonnement par séance et recevez les comptes rendus après chaque cours.",
    icon: "wallet",
    image: "/images/banner-resources.jpg",
  },
];

export const GUARANTEES = [
  {
    title: "Premier cours satisfait ou remplacé",
    body: "Le courant ne passe pas ? On vous propose un autre professeur qualifié sans frais supplémentaires.",
    icon: "cap",
  },
  {
    title: "Profs vérifiés un par un",
    body: "Identité (CIN), diplômes et compétences pédagogiques contrôlés rigoureusement par notre équipe.",
    icon: "shield",
  },
  {
    title: "Paiement protégé à la séance",
    body: "Votre argent reste sécurisé dans votre portefeuille et n'est versé au prof qu'une fois la séance validée.",
    icon: "wallet",
  },
];

export const FAQ = [
  {
    q: "L'accès à INCLASS est-il payant pour les élèves et les parents ?",
    a: "Non, l'inscription et l'utilisation d'INCLASS sont 100% gratuites pour les élèves et les parents. Il n'y a aucun abonnement mensuel ni frais de dossier. Vous ne payez que le tarif fixé par le professeur pour chaque séance effectuée.",
  },
  {
    q: "Comment fonctionne le portefeuille (wallet) ?",
    a: "Vous rechargez votre portefeuille en dirhams par carte bancaire (CMI/Visa/Mastercard), virement bancaire ou espèces en agence. Lors d'une réservation, le montant est bloqué en sécurité, puis versé au professeur uniquement quand la séance a eu lieu.",
  },
  {
    q: "Quel est le modèle économique pour les professeurs ?",
    a: "L'inscription est gratuite pour les tuteurs. Les professeurs fixent librement leur tarif horaire. INCLASS prélève une commission transparente uniquement sur les séances réellement effectuées, couvrant la mise en relation, la sécurité des paiements et le support.",
  },
  {
    q: "Les cours se font-ils en présentiel ou en ligne ?",
    a: "Les deux formats sont disponibles. Vous pouvez convenir d'un cours à domicile dans votre ville (Agadir, Casablanca, Rabat, Marrakech, etc.) ou opter pour des séances 100% en ligne avec visio et tableau blanc.",
  },
  {
    q: "Comment les professeurs sont-ils vérifiés ?",
    a: "Chaque enseignant fait l'objet d'un contrôle strict de sa pièce d'identité (CIN), de ses diplômes et justificatifs, suivi d'un entretien pédagogique avec nos conseillers avant d'obtenir le statut vérifié.",
  },
  {
    q: "Je suis parent, comment puis-je gérer les cours de mes enfants ?",
    a: "L'espace parent dédié vous permet d'inscrire vos enfants, de choisir les professeurs, de gérer le planning et le budget via le wallet familial, et de recevoir un compte rendu après chaque séance.",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Élèves",
    links: [
      { label: "Comment ça marche", href: "/comment-ca-marche/eleves" },
      { label: "Demander un prof", href: "/contact" },
      { label: "Cours en ligne", href: "/comment-ca-marche/eleves" },
      { label: "Cours à domicile", href: "/comment-ca-marche/eleves" },
      { label: "Préparation aux examens", href: "/contact" },
      { label: "Espace parents", href: "/comment-ca-marche/eleves#parents" },
    ],
  },
  {
    title: "Professeurs",
    links: [
      { label: "Devenir professeur", href: "/comment-ca-marche/profs" },
      { label: "Rémunération & commissions", href: "/comment-ca-marche/profs#commissions" },
      { label: "Charte pédagogique", href: "/a-propos#valeurs" },
      { label: "Espace prof", href: "/comment-ca-marche/profs#candidature" },
    ],
  },
  {
    title: "Parents",
    links: [
      { label: "Espace parent", href: "/comment-ca-marche/eleves#parents" },
      { label: "Suivi & bilans", href: "/comment-ca-marche/eleves#suivi" },
      { label: "Sécurité des cours", href: "/a-propos#confiance" },
      { label: "Questions fréquentes", href: "/comment-ca-marche/eleves#faq" },
    ],
  },
  {
    title: "INCLASS",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Ressources & blog", href: "/ressources" },
      { label: "Contact", href: "/contact" },
      { label: "Presse", href: "/a-propos#presse" },
      { label: "Recrutement", href: "/a-propos#equipe" },
    ],
  },
];
