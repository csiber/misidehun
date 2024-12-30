"use client";

import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-800 mb-4">MISIDE</h1>
          <p className="text-lg text-gray-600">Magyar fordítás letöltése</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur border-pink-100">
              <h2 className="text-2xl font-semibold text-pink-700 mb-4">
                Letöltés
              </h2>
              <p className="text-gray-600 mb-6">
                A MISIDE magyar fordítása ingyenesen letölthető. A fordítás
                telepítéséhez kövesd a mellékelt útmutatót.
              </p>
              <Button
                className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                onClick={() => window.open("/misidehun.zip", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Fordítás letöltése
              </Button>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur border-pink-100">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">
                    Telepítési útvonal
                  </h3>
                  <p className="text-gray-600 font-mono text-sm">
                    C:\Program Files (x86)\Steam\steamapps\common\MISIDE\
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 bg-white/80 backdrop-blur border-pink-100">
              <h2 className="text-2xl font-semibold text-pink-700 mb-4">
                Telepítési útmutató
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li>Töltsd le a fordítás fájljait</li>
                <li>Keresd meg a MISIDE telepítési mappáját</li>
                <li>Másold be a letöltött fájlokat a játék mappájába</li>
                <li>Indítsd el a játékot</li>
                <li>A játék beállításaiban válaszd ki a magyar nyelvet</li>
              </ol>
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
