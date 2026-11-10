# TheTiny.Site — URL Shortener Landing Page

একটি আধুনিক, সম্পূর্ণ Responsive URL Shortener ল্যান্ডিং পেজ, যা React ও Tailwind CSS দিয়ে তৈরি। মোবাইল, ট্যাবলেট, ল্যাপটপ ও ডেস্কটপ — সব ডিভাইসে সুন্দরভাবে কাজ করে।

---

## ১. প্রজেক্টটি কী?

**TheTiny.Site** হলো একটি URL Shortener সার্ভিসের ফ্রন্টএন্ড (Frontend) ল্যান্ডিং পেজ। এখানে একজন ভিজিটর দেখতে পারে:

- প্ল্যাটফর্মটি কী কাজ করে এবং কেন ভালো
- সবচেয়ে জনপ্রিয় শর্ট লিংকগুলো (কপি ও QR Code সহ)
- Premium টুলস ও Analytics Dashboard-এর প্রিভিউ
- Pricing প্ল্যান (Free, Pro, Business)
- ব্যবহারকারীদের Testimonials

---

## ২. কেন তৈরি করা হয়েছে?

এটি একটি কোম্পানির দেওয়া **Job Task** হিসেবে তৈরি করা হয়েছে। এর মাধ্যমে নিচের দক্ষতাগুলো প্রদর্শন করা হয়েছে:

- ডিজাইন দেখে হুবহু **Pixel-perfect UI** তৈরি করা
- **Reusable Component** ভিত্তিক ক্লিন কোড স্ট্রাকচার
- সব ডিভাইসের জন্য **Fully Responsive** লেআউট
- React State ও Props-এর সঠিক ব্যবহার
- ছোট ছোট Interaction ও Animation দিয়ে ভালো User Experience তৈরি

---

## ৩. কী কী Features আছে?

| সেকশন | বিবরণ |
| --- | --- |
| **Navbar** | Sticky navbar, Home লিংক Active, মোবাইলে Hamburger মেনু, Login ও Get Started বাটন |
| **Banner (Hero)** | বড় হেডিং, সাবটেক্সট ও Login/Sign Up কার্ড |
| **Stats** | ১০০K+ লিংক, ১M+ ক্লিক, ১৮০+ দেশ, ৯৯.৯% Uptime |
| **Most Popular Links** | জনপ্রিয় লিংকের তালিকা |
| **Premium Tools** | ফিচার লিস্ট ও Link Analytics Dashboard প্রিভিউ (Progress bar সহ) |
| **Pricing** | Free, Pro ও Business — তিনটি প্ল্যান কার্ড |
| **Why Choose Us** | ৬টি ফিচার কার্ড (আইকনসহ) |
| **Testimonials** | ইউজারদের রিভিউ কার্ড (স্টার রেটিং সহ) |
| **Footer** | লিংক, Social আইকন, Contact তথ্য ও Copyright |

### বিশেষ কার্যকারিতা

- **লিংক Copy:** Copy বাটনে ক্লিক করলে শর্ট লিংক ক্লিপবোর্ডে কপি হয়, বাটনে "Copied" দেখায় এবং Click সংখ্যা ১ করে বাড়ে।
- **QR Code Modal:** QR বাটনে ক্লিক করলে Modal খোলে। ব্যাকগ্রাউন্ড Blur হয়ে যায়, পেজ Scroll বন্ধ থাকে এবং Modal-এর স্ক্রলবার লুকানো থাকে। মোবাইলে Modal নিচ থেকে উঠে আসে (Bottom Sheet)।
- **QR Download:** "Download QR Code" বাটনে ক্লিক করলে QR ইমেজ PNG ফাইল হিসেবে ডাউনলোড হয়।
- **Pricing বাটন:** ক্লিক করলে `Processing...` → `Request Successful` অবস্থায় যায়, তারপর আবার আগের অবস্থায় ফিরে আসে।
- **Navigation:** শুধু Home লিংক Active; অন্য লিংকগুলো ক্লিক করলে পেজের একদম উপরে (Top) চলে যায়।
- **Modal বন্ধ করা:** X বাটন, Overlay-তে ক্লিক বা `Esc` কী — যেকোনোটি দিয়ে।
- **Hover Effect:** কার্ড, আইকন ও লিংকে মসৃণ Transition (`duration-300`)।

---

## ৪. কোন Technologies ব্যবহার করা হয়েছে?

| Technology | কাজ |
| --- | --- |
| **React (JavaScript)** | UI Component ও State ম্যানেজমেন্ট |
| **Tailwind CSS v4** | স্টাইলিং ও Responsive ডিজাইন |
| **React Icons** | সব আইকন (Feather, Font Awesome, Bootstrap, Tabler ইত্যাদি) |
| **Google Fonts — Inter** | ফন্ট |
| **QR Server API** (`api.qrserver.com`) | QR Code ইমেজ জেনারেট করা |
| **React Portal** | Modal সরাসরি `document.body`-তে রেন্ডার করা |

### কাস্টম Theme (`src/index.css`)

