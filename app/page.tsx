"use client";

import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-pink-800 mb-4">
            MiSide - Varázslatos Kalandjáték
          </h1>
          <p className="text-lg text-gray-600">
            Fedezd fel MiSide varázslatos világát! Egy mágikus kalandjáték tele
            rejtvényekkel és varázslattal.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Steam link kártya */}
          <div>
            <Card className="p-6 bg-white/90 backdrop-blur-lg border-pink-200 shadow-lg hover:shadow-xl transition-all">
              <h2 className="text-2xl font-semibold text-pink-700 mb-4">
                Steam link
              </h2>
              <p className="text-gray-600 mb-6">
                A MiSide magyar fordítása bekerült a játékba, így már
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
          </div>

          {/* Játék bemutatása kártya */}
          <div>
            <Card className="p-6 bg-white/90 backdrop-blur-lg border-pink-200 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">
                    Játék bemutatása pár szóban
                  </h3>
                  <p className="text-gray-600 font-mono text-sm">
                    A **Miside** egy kalandjáték, horror elemekkel, amely egy
                    egyszerű srác történetét meséli el, aki misztikus okokból
                    egy mobilos szimulációban találja magát...
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Videó kártya */}
          <div>
            <Card className="p-6 bg-white/90 backdrop-blur-lg border-pink-200 shadow-lg hover:shadow-xl transition-all">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/JxeST9Bv4W0?si=kKwBTmy6YzHXKEei"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Card>
          </div>

          {/* Frissítési lista kártya */}
          <div className="lg:col-span-2">
            <Card className="p-12 bg-white/90 backdrop-blur-lg border-pink-200 shadow-lg hover:shadow-xl transition-all">
              <h3 class="text-xl font-semibold text-pink-700 mb-4">
                Frissítési lista
              </h3>
              <p class="text-gray-600 font-mono text-sm">
                Nincs változás a cselekményben, megjelenés 2024-ben várható:
                <ul class="list-disc pl-5 space-y-2">
                  <li>1.21 + Japán hang + Különféle javítások</li>
                  <li>Hozzáadott fordítások: vietnami 1.19</li>
                  <li>Karácsony 1.18F + Halloween 1.17F</li>
                  <li>Automatikus nyelvérzékelés a rendszerről</li>
                  <li>Változtassa meg Mita ruházati funkcióját</li>
                  <li>Képes beszúrni Mitát a menübe</li>
                  <li>
                    Különféle javítások (térd IK, Tamagotchi képernyő, szöveg,
                    párbeszédpanel) 1.15
                  </li>
                  <li>Direct3D 10/9 támogatás</li>
                  <li>
                    Hangszínjátszás támogatása (most már csak az orosz nyelv
                    került hozzáadásra)
                  </li>
                  <li>Alternatív nyelvnevek</li>
                  <li>A fényerőt nem tartalmazza a színes grafika</li>
                  <li>Beállítások - vizuális tippek</li>
                  <li>Felirat módok és javítások</li>
                  <li>"Tab" gomb mutatja az aktuális feladatot</li>
                  <li>Sárgarépa egyszerűsített szeletelése</li>
                  <li>Lépések hangok a test elforgatásakor (Mita)</li>
                  <li>Értékek a beállításokban</li>
                  <li>Néhány fejlesztés és optimalizálás</li>
                  <li>A játékos kézzel nyomja az ajtókat</li>
                  <li>Változások: A játékos megjelenése, néhány textúra</li>
                  <li>Mita tippje (az asztalhoz ülést javasol)</li>
                  <li>
                    Hozzáadott fordítások: Deutsch / Holland / Español -
                    Latinoamérica / Français / Indonéz / Olasz / Japán / Koreai
                    / Magyar / Lengyel / Português - Brasil / Román / Török /
                    Ukrán
                  </li>
                </ul>
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
