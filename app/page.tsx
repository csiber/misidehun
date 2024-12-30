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
            <Card className="p-12 bg-white/90 backdrop-blur-lg border-pink-200 shadow-lg hover:shadow-xl transition-all">
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
