import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Heart } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function LocationPage() {
  return (
    <>
      <Helmet>
  <title>Vieta ir laikas - Vestuvės</title>

  <meta
    name="description"
    content="Vestuvių ceremonijos ir šventės vietos bei laiko informacija."
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
            <MapPin className="h-10 w-10 text-[#80944d]" />
          </div>

          <h1
            className="text-[3rem] md:text-[4.5rem] font-semibold text-[#31411f] mb-6"
            style={{
              fontFamily: "Playfair Display, serif",
              letterSpacing: "-0.03em",
            }}
          >
            Vieta ir laikas
          </h1>

          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="w-24 h-px bg-[#b9b09d]" />

            <Heart className="h-5 w-5 text-[#e2c545] fill-[#e2c545]" />

            <div className="w-24 h-px bg-[#b9b09d]" />
          </div>

          <p className="text-lg md:text-xl text-[#556146] leading-relaxed max-w-3xl mx-auto">
            Visa informacija apie vestuvių ceremoniją, šventės vietą ir kitas detales jūsų patogumui.
          </p>
        </motion.div>
      </div>
    </section>

          {/* CEREMONY */}
          <section className="py-0">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">

              <motion.div
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
                  duration: 0.6,
                }}
                className="bg-[#f5f0e2] rounded-[2rem] border border-[#d8d0bf]/60 shadow-sm p-8 md:p-12"
              >

                {/* TITLE */}
                <div className="flex items-center gap-4 mb-10">

                  <div className="h-14 w-14 rounded-2xl bg-[#80944d]/10 flex items-center justify-center">
                    <MapPin className="h-7 w-7 text-[#80944d]" />
                  </div>

                  <h2
                    className="text-[2.2rem] font-semibold text-[#31411f]"
                    style={{
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    Ceremonija
                  </h2>
                </div>

                {/* CONTENT */}
                <div className="space-y-8">

                  {/* TIME */}
                  <div className="flex items-start gap-4">

                    <Clock className="h-5 w-5 text-[#80944d] mt-1 flex-shrink-0" />

                    <div>
                      <p className="font-semibold text-[#31411f] mb-1">
                        Laikas
                      </p>

                      <p className="text-[#556146]">
                        16:00 val.
                      </p>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="flex items-start gap-4">

                    <MapPin className="h-5 w-5 text-[#80944d] mt-1 flex-shrink-0" />

                    <div>
                      <p className="font-semibold text-[#31411f] mb-1">
                        Vieta
                      </p>

                      <p className="text-[#556146]">
                        Vilniaus šv. Pranciškaus Asyžiečio (Bernardinų)
                        parapija
                      </p>

                      <p className="text-[#556146] mt-2">
                        Maironio g. 10, Vilnius
                      </p>
                    </div>
                  </div>

                  {/* NAVIGATION */}
                  <div className="flex items-start gap-4">

                    <Navigation className="h-5 w-5 text-[#80944d] mt-1 flex-shrink-0" />

                    <div>
                      <p className="font-semibold text-[#31411f] mb-1">
                        Kaip atvykti
                      </p>

                      <p className="text-[#556146] leading-relaxed">
                        Į ceremoniją galite atvykti automobiliu, tačiau prie
                        bažnyčios yra ribotas automobilių stovėjimo vietų
                        skaičius, todėl rekomenduojame atvykti šiek tiek
                        anksčiau arba, esant galimybei, rinktis alternatyvų
                        atvykimo būdą.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* RECEPTION */}
          <section className="py-6 pb-16">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">

              <motion.div
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
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="bg-[#f5f0e2] rounded-[2rem] border border-[#d8d0bf]/60 shadow-sm p-8 md:p-12"
              >

                {/* TITLE */}
                <div className="flex items-center gap-4 mb-10">

                  <div className="h-14 w-14 rounded-2xl bg-[#e2c545]/20 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-[#d4b53f]" />
                  </div>

                  <h2
                    className="text-[2.2rem] font-semibold text-[#31411f]"
                    style={{
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    Šventė
                  </h2>
                </div>

                {/* CONTENT */}
                <div className="space-y-8">

                  {/* TIME */}
                  <div className="flex items-start gap-4">

                    <Clock className="h-5 w-5 text-[#d4b53f] mt-1 flex-shrink-0" />

                    <div>
                      <p className="font-semibold text-[#31411f] mb-1">
                        Laikas
                      </p>

                      <p className="text-[#556146]">
                        18:00 val. - 02:00 val.
                      </p>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="flex items-start gap-4">

                    <MapPin className="h-5 w-5 text-[#d4b53f] mt-1 flex-shrink-0" />

                    <div>
                      <p className="font-semibold text-[#31411f] mb-1">
                        Vieta
                      </p>

                      <p className="text-[#556146]">
                        Restoranas Firenze Vilnius
                      </p>

                      <p className="text-[#556146] mt-2">
                        Paupio g. 16, Vilnius
                      </p>
                    </div>
                  </div>

                  {/* INFO BOX */}
                  <div className="bg-white/50 border border-[#d8d0bf] rounded-2xl p-6">
                    <p className="text-[#556146] leading-relaxed">
                      Po ceremonijos kviečiame visus svečius prisijungti prie
                      šventės, kur lauks skanus maistas, gaivūs gėrimai,
                      muzika ir šokiai. Tai bus metas atsipalaiduoti, pabūti
                      kartu ir mėgautis jaukia atmosfera.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* IMPORTANT */}
          <section className="py-10 bg-[#f3eedf] border-y border-[#d8d0bf]/40">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">

              <motion.div
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
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="text-center py-6"
              >

                <h3
                  className="text-[2.2rem] font-semibold text-[#31411f] mb-6"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  SVARBU!
                </h3>

                <p className="text-[#556146] leading-relaxed text-[1.05rem]">
                  Prašome nevėluoti, kad nekeltume papildomo streso nei sau,
                  nei kitiems svečiams. Siekiant, kad ceremonija prasidėtų
                  sklandžiai ir be skubėjimo, kviečiame atvykti šiek tiek
                  anksčiau.
                  <br />
                  <br />
                  Taip pat rekomenduojame, jei įmanoma, nevykti su nuosavais
                  automobiliais, nes šalia bažnyčios yra ribotas parkavimo
                  vietų skaičius.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default LocationPage;