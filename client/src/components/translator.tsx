import { useState, useEffect } from "react";
import { Copy, Languages, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const translationMap = {
  // Special Combinations (3 letters, highest priority)
  "CHA": "DHO", "CHE": "DHU", "CHI": "DHE", "CHO": "DHI", "CHU": "DHA",
  "NDA": "MO", "NDE": "MU", "NDI": "ME", "NDO": "MI", "NDU": "MA",
  "NGA": "FO", "NGE": "FU", "NGI": "FE", "NGO": "FI", "NGU": "FA",
  "NG'A": "GO", "NG'E": "GU", "NG'I": "GE", "NG'O": "GI", "NG'U": "GA",
  "THA": "KO", "THE": "KU", "THI": "KE", "THO": "KI", "THU": "KA",
  "NJA": "WO", "NJE": "WU", "NJI": "WE", "NJO": "WI", "NJU": "WA",
  "DHA": "DO", "DHE": "DU", "DHI": "DE", "DHO": "DI", "DHU": "DA",
  "MBA": "YO", "MBE": "YU", "MBI": "YE", "MBO": "YI", "MBU": "YA",
  "NYA": "JO", "NYE": "JU", "NYI": "JE", "NYO": "JI", "NYU": "JA",

  // Consonants Combinations (2 letters)
  "BA": "PO", "BE": "PU", "BI": "PE", "BO": "PI", "BU": "PA",
  "DA": "THO", "DE": "THU", "DI": "THE", "DO": "THI", "DU": "THA",
  "FA": "NO", "FE": "NU", "FI": "NE", "FO": "NI", "FU": "NA",
  "GA": "TO", "GE": "TU", "GI": "TE", "GO": "TI", "GU": "TA",
  "HA": "NZO", "HE": "NZU", "HI": "NZE", "HO": "NZI", "HU": "NZA",
  "JA": "WO", "JE": "WU", "JI": "WE", "JO": "WI", "JU": "WA",
  "KA": "CHO", "KE": "CHU", "KI": "CHE", "KO": "CHI", "KU": "CHA",
  "LA": "RO", "LE": "RU", "LI": "RE", "LO": "RI", "LU": "RA",
  "MA": "SO", "ME": "SU", "MI": "SE", "MO": "SI", "MU": "SA",
  "NA": "NDO", "NE": "NDU", "NI": "NDE", "NO": "NDI", "NU": "NDA",
  "PA": "BO", "PE": "BU", "PI": "BE", "PO": "BI", "PU": "BA",
  "RA": "MPO", "RE": "MPU", "RI": "MPE", "RO": "MPI", "RU": "MPA",
  "SA": "NG'O", "SE": "NG'U", "SI": "NG'E", "SO": "NG'I", "SU": "NG'A",
  "TA": "VO", "TE": "VU", "TI": "VE", "TO": "VI", "TU": "VA",
  "VA": "TO", "VE": "TU", "VI": "TE", "VO": "TI", "VU": "TA",
  "WA": "NJO", "WE": "NJU", "WI": "NJE", "WO": "NJI", "WU": "NJA",
  "YA": "SHO", "YE": "SHU", "YI": "SHE", "YO": "SHI", "YU": "SHA",
  "ZA": "HO", "ZE": "HU", "ZI": "HE", "ZO": "HI", "ZU": "HA",
  
  // Standalone Consonant Clusters (2-3 letters)
  "NG'": "G", "CH": "DH", "DH": "D", "MB": "Y", "ND": "M",
  "NG": "F", "NJ": "W", "NY": "J", "TH": "K",

  // Alphabetical Letters (1 letter, lowest priority)
  "A": "O", "B": "P", "D": "TH", "E": "U", "F": "N", "G": "T", "H": "NZ",
  "I": "E", "J": "W", "K": "CH", "L": "R", "M": "S", "N": "ND", "O": "I",
  "P": "B", "R": "MP", "S": "NG'", "T": "V", "U": "A", "V": "T", "W": "NJ",
  "Y": "SH", "Z": "H",
};

export default function Translator() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLuoToDhoRoho, setIsLuoToDhoRoho] = useState(true);
  const [showRules, setShowRules] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Create reverse translation map
  const reverseTranslationMap = (() => {
    const tempReverseMap: Record<string, string> = {};
    for (const luoKey in translationMap) {
      const dhoRohoValue = translationMap[luoKey as keyof typeof translationMap];
      if (!tempReverseMap[dhoRohoValue] || luoKey.length > tempReverseMap[dhoRohoValue].length) {
        tempReverseMap[dhoRohoValue] = luoKey;
      }
    }
    return tempReverseMap;
  })();

  const sortedKeys = Object.keys(translationMap).sort((a, b) => {
    // First sort by length (longer first)
    if (b.length !== a.length) {
      return b.length - a.length;
    }
    // If same length, prioritize ng' over ng
    if (a.startsWith("NG'") && b.startsWith("NG") && !b.startsWith("NG'")) {
      return -1;
    }
    if (b.startsWith("NG'") && a.startsWith("NG") && !a.startsWith("NG'")) {
      return 1;
    }
    return 0;
  });
  
  const sortedReverseKeys = Object.keys(reverseTranslationMap).sort((a, b) => {
    // First sort by length (longer first)
    if (b.length !== a.length) {
      return b.length - a.length;
    }
    // If same length, prioritize G over F combinations when dealing with reverse mapping
    if (a.startsWith("G") && b.startsWith("F")) {
      return -1;
    }
    if (b.startsWith("G") && a.startsWith("F")) {
      return 1;
    }
    return 0;
  });

  const translateToDhoRoho = (text: string): string => {
    const lines = text.split('\n');
    const translatedLines = lines.map(line => {
      const words = line.split(' ');
      const translatedWords = words.map(word => {
        let remainingWord = word.toUpperCase();
        let translatedWord = '';
        while (remainingWord.length > 0) {
          let matchFound = false;
          
          // Custom priority check for NG' vs NG to handle case-insensitive matching
          if (remainingWord.startsWith("NG'")) {
            // Check for NG' combinations first
            for (const key of sortedKeys) {
              if (key.startsWith("NG'") && remainingWord.startsWith(key)) {
                translatedWord += translationMap[key as keyof typeof translationMap];
                remainingWord = remainingWord.substring(key.length);
                matchFound = true;
                break;
              }
            }
          } else if (remainingWord.startsWith("NG")) {
            // Check for NG combinations only if not NG'
            for (const key of sortedKeys) {
              if (key.startsWith("NG") && !key.startsWith("NG'") && remainingWord.startsWith(key)) {
                translatedWord += translationMap[key as keyof typeof translationMap];
                remainingWord = remainingWord.substring(key.length);
                matchFound = true;
                break;
              }
            }
          }
          
          // If no NG/NG' match found, use normal sorting
          if (!matchFound) {
            for (const key of sortedKeys) {
              if (remainingWord.startsWith(key)) {
                translatedWord += translationMap[key as keyof typeof translationMap];
                remainingWord = remainingWord.substring(key.length);
                matchFound = true;
                break;
              }
            }
          }
          
          if (!matchFound) {
            translatedWord += remainingWord.charAt(0);
            remainingWord = remainingWord.substring(1);
          }
        }
        return translatedWord;
      });
      return translatedWords.join(' ');
    });
    
    let formattedTranslation = translatedLines.join('\n').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
    formattedTranslation = formattedTranslation.replace(/'(\w)/g, (match, p1) => `'${p1.toLowerCase()}`);
    return formattedTranslation;
  };

  const translateToLuo = (text: string): string => {
    const lines = text.split('\n');
    const translatedLines = lines.map(line => {
      const words = line.split(' ');
      const translatedWords = words.map(word => {
        let remainingWord = word.toUpperCase();
        let translatedWord = '';
        while (remainingWord.length > 0) {
          let matchFound = false;
          
          // Custom priority check for G vs F to handle case-insensitive matching
          if (remainingWord.startsWith("G")) {
            // Check for G combinations first (these come from NG' in Luo)
            for (const key of sortedReverseKeys) {
              if (key.startsWith("G") && remainingWord.startsWith(key)) {
                translatedWord += reverseTranslationMap[key];
                remainingWord = remainingWord.substring(key.length);
                matchFound = true;
                break;
              }
            }
          } else if (remainingWord.startsWith("F")) {
            // Check for F combinations only if not G
            for (const key of sortedReverseKeys) {
              if (key.startsWith("F") && remainingWord.startsWith(key)) {
                translatedWord += reverseTranslationMap[key];
                remainingWord = remainingWord.substring(key.length);
                matchFound = true;
                break;
              }
            }
          }
          
          // If no G/F match found, use normal sorting
          if (!matchFound) {
            for (const key of sortedReverseKeys) {
              if (remainingWord.startsWith(key)) {
                translatedWord += reverseTranslationMap[key];
                remainingWord = remainingWord.substring(key.length);
                matchFound = true;
                break;
              }
            }
          }
          
          if (!matchFound) {
            translatedWord += remainingWord.charAt(0);
            remainingWord = remainingWord.substring(1);
          }
        }
        return translatedWord;
      });
      return translatedWords.join(' ');
    });
    
    return translatedLines.join('\n').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  };

  const handleTranslate = () => {
    if (inputText.trim() === '') {
      setOutputText('');
      return;
    }
    
    let translationResult;
    if (isLuoToDhoRoho) {
      translationResult = translateToDhoRoho(inputText);
    } else {
      translationResult = translateToLuo(inputText);
    }
    setOutputText(translationResult);
  };

  const handleCopy = async () => {
    if (!outputText) return;
    
    try {
      await navigator.clipboard.writeText(outputText);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDirectionChange = () => {
    setIsLuoToDhoRoho(!isLuoToDhoRoho);
    setInputText('');
    setOutputText('');
  };

  // Real-time translation
  useEffect(() => {
    if (inputText.trim()) {
      handleTranslate();
    } else {
      setOutputText('');
    }
  }, [inputText, isLuoToDhoRoho]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="card">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center">
            <img src="https://i.imgur.com/8ToqmB8.png" alt="Ruwe Holy Ghost Church Letter-Head" className="mx-auto mb-4 shadow-lg"/>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Dho Roho Translator</h1>
          <p className="text-gray-500 text-sm md:text-base">Translate your text between Luo and Dho Roho.</p>
        </div>

        {/* Translation Direction Toggle */}
        <div className="flex items-center justify-center mb-6 space-x-4">
          <span className="text-gray-700 font-medium text-sm md:text-base">
            {isLuoToDhoRoho ? "Luo" : "Dho Roho"}
          </span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={!isLuoToDhoRoho}
              onChange={handleDirectionChange}
              title="Toggle translation direction"
              aria-label="Toggle translation direction"
            />
            <span className="slider"></span>
          </label>
          <span className="text-gray-700 font-medium text-sm md:text-base">
            {isLuoToDhoRoho ? "Dho Roho" : "Luo"}
          </span>
        </div>

        {/* Input and Output Section */}
        <div className="space-y-6">
          {/* Input */}
          <div>
            <Label htmlFor="inputText" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Text ({isLuoToDhoRoho ? "Luo" : "Dho Roho"})
            </Label>
            <Textarea
              id="inputText"
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition text-sm md:text-base"
              placeholder={
                isLuoToDhoRoho
                  ? "Type or paste your text here... e.g., Japuonj or Nying"
                  : "Type or paste your Dho Roho text here... e.g., Jong'oshu or Shung'a or Wobaiw"
              }
            />
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Button
              onClick={handleTranslate}
              className="btn-translate bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm md:text-base"
            >
              <Languages className="mr-2" size={16} />
              Translate
            </Button>
          </div>

          {/* Output */}
          <div>
            <Label htmlFor="outputText" className="block text-sm font-medium text-gray-700 mb-2">
              Translation ({isLuoToDhoRoho ? "Dho Roho" : "Luo"})
            </Label>
            <div className="relative">
              <div className="w-full p-4 pr-12 bg-gray-50 border border-gray-200 rounded-xl whitespace-pre-wrap min-h-[100px]">
                <p className="text-gray-800 font-semibold text-base md:text-lg">{outputText}</p>
              </div>
              {copyFeedback && (
                <span className="absolute top-1/2 right-12 -translate-y-1/2 text-sm text-red-600 bg-red-100 px-2 py-1 rounded-md transition-opacity duration-300">
                  Copied!
                </span>
              )}
              <button
                onClick={handleCopy}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-red-600 focus:outline-none transition-colors"
                title="Copy to clipboard"
              >
                <Copy size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer with link to rules */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowRules(!showRules)}
            className="text-red-600 hover:text-red-800 text-sm transition-colors"
          >
            <BookOpen className="inline mr-2" size={16} />
            Show/Hide Translation Rules
          </button>
        </div>
        
        {showRules && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <BookOpen className="mr-2 text-yellow-500" size={16} />
              Translation Logic
            </h3>
            <p className="text-sm text-gray-600">
              The translation is based on a set of rules derived from "Dho Roho - Alphabetical Letters". 
              Taking example of vowels: A ➟ O, E ➟ U, I ➟ E, O ➟ I, U ➟ A.
            </p>
          </div>
        )}

        {/* Copyright */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
          <h4 className="text-base md:text-lg font-semibold mb-2 flex items-center justify-center">
            <span className="mr-2">©</span>Copyright 2020 - 2025. All Rights Reserved.
          </h4>
          <p className="text-center text-sm md:text-base">
            Developed with <Heart className="inline text-red-500" size={16} /> by{" "}
            <a
              href="https://wa.me/254708581688?text=Sang'onjo%20Ronje%20%F0%9F%91%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 underline"
            >
              Lawi Otieno
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
