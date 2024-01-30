let rangeCoffees = [
  {
    caffeeName: "اسپرسو",
    smallPrice: "۳۵",
    largePrice: "۴۵",
  },
  {
    caffeeName: "اسپرسو ماکیاتو",
    smallPrice: "۴۵",
    largePrice: "۵۵",
  },
  {
    caffeeName: "اسپرسو آفوگاتو",
    smallPrice: "۷۰",
    largePrice: "۸۰",
  },
  {
    caffeeName: "امریکانو",
    smallPrice: "۴۵",
    largePrice: "۵۵",
  },
  {
    caffeeName: "کورتادو",
    smallPrice: "۵۸",
    largePrice: "۶۸",
  },
  {
    caffeeName: "کارامل ماکیاتو",
    smallPrice: "۶۰",
    largePrice: "۶۵",
  },
  {
    caffeeName: "موکانوتلا",
    smallPrice: "۷۰",
    largePrice: "۷۵",
  },
  {
    caffeeName: "لاته",
    smallPrice: "۶۰",
    largePrice: "۷۰",
  },
  {
    caffeeName: "کاپوچینو",
    smallPrice: "۵۵",
    largePrice: "۶۵",
  },
  {
    caffeeName: "فلت وایت",
    smallPrice: "۶۳",
    largePrice: "۷۳",
  },
  {
    caffeeName: "کوک اسپرسو",
    smallPrice: "۶۸",
    largePrice: "۷۸",
  },
  {
    caffeeName: "آفوگاتو",
    smallPrice: "۸۰",
    largePrice: "۹۰",
  },
];
let noneRangeCoffees = [
  {
    coffeeName: "ترک",
    price: "۵۸",
  },
  {
    coffeeName: "نسکافه گلد",
    price: "۷۵",
  },
  {
    coffeeName: "هات چاکلت نوتلا",
    price: "۱۰۸",
  },
  {
    coffeeName: "شیرگرم کوچک",
    price: "۳۰",
  },
  {
    coffeeName: "شیرگرم بزرگ",
    price: "۴۰",
  },
  {
    coffeeName: "دمی عربیکا اتیوپی",
    price: "٧٠",
  },
  {
    coffeeName: "دمی عربیکا ٧٠/٣٠",
    price: "٦٥",
  },
  {
    coffeeName: "دمی ربوستا ٧٠/٣٠",
    price: "٦٥",
  },
  {
    coffeeName: "دمی ربوستا اوگاندا",
    price: "٦٠",
  },
];
let teaItems = [
  {
    itemName: "دمنوش آویشن",
    price: "۸۸",
  },
  {
    itemName: "دمنوش ده گیاه",
    price: "۸۷",
  },
  {
    itemName: "دمنوش گل گاو زبان",
    price: "۶۲",
  },
  {
    itemName: "دمنوش گل گاو زبان ویژه",
    price: "۸۸",
  },
  {
    itemName: "دمنوش به لیمو زعفران",
    price: "۹۱",
  },
  {
    itemName: "دمنوش بابونه",
    price: "۸۴",
  },
  {
    itemName: "دمنوش به زنجبیل",
    price: "۹۴",
  },
  {
    itemName: "چای ترش",
    price: "۶۲",
  },
  {
    itemName: "چای سبز ویژه",
    price: "۷۷",
  },
  {
    itemName: "چای گیلان",
    price: "۵۵",
  },
  {
    itemName: "چای سیاه",
    price: "۴۷",
  },
  {
    itemName: "چای ماسالا",
    price: "۶۷",
  },
];
let twoPriceColdDrinks = [
  {
    itemName: "موهیتو",
    smallPrice: "۸۵",
    largePrice: "۱۱۵",
  },
  {
    itemName: "نوشیدنی آلبالو دارچین کوچک",
    smallPrice: "۸۵",
    largePrice: "۱۱۵",
  },
  {
    itemName: "نوشیدنی پرتقالی",
    smallPrice: "۸۵",
    largePrice: "۱۱۵",
  },
  {
    itemName: "نوشیدنی بلوکاراسائو",
    smallPrice: "۹۰",
    largePrice: "۱۲۰",
  },
  {
    itemName: "نوشیدنی کرن بری",
    smallPrice: "۸۵",
    largePrice: "۱۲۰",
  },
];
let noneRangeColdDrinks = [
  {
    itemName: "اسموتی هندوانه",
    price: "۱۳۵",
  },
  {
    itemName: "اسموتی طالبی",
    price: "۱۳۵",
  },
  {
    itemName: "شیک وانیل",
    price: "۱۱۰",
  },
  {
    itemName: "شیک شکلات",
    price: "۱۱۵",
  },
  {
    itemName: "شیک بادام زمینی",
    price: "۱۲۵",
  },
  {
    itemName: "شیک توت فرنگی",
    price: "۱۲۰",
  },
  {
    itemName: "شیک البالو",
    price: "۱۲۰",
  },
  {
    itemName: "شیک کارامل",
    price: "",
  },
  {
    itemName: "شیک نوتلا",
    price: "۱۳۵",
  },
];
let breakFastItems = [
  {
    itemName: "کیک شکلاتی",
    price: "۸۷",
  },
  {
    itemName: "کیک ردولوت",
    price: "۸۵",
  },
  {
    itemName: "پنکیک تازه",
    price: "۸۰",
  },
  {
    itemName: "باقلوا",
    price: "۸۰",
  },
  {
    itemName: "سیب زمینی",
    price: "۹۸",
  },
  {
    itemName: "سوسیس تخم مرغ",
    price: "۹۰",
  },
  {
    itemName: "کوکتل تخم مرغ",
    price: "۱۱۰",
  },
  {
    itemName: "املت دو تخم مرغه",
    price: "۷۵",
  },
  {
    itemName: "سه تخم مرغه",
    price: "۸۷",
  },
  {
    itemName: "نیمرو",
    price: "۴۸",
  },
];
const menue = [
  rangeCoffees,
  noneRangeCoffees,
  teaItems,
  twoPriceColdDrinks,
  noneRangeColdDrinks,
  breakFastItems,
];

export default menue;
