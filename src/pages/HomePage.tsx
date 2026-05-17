import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Heart } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vestuvės - Julija ir Rimvydas</title>

        <meta
          name="description"
          content="Prisijunkite prie mūsų vestuvių šventės."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-[#f7f2e8] text-[#2f3b1f]">
        
        <Header />

        {/* HERO WRAPPER */}
        <div className="relative w-full flex flex-col items-center overflow-hidden pb-10">

          {/* BACKGROUND */}
          <div className="absolute top-0 left-0 w-full h-[1150px] z-0">
            <img
                src="https://cdn.pixabay.com/photo/2017/05/13/17/31/fruit-2310212_1280.jpg"
                alt="background"
                className="w-full h-full object-cover scale-110 opacity-40"
            />

            <div className="absolute inset-0 bg-[#f7f2e8]/55" />
            </div>

          {/* CONTENT */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center pt-10 md:pt-16">

            {/* PHOTO */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
              }}
              className="relative z-10 -mb-16 md:-mb-24"
            >
              <div className="w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[400px] lg:h-[520px] rounded-t-full rounded-b-[2rem] overflow-hidden shadow-2xl border-[8px] border-[#f7f2e8]/90 relative">
                
                <img
                  src="https://horizons-cdn.hostinger.com/70a48264-2cac-4693-aa70-5a3e2d2a4721/ee0dfbc90e7ec817fd6ffc95053e293d.jpg"
                  alt="Julija ir Rimvydas"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-[#8a7f6c]/10 mix-blend-overlay pointer-events-none" />
              </div>
            </motion.div>

            {/* MAIN CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="relative z-20 bg-[#f5f0e2]/90 backdrop-blur-md px-6 py-8 md:p-12 lg:p-14 rounded-[2.8rem] border border-[#d8d0bf]/60 shadow-xl max-w-4xl w-full text-center"
            >
              
              {/* BADGE */}
              <div className="inline-block mb-5 px-6 py-3 rounded-full border border-[#b7ae98] bg-[#f3eedf] text-[#70884d] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                Kviečiame švęsti meilę
              </div>

              {/* TITLE */}
              <h1
                className="text-[3rem] md:text-[4.5rem] lg:text-[5rem] font-semibold text-[#31411f] mb-6 leading-none"
                style={{
                  fontFamily: "Playfair Display, serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Julija{" "}
                <span className="text-[#8ca05c] italic font-normal px-2">
                  &
                </span>{" "}
                Rimvydas
              </h1>

              {/* HEART LINE */}
              <div className="flex items-center justify-center gap-5 mb-10 opacity-90">
                
                <div className="h-px w-20 md:w-28 bg-[#b9b09d]" />

                <Heart className="h-6 w-6 text-[#e2c545] fill-[#e2c545]" />

                <div className="h-px w-20 md:w-28 bg-[#b9b09d]" />
              </div>

              {/* DESCRIPTION */}
              <p className="text-base md:text-xl text-[#556146] mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                Kviečiame jus prisijungti prie mūsų vestuvių šventės ir kartu
                kurti nepamirštamus prisiminimus.
              </p>

              {/* INFO BOXES */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mb-14">

                <div className="flex items-center gap-3 text-[#4f5b3e] bg-white/60 px-6 py-3 rounded-2xl border border-[#d8d0bf] shadow-sm">
                  <Calendar className="h-5 w-5 text-[#80944d]" />

                  <span className="text-[1.05rem] tracking-wide">
                    2026 m. rugpjūčio 14 d.
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[#4f5b3e] bg-white/60 px-6 py-3 rounded-2xl border border-[#d8d0bf] shadow-sm">
                  <MapPin className="h-5 w-5 text-[#80944d]" />

                  <span className="text-[1.05rem] tracking-wide">
                    Vilnius, Lietuva
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link to="/rsvp">
                  <button className="bg-[#80944d] text-white hover:bg-[#6e8042] text-base px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 font-semibold tracking-wide">
                    Patvirtinti dalyvavimą
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* WELCOME SECTION */}
          <section className="relative z-20 py-16 mt-8 w-full bg-[#f5f0e2] border-t border-[#d8d0bf]/40 mt-0">
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
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
                className="text-center"
              >
                <h2
                  className="text-4xl md:text-5xl font-semibold text-[#31411f] mb-5"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Sveiki atvykę į mūsų pasaką
                </h2>

                <p className="text-lg md:text-xl text-[#556146] leading-relaxed max-w-3xl mx-auto">
                  Esame laimingi pakviesti jus į mūsų vestuvių šventę. Ši diena bus kupina meilės, džiaugsmo ir nepamirštamų akimirkų. Prisijunkite prie mūsų, kai pradedame naują gyvenimo etapą kartu, apsupti artimiausių draugų ir šeimos.
                </p>
              </motion.div>
            </div>
          </section>

          {/* DETAILS SECTION */}
          <section className="py-16 w-full bg-[#f7f2e8] border-t border-[#d8d0bf]/40">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                {/* LOCATION CARD */}
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
                  className="bg-[#f5f0e2] p-8 md:p-10 rounded-[2rem] shadow-sm border border-[#d8d0bf]/60 flex flex-col"
                >
                  
                  <div className="w-14 h-14 bg-[#80944d]/10 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="h-7 w-7 text-[#80944d]" />
                  </div>

                  <h3
                    className="text-3xl font-semibold text-[#31411f] mb-5"
                    style={{
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    Vieta ir laikas
                  </h3>

                  <p className="text-[#556146] leading-relaxed mb-5 flex-grow text-lg">
                    Ceremonija vyks Bernardinų bažnyčioje, o po jos šventė tęsis restorane „Firenze“. Abi vietos yra netoli viena kitos, todėl perėjimas iš ceremonijos į šventės vietą bus patogus ir greitas. Vestuvės planuojamos po pietų, todėl turėsite pakankamai laiko ramiai pailsėti, išsimiegoti ir be skubos pasiruošti šiai ypatingai progai. Detalesnę informaciją apie laiką bei tikslias vietas rasite mūsų svetainėje.
                  </p>

                  <Link to="/location">
                    <button className="border border-[#80944d] text-[#80944d] hover:bg-[#80944d] hover:text-white transition-all duration-300 py-4 px-6 rounded-xl text-lg font-medium">
                      Sužinoti daugiau
                    </button>
                  </Link>
                </motion.div>

                {/* DRESS CODE CARD */}
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
                  className="bg-[#f5f0e2] p-8 md:p-10 rounded-[2rem] shadow-sm border border-[#d8d0bf]/60 flex flex-col"
                >
                  
                  <div className="w-14 h-14 bg-[#e2c545]/20 rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="h-7 w-7 text-[#d4b53f]" />
                  </div>

                  <h3
                    className="text-3xl font-semibold text-[#31411f] mb-5"
                    style={{
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    Spalvų paletė
                  </h3>

                  <p className="text-[#556146] leading-relaxed mb-5 flex-grow text-lg">
                    Mūsų vestuvės bus kuriamos jaukioje, šiltoje ir vasariškoje atmosferoje, todėl jas papuoš švelnūs, saulėti atspalviai. Kviečiame svečius prisidėti prie bendros nuotaikos ir pasirinkti aprangą iš mūsų spalvų paletės. Daugiau informacijos apie rekomenduojamas ir nepriimtinas spalvas rasite mūsų svetainėje – taip kartu sukursime harmoningą, lengvą ir estetiškai vientisą šventės įspūdį.
                  </p>

                  <Link to="/dress-code">
                    <button className="border border-[#80944d] text-[#80944d] hover:bg-[#80944d] hover:text-white transition-all duration-300 py-4 px-6 rounded-xl text-lg font-medium">
                      Peržiūrėti spalvas
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;