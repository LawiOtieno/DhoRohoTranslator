import { Church, Users, Heart, Crown, User, HandHelping, Link as LinkIcon, Languages } from "lucide-react";

export default function About() {
  const martyrs = [
    "1. Alfayo Odongo ➟ Mach 🔥",
    "2. Lawi Obonyo ➟ Tong' 🏹", 
    "3. Isaka Obayo ➟ Tong' 🏹",
    "4. Turfosa Aloo ➟ Tong' 🏹",
    "5. Zadok Aol ➟ Mach 🔥",
    "6. Joel Owino ➟ Mach 🔥",
    "7. Persila Adongo ➟ Mach 🔥",
    "8. Musa Muga ➟ Tong' 🏹",
    "9. Salome Omondi ➟ Mach 🔥"
  ];

  return (
    <div className="min-h-screen p-4 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="card fade-in">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://i.imgur.com/BUxE9oF.jpg" 
                alt="Ruwe Holy Ghost Church Logo" 
                className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-lg"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Brief History of Ruwe Holy Ghost Church
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start space-x-3 mb-4">
                <Church className="text-red-600 text-xl mt-1" size={24} />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Origins of the Movement</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The Ruwe Holy Ghost Church emerged from the Roho religion, an independent African Christian movement among the Luo people in Western Kenya. This movement traces its origins to the early 20th century and developed as a distinct entity, breaking away from established mainstream missions.
              </p>
            </section>

            {/* Key Figures */}
            <section>
              <div className="flex items-start space-x-3 mb-6">
                <Users className="text-red-600 text-xl mt-1" size={24} />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Key Figures and Early Events</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <User className="mr-2 text-blue-600" size={20} />
                    Alfayo Odongo Mango
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Central prophet and leader of the Roho movement. A charismatic figure who engaged with both religious and political matters, advocating for his followers.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <HandHelping className="mr-2 text-green-600" size={20} />
                    Lawi Obonyo Ongwek
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mango's nephew, a significant figure within the movement, known for performing baptisms and working miracles.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg border shadow-sm md:col-span-2">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Crown className="mr-2 text-yellow-600" size={20} />
                    Elijah Oloo - "King of the Black"
                  </h3>
                  <p className="text-gray-600 text-sm">
                    An ex-army sergeant, symbolically installed as the "King of the Black" (also known as "Kingi of the Joroho") on January 16, 1934, at Alfayo Odongo Mango's home in Musanda. This marked an effort by the Roho leadership to establish a new administrative and spiritual structure.
                  </p>
                </div>
              </div>
            </section>

            {/* Martyrdom Section */}
            <section className="bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="flex items-start space-x-3 mb-4">
                <Heart className="text-red-600 text-xl mt-1" size={24} />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">The Musanda Massacre and Martyrdom</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  The history of the church is tragically marked by the Musanda massacre, which occurred on <strong>January 20, 1934</strong>. During this event, Alfayo Odongo Mango and eight other prominent Roho adherents were killed.
                </p>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Heart className="mr-2" size={20} />
                    The Nine Martyrs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    {martyrs.map((martyr, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded">
                        {martyr}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm md:text-base">
                  The killings were perpetrated by Wanga warriors, often referred to as "Jokawango" by the Luo, stemming from escalating tensions between the Roho followers and the Wanga community. The events of this period, particularly January 20th and 21st, 1934, were a culmination of various conflicts, including a notable confrontation involving Roho women soldiers.
                </p>
              </div>
            </section>

            {/* Succession and Language */}
            <section>
              <div className="flex items-start space-x-3 mb-6">
                <Languages className="text-red-600 text-xl mt-1" size={24} />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Succession and Sacred Language</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <User className="mr-2 text-blue-600" size={20} />
                    Leadership Succession
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Following the martyrdom of Alfayo Odongo Mango, <strong>Barnaba Waluoho Ojoro</strong> succeeded him as the leader of the Roho group, serving as Bishop from 1934 until 1980.
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Languages className="mr-2 text-green-600" size={20} />
                    The Sacred "Dho Roho" Language
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    The "Dho Roho" language was revealed to <strong>Paulo Rang'ienga Ojoro</strong> when Barnaba Waluoho Ojoro was the Arch-Bishop. This occurred after Alfayo Odongo, Lawi Obonyo, and seven other Christian founders had been martyred by the "Jokawango" on January 20th and 21st, 1934.
                  </p>
                </div>
              </div>
            </section>

            {/* Historical Connection */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start space-x-3 mb-4">
                <LinkIcon className="text-red-600 text-xl mt-1" size={24} />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Archdeacon Walter Edwin Owen's Connection</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Archdeacon Walter Edwin Owen, a prominent missionary from the Church Missionary Society (CMS) in Western Kenya, was acquainted with Alfayo Odongo Mango. Their relationship was strained due to Mango's independent religious activities, such as performing baptisms without missionary sanction. Owen's writings provide valuable context on the broader missionary efforts and colonial dynamics in Kenya during that era, though they do not delve into the specifics of the "Dho Roho" language revelation or the intricate spiritual practices of the Roho church.
              </p>
            </section>

            {/* Conclusion */}
            <section className="text-center bg-red-600 text-white p-6 rounded-xl">
              <div className="flex justify-center items-center">
                <img
                  src="https://i.imgur.com/BUxE9oF.jpg"
                  alt="Ruwe Holy Ghost Church Logo"
                  className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-lg"
                />
              </div>
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                The Ruwe Holy Ghost Church stands as a significant indigenous African church with a rich history rooted in spiritual independence and marked by profound sacrifice.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
