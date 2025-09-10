"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Head from "next/head";

const features = [
  {
    icon: "📊",
    title: "დეტალური სტატისტიკა",
    description: "მოთამაშეების, გუნდებისა და ლიგების სტატისტიკა რეალურ დროში",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🔍",
    title: "ტალანტების აღმოჩენა",
    description: "ძებნის სისტემა სკაუტებისთვის მოთამაშეთა შესაძლებლობებით",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "🏆",
    title: "ლიგები და ტურნირები",
    description: "ყველა ასაკის ლიგის ტაბლები, კალენდარი და შედეგები",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "მშობლებისთვის",
    description: "შვილის პროგრესის თვალყურის დევნება და კარიერის მონიტორინგი",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: "🏅",
    title: "კლუბებისთვის",
    description: "მარკეტინგი, გუნდის მართვა და სტატისტიკის ავტომატიზაცია",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🌍",
    title: "საერთაშორისო ხილვადობა",
    description: "ქართული ფეხბურთის პოპულარიზაცია მსოფლიო მასშტაბით",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const audience = [
  {
    icon: "⚽",
    title: "ახალგაზრდა ფეხბურთელები",
    subtitle: "12-21 წლის მოთამაშეები",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "მშობლები",
    subtitle: "შვილების მხარდაჭერა",
    color: "from-green-500 to-green-600",
  },
  {
    icon: "🔍",
    title: "სკაუტები",
    subtitle: "ტალანტების მფლობელები",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: "🏆",
    title: "კლუბები",
    subtitle: "ყველა რეგიონიდან",
    color: "from-red-500 to-red-600",
  },
];

const stats = [
  {
    number: "1000+",
    label: "რეგისტრირებული მოთამაშე",
    color: "from-blue-400 to-blue-600",
  },
  {
    number: "50+",
    label: "პარტნიორი კლუბი",
    color: "from-green-400 to-green-600",
  },
  {
    number: "20+",
    label: "საერთაშორისო სკაუტი",
    color: "from-purple-400 to-purple-600",
  },
];

const AboutPage = () => {
  const refs = [
    useRef(null), // heroRef
    useRef(null), // missionRef
    useRef(null), // featuresRef
    useRef(null), // audienceRef
    useRef(null), // visionRef
    useRef(null), // ctaRef
  ];

  useEffect(() => {
    // Section animations with GSAP
    gsap.fromTo(
      refs.map((ref) => ref.current).filter(Boolean),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    // Feature cards hover
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () =>
        gsap.to(card, {
          y: -15,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        })
      );
      card.addEventListener("mouseleave", () =>
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" })
      );
    });

    // Cleanup
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  });

  return (
    <>
      <Head>
        <title>ჩვენს შესახებ | Georgian Football</title>
        <meta
          name="description"
          content="Georgian Football - ქართული ახალგაზრდული ფეხბურთის პლატფორმა, რომელიც ტალანტებს მსოფლიო სცენაზე წარმოგვიდგენს."
        />
        <meta
          name="keywords"
          content="ფეხბურთი, საქართველო, ახალგაზრდები, ტალანტები, კლუბები, სკაუტები"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="bg-gray-50 font-sans min-h-screen">
        {/* Hero Section */}
        <section
          ref={refs[0]}
          className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-white bg-opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 bg-opacity-10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div
              className="inline-block p-4 bg-white bg-opacity-20 rounded-full mb-8 backdrop-blur-sm"
              role="img"
              aria-label="Football icon"
            >
              <div className="text-6xl">⚽</div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              ჩვენს შესახებ
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              ვქმნით პლატფორმას, რომელიც ქართველ ახალგაზრდა ფეხბურთელებს
              მსოფლიოს გააცნობს
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-1 h-16 bg-gradient-to-b from-white to-transparent" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={refs[1]} className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-20">
              <span className="text-blue-600 font-semibold text-lg tracking-wider uppercase">
                მისია
              </span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 text-gray-900">
                ჩვენი მისია
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="relative pl-8">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    რატომ შევქმენით ეს პლატფორმა?
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    საქართველოში ბევრი ნიჭიერი ფეხბურთელი იზრდება, მაგრამ მათი
                    ტალანტი ხშირად უყურადღებო რჩება. ჩვენ ვქმნით ხიდს მათა და
                    მსოფლიო ფეხბურთის შორის.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    პლატფორმა აერთიანებს ინფორმაციას ლიგების, გუნდებისა და
                    მოთამაშეების შესახებ სკაუტებისა და მწვრთნელებისთვის.
                  </p>
                </div>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black bg-opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-30">
                  ⚽
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-black">
                  <h4 className="font-bold text-xl mb-2">Georgian Football</h4>
                  <p className="text-sm opacity-90">
                    შემოუერთდი მომავლის შემქმნელებს
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          ref={refs[2]}
          className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <span className="text-blue-600 font-semibold text-lg tracking-wider uppercase">
                ფუნქციები
              </span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 text-gray-900">
                რას გთავაზობთ
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8" />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {features.map(({ icon, title, description, gradient }, i) => (
                <div
                  key={i}
                  className="feature-card bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-2xl" role="img" aria-label={title}>
                        {icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-700">
                      {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section ref={refs[3]} className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <span className="text-blue-600 font-semibold text-lg tracking-wider uppercase">
                აუდიტორია
              </span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 text-gray-900">
                ვისთვის არის განკუთვნილი
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {audience.map(({ icon, title, subtitle, color }, i) => (
                <div key={i} className="text-center group">
                  <div
                    className={`w-28 h-28 bg-gradient-to-br ${color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <div
                      className="text-4xl text-white"
                      role="img"
                      aria-label={title}
                    >
                      {icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600">{subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section
          ref={refs[4]}
          className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-10" />
          <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
            <span className="text-blue-300 font-semibold text-lg tracking-wider uppercase">
              ხედვა
            </span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-8">
              ჩვენი ხედვა
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-12" />
            <p className="text-xl md:text-2xl leading-relaxed mb-16 text-gray-200">
              2026 წლისთვის გავხდეთ ქართული ახალგაზრდული ფეხბურთის მთავარი
              პლატფორმა, რომელიც 1000+ ფეხბურთელს გააცნობს მსოფლიოს.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {stats.map(({ number, label, color }, i) => (
                <div key={i} className="text-center group">
                  <div
                    className={`text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                  >
                    {number}
                  </div>
                  <p className="text-gray-300 text-lg">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={refs[5]}
          className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              მზად ხართ შემოუერთდეთ?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
              იყავით ნაწილი ქართული ფეხბურთის მომავლის
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Register your club"
              >
                კლუბის რეგისტრაცია
              </button>
              <button
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Register as a player"
              >
                ტურნირის რეგისტრაცია
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">კითხვები გაქვთ?</h3>
            <p className="text-gray-300 mb-12 text-lg">
              დაგვიკავშირდით და ჩვენ დაგეხმარებით
            </p>
            <div className="flex justify-center space-x-12">
              <div className="text-center group">
                <div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  role="img"
                  aria-label="Email icon"
                >
                  📧
                </div>
                <p className="font-bold text-xl mb-2">Email</p>
                <p className="text-gray-300">info@georgianfootball.ge</p>
              </div>
              <div className="text-center group">
                <div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  role="img"
                  aria-label="Telegram icon"
                >
                  💬
                </div>
                <p className="font-bold text-xl mb-2">Telegram</p>
                <p className="text-gray-300">@GeorgianFootballBot</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
    </>
  );
};

export default AboutPage;
