import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function RSVPPage() {
  const [formData, setFormData] = useState({
    vardas: "",
    pavarde: "",
    telefonas: "",
    dalyvavimas: "",
    maistas: "",
    pageidavimai: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Ačiū! Jūsų atsakymas išsaugotas 💛");
  };

  return (
    <>
      <Helmet>
        <title>Dalyvavimo patvirtinimas - Vestuvės</title>

        <meta
          name="description"
          content="Patvirtinkite savo dalyvavimą mūsų vestuvių šventėje."
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
                  <Heart className="h-10 w-10 text-[#80944d]" />
                </div>

                <h1
                  className="text-[3rem] md:text-[4.5rem] font-semibold text-[#31411f] mb-6"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Dalyvavimo patvirtinimas
                </h1>

                <div className="flex items-center justify-center gap-5 mb-8">
                  <div className="w-24 h-px bg-[#b9b09d]" />

                  <Heart className="h-5 w-5 text-[#e2c545] fill-[#e2c545]" />

                  <div className="w-24 h-px bg-[#b9b09d]" />
                </div>

                <p className="text-lg md:text-xl text-[#556146] leading-relaxed max-w-3xl mx-auto">
                  Prašome užpildyti žemiau esančią formą.
                </p>
              </motion.div>
            </div>
          </section>

          {/* FORM */}
          <section className="py-20 bg-[#f7f2e8]">

            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">

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
                className="bg-[#f5f0e2] rounded-[2rem] border border-[#d8d0bf]/60 p-8 md:p-10"
              >

                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >

                  {/* VARDAS */}
                  <div>
                    <label className="block text-sm font-semibold text-[#31411f] mb-3">
                      Vardas
                    </label>

                    <input
                      type="text"
                      name="vardas"
                      value={formData.vardas}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none rounded-2xl border border-[#d8d0bf] bg-[#f7f2e8] px-5 py-4 text-[#31411f] outline-none focus:border-[#80944d] transition-all duration-300"
                    />
                  </div>

                  {/* PAVARDE */}
                  <div>
                    <label className="block text-sm font-semibold text-[#31411f] mb-3">
                      Pavardė
                    </label>

                    <input
                      type="text"
                      name="pavarde"
                      value={formData.pavarde}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none rounded-2xl border border-[#d8d0bf] bg-[#f7f2e8] px-5 py-4 text-[#31411f] outline-none focus:border-[#80944d] transition-all duration-300"
                    />
                  </div>

                  {/* TELEFONAS */}
                  <div>
                    <label className="block text-sm font-semibold text-[#31411f] mb-3">
                      Telefono numeris
                    </label>

                    <input
                      type="tel"
                      name="telefonas"
                      value={formData.telefonas}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none rounded-2xl border border-[#d8d0bf] bg-[#f7f2e8] px-5 py-4 text-[#31411f] outline-none focus:border-[#80944d] transition-all duration-300"
                    />
                  </div>

                  {/* DALYVAVIMAS */}
                  <div>
                    <label className="block text-sm font-semibold text-[#31411f] mb-3">
                      Ar dalyvausite?
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <label
                        className={`cursor-pointer rounded-2xl border px-5 py-5 transition-all duration-300 ${
                        formData.dalyvavimas === "Dalyvaus"
                            ? "border-[#80944d] bg-[#80944d]/10"
                            : "border-[#d8d0bf] bg-[#f7f2e8]"
                        }`}
                    >
                        <input
                        type="radio"
                        name="dalyvavimas"
                        value="Dalyvaus"
                        onChange={handleChange}
                        checked={formData.dalyvavimas === "Dalyvaus"}
                        className="hidden"
                        />

                        <div className="flex items-center justify-between">
                        <span className="font-medium text-[#31411f]">
                            Dalyvausiu
                        </span>

                        <div
                            className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                            formData.dalyvavimas === "Dalyvaus"
                                ? "border-[#80944d]"
                                : "border-[#b9b09d]"
                            }`}
                        >
                            {formData.dalyvavimas === "Dalyvaus" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#80944d]" />
                            )}
                        </div>
                        </div>
                    </label>

                    <label
                        className={`cursor-pointer rounded-2xl border px-5 py-5 transition-all duration-300 ${
                        formData.dalyvavimas === "Nedalyvaus"
                            ? "border-[#80944d] bg-[#80944d]/10"
                            : "border-[#d8d0bf] bg-[#f7f2e8]"
                        }`}
                    >
                        <input
                        type="radio"
                        name="dalyvavimas"
                        value="Nedalyvaus"
                        onChange={handleChange}
                        checked={formData.dalyvavimas === "Nedalyvaus"}
                        className="hidden"
                        />

                        <div className="flex items-center justify-between">
                        <span className="font-medium text-[#31411f]">
                            Nedalyvausiu
                        </span>

                        <div
                            className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                            formData.dalyvavimas === "Nedalyvaus"
                                ? "border-[#80944d]"
                                : "border-[#b9b09d]"
                            }`}
                        >
                            {formData.dalyvavimas === "Nedalyvaus" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#80944d]" />
                            )}
                        </div>
                        </div>
                    </label>
                    </div>
                  </div>

                  {/* MAISTAS */}
                  <div>
                    <label className="block text-sm font-semibold text-[#31411f] mb-3">
                      Maisto pasirinkimas
                    </label>

                    <select
                      name="maistas"
                      value={formData.maistas}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none rounded-2xl border border-[#d8d0bf] bg-[#f7f2e8] px-5 py-4 text-[#31411f] outline-none focus:border-[#80944d] transition-all duration-300"
                    >
                      <option value="">
                        Pasirinkite patiekalą
                      </option>

                      <option value='Pasta "Ragu Della Nonna"'>
                        Pasta "Ragu Della Nonna"
                      </option>

                      <option value='"Galician Angus" jautienos išpjova'>
                        "Galician Angus" jautienos išpjova
                      </option>

                      <option value="Aštuonkojis su N'duja, pomidorais ir bulvėmis">
                        Aštuonkojis su N'duja, pomidorais ir bulvėmis
                      </option>

                      <option value="Vegetaras">
                        Vegetaras
                      </option>

                      <option value="Vaikas">
                        Vaikas
                      </option>
                    </select>
                  </div>

                  {/* SPECIALŪS PAGEIDAVIMAI */}
                <div>
                <label className="block text-sm font-semibold text-[#31411f] mb-3">
                    Specialūs pageidavimai
                </label>

                <textarea
                    name="pageidavimai"
                    value={formData.pageidavimai}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Alergijos, specialūs pageidavimai ar kita svarbi informacija..."
                    className="w-full resize-none rounded-2xl border border-[#d8d0bf] bg-[#f7f2e8] px-5 py-4 text-[#31411f] outline-none focus:border-[#80944d] transition-all duration-300"
                />
                </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full bg-[#80944d] hover:bg-[#6f8143] text-white rounded-2xl py-5 text-lg font-semibold transition-all duration-300 mt-4"
                  >
                    Patvirtinti dalyvavimą
                  </button>
                </form>
              </motion.div>
            </div>
          </section>

          {/* INFO */}
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
                }}
                className="text-center"
              >

                <h3
                  className="text-[2em] font-semibold text-[#31411f] mb-6"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  LAUKSIME JŪSŲ ATSAKYMŲ!
                </h3>

                <p className="text-[1.05rem] text-[#556146] leading-relaxed max-w-3xl mx-auto">
                  Prašome patvirtinti savo dalyvavimą iki 2026-07-01.
                  <br />
                  Jei turite klausimų ar papildomų pageidavimų,
                  susisiekite su mumis tiesiogiai.
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

export default RSVPPage;