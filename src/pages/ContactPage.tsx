import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Camera,
  Heart,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function ContactPage() {
  const contacts = [
    {
      name: "Jaunikis",
      phone: "+370 676 33472",
      instagram: "https://www.instagram.com/rimvulis/",
      messenger: "https://www.facebook.com/Rimvulis",
    },
    {
      name: "Nuotaka",
      phone: "+370 626 46602",
      instagram: "https://www.instagram.com/dobilait/",
      messenger: "https://www.facebook.com/julytea1109",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kontaktai - Vestuvės</title>

        <meta
          name="description"
          content="Susisiekite su mumis dėl vestuvių informacijos."
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
                  <MessageCircle className="h-10 w-10 text-[#80944d]" />
                </div>

                <h1
                  className="text-[3rem] md:text-[4.5rem] font-semibold text-[#31411f] mb-6"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Kontaktai
                </h1>

                <div className="flex items-center justify-center gap-5 mb-8">
                  <div className="w-24 h-px bg-[#b9b09d]" />

                  <Heart className="h-5 w-5 text-[#e2c545] fill-[#e2c545]" />

                  <div className="w-24 h-px bg-[#b9b09d]" />
                </div>

                <p className="text-lg md:text-xl text-[#556146] leading-relaxed max-w-3xl mx-auto">
                  Turite klausimų? Susisiekite su mumis bet kuriuo metu
                </p>
              </motion.div>
            </div>
          </section>

          {/* CONTACTS */}
          <section className="py-20 bg-[#f7f2e8]">

            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {contacts.map((contact, index) => (
                  <motion.div
                    key={contact.name}
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
                      delay: index * 0.1,
                    }}
                    className="bg-[#f5f0e2] rounded-[2rem] p-8 border border-[#d8d0bf]/60"
                  >

                    {/* HEADER */}
                    <div className="flex items-center gap-4 mb-8">

                      <div className="h-14 w-14 rounded-2xl bg-[#80944d]/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-[#80944d]" />
                      </div>

                      <h2
                        className="text-[2rem] font-semibold text-[#31411f]"
                        style={{
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        {contact.name}
                      </h2>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="space-y-6">

                      {/* PHONE */}
                      <div className="flex items-start gap-4">

                        <Phone className="h-5 w-5 text-[#80944d] mt-1 flex-shrink-0" />

                        <div>
                          <p className="text-sm font-medium text-[#7a8368] mb-1">
                            Telefonas
                          </p>

                          <a
                            href={`tel:${contact.phone.replace(/\s/g, "")}`}
                            className="text-[#31411f] hover:text-[#80944d] transition-colors"
                          >
                            {contact.phone}
                          </a>
                        </div>
                      </div>

                      {/* INSTAGRAM */}
                      <div className="flex items-start gap-4">

                        <Camera className="h-5 w-5 text-[#80944d] mt-1 flex-shrink-0" />

                        <div>
                          <p className="text-sm font-medium text-[#7a8368] mb-1">
                            Instagram
                          </p>

                          <a
                            href={contact.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#31411f] hover:text-[#80944d] transition-colors"
                          >
                            Peržiūrėti profilį
                          </a>
                        </div>
                      </div>

                      {/* MESSENGER */}
                      <div className="flex items-start gap-4">

                        <MessageCircle className="h-5 w-5 text-[#80944d] mt-1 flex-shrink-0" />

                        <div>
                          <p className="text-sm font-medium text-[#7a8368] mb-1">
                            Messenger
                          </p>

                          <a
                            href={contact.messenger}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#31411f] hover:text-[#80944d] transition-colors"
                          >
                            Parašyti žinutę
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* INFO SECTION */}
          <section className="py-24 bg-[#f3eedf] border-y border-[#d8d0bf]/40">

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
                }}
                className="text-center"
              >

                <h3
                  className="text-[2rem] font-semibold text-[#31411f] mb-6"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Laukiame jūsų žinučių
                </h3>

                <p className="text-[1.05rem] text-[#556146] leading-relaxed max-w-3xl mx-auto">
                  Nesidrovėkite susisiekti su mumis dėl bet kokių klausimų apie vestuvių dieną, vietą, aprangą ar bet kokią kitą informaciją. Mielai atsakysime į visus jūsų klausimus ir padėsime pasiruošti šiai ypatingai dienai.
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

export default ContactPage;