"use client";

import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-800 mb-4">
            MiSide - Varázslatos Kalandjáték
          </h1>
          <p className="text-lg text-gray-600">
            Fedezd fel MiSide varázslatos világát! Egy mágikus kalandjáték tele
            rejtvényekkel és varázslattal.'
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur border-pink-100">
              <h2 className="text-2xl font-semibold text-pink-700 mb-4">
                Steam link
              </h2>
              <p className="text-gray-600 mb-6">
                A MiSide magyar fordítása bekerült a játékba, igy már
                hivatalosan is eléred Steam-en.
              </p>
              <Button
                className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                onClick={() =>
                  window.open(
                    "https://store.steampowered.com/app/2527500/MiSide/",
                    "_blank"
                  )
                }
              >
                <Download className="mr-2 h-4 w-4" />
                Ugrás a Steam oldalra!
              </Button>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur border-pink-100">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">
                    Játék bemutatása pár szóban
                  </h3>
                  <p className="text-gray-600 font-mono text-sm">
                    A **Miside** egy kalandjáték, horror elemekkel, amely egy
                    egyszerű srác történetét meséli el, aki misztikus okokból
                    egy mobilos szimulációban találja magát. Miután megjelenik
                    egy házban, amit épp a telefonján nézett, a főszereplő
                    zavarodottá válik. Hamarosan rátalál egy különös eszközre a
                    hálószobában, amely irányítja őt a helyzetben. Ahogy halad
                    előre ebben a szürreális világban, találkozik egy gyönyörű
                    lánnyal, akinek az arca szintén ismerős a fiatalember
                    számára a mobiljátékból, amit korábban játszott. A játék
                    titokzatos, feszültséggel teli és hátborzongató elemeket
                    ötvöz, miközben a hős felfedi a szimuláció mögötti titkokat
                    és a háttérben megbújó sötét erőket.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 bg-white/80 backdrop-blur border-pink-100">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JxeST9Bv4W0?si=kKwBTmy6YzHXKEei"
                title="YouTube video player"
                frameBorder="0" // A frameborder helyett a frameBorder
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" // A referrerpolicy helyett referrerPolicy
                allowFullScreen // A allowfullscreen helyett allowFullScreen
              ></iframe>
            </Card>
          </div>

          <div>
            <Card className="p-12 bg-white/80 backdrop-blur border-pink-100">
              <p className="text-gray-600 font-mono text-sm">
                Frissítési lista: Nincs változás a cselekményben, megjelenés
                2024-ben várható 1.21 + Japán hang + Különféle javítások +
                Hozzáadott fordítások: vietnami 1.19 + Karácsony 1,18F +
                Halloween 1.17F + Automatikus nyelvérzékelés a rendszerről +
                Változtassa meg Mita ruházati funkcióját + Képes beszúrni Mitát
                a menübe + Különféle javítások (térd IK, Tamagotchi képernyő,
                szöveg, párbeszédpanel) 1.15 + Direct3D 10/9 támogatás +
                Hangszínjátszás támogatása (most már csak az orosz nyelv került
                hozzáadásra) + Alternatív nyelvnevek + A fényerőt nem
                tartalmazza a színes grafika + Beállítások - vizuális tippek +
                Felirat módok és javítások + "Tab" gomb mutatja az aktuális
                feladatot + Sárgarépa egyszerűsített szeletelése + Lépések
                hangok a test elforgatásakor (Mita) + Értékek a beállításokban +
                Néhány fejlesztés és optimalizálás + A játékos kézzel nyomja az
                ajtókat + Változások: A játékos megjelenése, néhány textúra +
                Mita tippje (az asztalhoz ülést javasol) + Hozzáadott
                fordítások: Deutsch / Holland / Español - Latinoamérica /
                Français / Indonéz / Olasz / Japán / Koreai / Magyar / Lengyel /
                Português - Brasil / Román / Török / Ukrán
              </p>
            </Card>
          </div>
        </div>

        <footer className="text-center mt-16 text-gray-500">
          <p>
            Készítette: Polyák Csaba -{" "}
            <a
              href="https://promnet.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              promnet.hu
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
