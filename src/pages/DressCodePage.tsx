import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Palette, Check, X, Heart } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function DressCodePage() {
  const approvedColors = [{
    name: 'Tamsi miško žalia',
    hex: '#20281D',
    description: 'Gili, žemiška ir natūrali tamsi žalia'
  }, {
    name: 'Alyvuogių žalia',
    hex: '#556B4D',
    description: 'Pilkšvai žalia, rami ir neutrali'
  }, {
    name: 'Šalavijų žalia',
    hex: '#86A879',
    description: 'Švelni, prigesinta gamtos žalia'
  }, {
    name: 'Tamsi plytų raudona',
    hex: '#8C2F0C',
    description: 'Gili, šilta rudai raudona'
  }, {
    name: 'Terakotinė oranžinė',
    hex: '#C5562C',
    description: 'Šilta žemiška oranžinė su rudumu'
  }, {
    name: 'Persikinė oranžinė',
    hex: '#FB8B63',
    description: 'Švelni, šilta persikinė spalva'
  }, {
    name: 'Saulėta oranžinė',
    hex: '#F4A93E',
    description: 'Ryški, šilta oranžinė su geltonumu'
  }, {
    name: 'Auksinė smėlio',
    hex: '#F5BA67',
    description: 'Šilta, švelni auksinė smėlio spalva'
  }, {
    name: 'Šviesi persikinė',
    hex: '#FFCE8B',
    description: 'Labai šviesi, šilta persikinė'
  }, {
    name: 'Vandenyno mėlyna',
    hex: '#2E70A3',
    description: 'Gili, sodri mėlyna spalva'
  }, {
    name: 'Dangaus mėlyna',
    hex: '#66AAE5',
    description: 'Šviesi ir gaivi mėlyna'
  }, {
    name: 'Šviesi žydra',
    hex: '#A9E4FF',
    description: 'Labai šviesi, beveik pastelinė žydra'
  }, {
    name: 'Alyvuogių žalia (šviesi)',
    hex: '#779554',
    description: 'Vidutinė, natūrali žalia'
  }, {
    name: 'Šviesi žalsva',
    hex: '#AEDB7A',
    description: 'Šviesi, gaivi žalia'
  }, {
    name: 'Laimo žalsva',
    hex: '#C9FD8E',
    description: 'Labai šviesi, gelsvai žalia'
  }];

  const avoidColors = [
    {
      name: "Ryškios neoninės",
      examples: ["#39FF14", "#fffb00", "#00ffc8", "#ff00dd"],
      description: "Per ryškūs ir dėmesį atitraukiantys atspalviai",
    },
    {
      name: "Balta",
      examples: ["#FFFFFF"],
      description: "Rezervuota nuotakai",
    },
    {
      name: "Panašios į baltą",
      examples: ["#f0faea", "#ffefe8", "#faf1dd", "#f0f5fc"],
      description: "Prašome vengti baltų atspalvių",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Spalvų paletė - Vestuvės</title>

        <meta
          name="description"
          content="Vestuvių spalvų paletė ir aprangos rekomendacijos."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-[#f7f2e8] text-[#2f3b1f]">

        <Header />

        <main className="flex-1">

          {/* HERO */}
          <section className="relative py-24 overflow-hidden bg-[#f3eedf] border-b border-[#d8d0bf]/40">

            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0 opacity-20">
              <img
                src="https://cdn.pixabay.com/photo/2017/05/13/17/31/fruit-2310212_1280.jpg"
                alt="background"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                <div className="flex items-center justify-center gap-3 mb-6">
                  <Palette className="h-10 w-10 text-[#80944d]" />
                </div>

                <h1
                  className="text-[3rem] md:text-[4.5rem] font-semibold text-[#31411f] mb-6"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Spalvų paletė
                </h1>

                <div className="flex items-center justify-center gap-5 mb-8">
                  <div className="w-24 h-px bg-[#b9b09d]" />

                  <Heart className="h-5 w-5 text-[#e2c545] fill-[#e2c545]" />

                  <div className="w-24 h-px bg-[#b9b09d]" />
                </div>

                <p className="text-lg md:text-xl text-[#556146] leading-relaxed max-w-3xl mx-auto">
                  Kviečiame svečius pasirinkti aprangą iš mūsų vestuvių dienos spalvų paletės
                </p>
              </motion.div>
            </div>
          </section>

          {/* APPROVED COLORS */}
          <section className="py-16 bg-[#f7f2e8]">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

              <div className="flex items-center gap-3 mb-10">
                <Check className="h-7 w-7 text-[#80944d]" />

                <h2
                  className="text-[2.2rem] font-semibold text-[#31411f]"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Rekomenduojamos spalvos
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {approvedColors.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="bg-[#f5f0e2] rounded-[1.8rem] p-5 border border-[#d8d0bf]/60"
                  >

                    <div
                      className="w-full h-28 rounded-2xl mb-4 border border-[#d8d0bf]"
                      style={{
                        backgroundColor: color.hex,
                      }}
                    />

                    <h3 className="text-lg font-semibold text-[#31411f] mb-2">
                      {color.name}
                    </h3>

                    <p className="text-sm text-[#556146]">
                      {color.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* AVOID COLORS */}
          <section className="py-16 bg-[#f3eedf] border-y border-[#d8d0bf]/40">

            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">

              <div className="flex items-center gap-3 mb-10">
                <X className="h-7 w-7 text-[#b65f4d]" />

                <h2
                  className="text-[2.2rem] font-semibold text-[#31411f]"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Spalvos, kurių vengti
                </h2>
              </div>

              <div className="space-y-5">

                {avoidColors.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="bg-[#f7f2e8] rounded-[1.8rem] p-5 border border-[#d8d0bf]/60"
                  >

                    <div className="flex items-center gap-5 flex-wrap">

                      <div className="flex gap-2">

                        {color.examples.map((hex, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-xl border border-[#d8d0bf]"
                            style={{
                              backgroundColor: hex,
                            }}
                          />
                        ))}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#31411f] mb-1">
                          {color.name}
                        </h3>

                        <p className="text-sm text-[#556146]">
                          {color.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* STYLE TIPS */}
          <section className="py-20 bg-[#f7f2e8]">

            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">

              <div className="bg-[#f5f0e2] rounded-[2rem] p-8 md:p-10 border border-[#d8d0bf]/60">

                <h2
                  className="text-[2.3rem] font-semibold text-[#31411f] mb-8"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Stiliaus patarimai
                </h2>

                <div className="space-y-8">

                  <div>
                    <h3 className="text-xl font-semibold text-[#31411f] mb-3">
                      Moterims
                    </h3>

                    <p className="text-[#556146] leading-relaxed">
                      Lengvos, vasariškos suknelės ar deriniai iš mūsų spalvų paletės – kviečiame rinktis tai, su kuo jaučiatės gražiausiai ir patogiausiai. Galite rinktis vieną spalvą arba subtiliai derinti kelias tarpusavyje, išlaikant bendrą šventės nuotaiką. Svarbiausia – prašome vengti baltos spalvos ir visų į ją panašių atspalvių (pvz., dramblio kaulo, kreminės, šampaninės ir pan.), kadangi ši spalva skirta nuotakai. Jei kyla abejonių dėl pasirinktos spalvos ar derinio, tikrai drąsiai parašykite nuotakai – ji mielai patars ir padės išsirinkti tinkamiausią variantą.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#31411f] mb-3">
                      Vyrams
                    </h3>

                    <p className="text-[#556146] leading-relaxed">
                      Galite rinktis lengvesnius, vasariškus derinius – tiek klasikinį, tiek laisvesnį stilių, svarbiausia komfortas ir lengvumas. Nebūtina įsigyti naujo kostiumo – puikiai tiks ir jau turimi drabužiai, kuriuos galite prisiderinti prie šventės spalvų, pavyzdžiui, pasirinkdami tinkamus marškinius ar aksesuarus. Taip pat pilnas kostiumas nėra būtinas – svarbiausia išlaikyti bendrą stilių ir jaustis gerai. Jei kyla abejonių dėl aprangos, drąsiai kreipkitės – padėsim apsispręsti.
                    </p>
                  </div>

                  <div className="bg-[#f7f2e8] border border-[#d8d0bf]/60 rounded-2xl p-5">

                    <p className="text-sm text-[#556146] leading-relaxed">
                      Svarbiausia – rinkitės aprangą, kurioje jaučiatės patogiai ir savimi. Labai prašome vengti baltos spalvos ir į ją panašių atspalvių. Mūsų spalvų paletė yra tik gairė, padėsianti subtiliai prisiderinti ir sukurti bendrą šventės nuotaiką.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default DressCodePage;