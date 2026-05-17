import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#f5f0e2] border-t border-[#d8d0bf]">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">

          {/* LEFT */}
          <div>
            <h3
              className="text-[1.5rem] font-semibold text-[#31411f] mb-3"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Vestuvių detalės
            </h3>

            <p className="text-[#556146] leading-relaxed text-[0.8rem] max-w-xl">
              Kviečiame jus būti šios ypatingos dienos dalimi, kai kartu
              švęsime meilę, artumą ir naują mūsų gyvenimo etapą.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h3
              className="text-[1.5rem] font-semibold text-[#31411f] mb-3"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Svarbi informacija
            </h3>

            <p className="text-[#556146] leading-relaxed text-[0.8rem]">
              Prašome patvirtinti savo dalyvavimą iki 2026-07-01, kad galėtume tinkamai pasirūpinti visomis šventės detalėmis. Jei turite klausimų ar reikalinga papildoma informacija, drąsiai susisiekite su mumis – mielai padėsime. Labai laukiame jūsų šią ypatingą dieną ir tikimės kartu sukurti nepamirštamus prisiminimus!
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-5 border-t border-[#d8d0bf]">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-[#7a8368]">
              © {new Date().getFullYear()} Vestuvės. Sukurta su meile.
            </p>

            <div className="flex items-center gap-2 text-sm text-[#7a8368]">
              
              <span>Pagaminta su</span>

              <Heart className="h-4 w-4 text-[#d4b53f] fill-[#d4b53f]" />

              <span>jaunavedžių</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;