```css
@theme {
  --color-primary: #5B21F3;
  --color-subtext: #6b7280;
  --font-inter: "Inter", sans-serif;
  --container-main: 1300px;
  --spacing-section: 100px;
}
```

---

## ফোল্ডার স্ট্রাকচার

```
src/
├── assets/
│   └── images/
│       └── logo.png
├── components/
│   ├── Navbar.jsx
│   ├── Banner.jsx
│   ├── Stats.jsx
│   ├── PopularLinks.jsx      # Container
│   ├── LinkCard.jsx          # Child (Copy ও QR)
│   ├── Premium.jsx
│   ├── Pricing.jsx           # Container
│   ├── WhyChoose.jsx
│   ├── Testimonials.jsx
│   ├── Footer.jsx
│   └── ui/
│       ├── QrModal.jsx       # Reusable Modal
│       └── PricingCard.jsx   # Reusable Pricing Card
├── App.jsx
├── index.css
└── main.jsx
```

---

## ৫. কীভাবে নিজের কম্পিউটারে Run করতে হবে?

### প্রয়োজনীয় জিনিস

- [Node.js](https://nodejs.org/) (সংস্করণ 18 বা তার উপরে)
- npm (Node.js-এর সাথেই আসে)
- Git

### ধাপসমূহ

**১. প্রজেক্ট ক্লোন করুন**

```bash
git clone <আপনার-repository-লিংক>
cd <প্রজেক্ট-ফোল্ডারের-নাম>
```

**২. Dependencies ইনস্টল করুন**

```bash
npm install
```

**৩. Development Server চালু করুন**

```bash
npm run dev
```

**৪. ব্রাউজারে খুলুন**

টার্মিনালে যে লিংক দেখাবে (সাধারণত `http://localhost:5173`) সেটি ব্রাউজারে খুলুন।

### Production Build

```bash
npm run build
```

> **নোট:** আপনার প্রজেক্ট সেটআপ অনুযায়ী Development কমান্ড `npm run dev` অথবা `npm start` হতে পারে। `package.json` ফাইলের `scripts` অংশ দেখে নিন।

---

## ৬. কীভাবে প্রজেক্টটি ব্যবহার করতে হবে?

প্রজেক্ট চালু করার পর ওয়েবসাইটে নিচের কাজগুলো করা যাবে:

1. **উপরে স্ক্রল করে** Banner, Stats ও পুরো পেজ দেখুন।
2. **Most Popular Links** সেকশনে **Copy** বাটনে ক্লিক করে শর্ট লিংক কপি করুন — Click সংখ্যা বাড়বে।
3. **QR** বাটনে ক্লিক করে QR Code দেখুন এবং **Download QR Code** দিয়ে ছবি সংরক্ষণ করুন। বন্ধ করতে X বাটন, বাইরে ক্লিক বা `Esc` চাপুন।
4. **Pricing** সেকশনে যেকোনো প্ল্যানের বাটনে ক্লিক করুন — Request Successful বার্তা দেখাবে।
5. মোবাইলে উপরের ডানদিকের **মেনু আইকনে** ক্লিক করে Navigation মেনু খুলুন।
6. Footer-এর **Social আইকনে** ক্লিক করে ডেভেলপারের Facebook, LinkedIn, GitHub ও Portfolio দেখুন।

### ডেটা পরিবর্তন করতে চাইলে

প্রতিটি সেকশনের ডেটা সেই কম্পোনেন্টের উপরে একটি Array হিসেবে রাখা আছে। যেমন:

- জনপ্রিয় লিংক → `PopularLinks.jsx` এর `popularLinks`
- Pricing প্ল্যান → `Pricing.jsx` এর `plans`
- Testimonials → `Testimonials.jsx` এর `testimonials`
- Features → `WhyChoose.jsx` এর `features`

Array-তে পরিবর্তন করলেই পেজে আপডেট হয়ে যাবে।

---

## বর্তমান অবস্থা ও ভবিষ্যৎ উন্নয়ন

এটি একটি **Frontend-only** প্রজেক্ট, তাই:

- লিংকের ডেটা, Click সংখ্যা ও Testimonials স্ট্যাটিক (Dummy) ডেটা। Click সংখ্যা শুধু ব্রাউজারে বাড়ে, রিফ্রেশ করলে আগের অবস্থায় ফিরে যায়।
- Pricing বাটনের "Request" একটি সিমুলেটেড রিকোয়েস্ট (`setTimeout`)।
- Login / Sign Up বাটনে এখনো কোনো পেজ বা Authentication যুক্ত নেই।

### ভবিষ্যতে যা যুক্ত করা যেতে পারে

- [ ] Backend ও Database যুক্ত করে আসল URL Shortening
- [ ] Login / Registration ও Authentication
- [ ] আসল Click Tracking ও Analytics Dashboard
- [ ] Pricing বাটনে Payment Gateway ইন্টিগ্রেশন
- [ ] React Router দিয়ে About, Blog ও Terms পেজ

---

## লাইসেন্স

এই প্রজেক্টটি শুধুমাত্র Job Task / শেখার উদ্দেশ্যে তৈরি।