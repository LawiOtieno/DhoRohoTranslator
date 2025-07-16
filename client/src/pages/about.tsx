import { Church, Users, Heart, Crown, User, HandHelping, Link as LinkIcon, Languages } from "lucide-react";

export default function About() {
  const martyrs = [
    "1. Alfayo Odongo ➟ Fire (Mach) 🔥",
    "2. Lawi Obonyo ➟ Spear (Tong') 🏹", 
    "3. Isaka Obayo ➟ Spear (Tong') 🏹",
    "4. Turfosa Aloo ➟ Spear (Tong') 🏹",
    "5. Zadok Aol ➟ Fire (Mach) 🔥",
    "6. Joel Owino ➟ Fire (Mach) 🔥",
    "7. Persila Adongo ➟ Fire (Mach) 🔥",
    "8. Musa Muga ➟ Spear (Tong') 🏹",
    "9. Salome Omondi ➟ Fire (Mach) 🔥"
  ];

  return (
    <div className="min-h-screen p-4 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="card fade-in">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center">
              <a href="https://maps.app.goo.gl/n83SKs5SGdsrvZse6" target="_blank" rel="noopener noreferrer">
                <img src="https://i.imgur.com/8ToqmB8.png" alt="Ruwe Holy Ghost Church Letter-Head" className="mx-auto mb-4 shadow-lg"/>
              </a>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Brief History of Ruwe Holy Ghost Church EA
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start space-x-3 mb-4">
                <Church className="text-red-600 text-xl mt-1" size={24} />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Origin of Roho</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Ruwe Holy Ghost Church is one of the African Independent Christian Churches and it's based in East Africa (It's origin can be traced back to 1906/07 when it was revealed to someone called Owalo then it was revealed to Ibrahim Osodo around 1912/14 in Ruwe Sublocation. It was later revealed to Alfayo Odongo in 1918 when he was a Priest/Pastor of Anglican CMS at Mombasa). The movement/denomination was started by Alfayo Odongo Mango (Sirael  Odongo) and Lawi Obonyo Ong'wek (Fweny Lawi) around 1933, after the Holy Spirit had revealed it to both of them on different occasions.
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
                    Reverend Alfayo Odongo Mango is recognized as the patriarch and a pivotal figure (Founder) of all Roho churches. His leadership of the Roho (Holy Spirit) movement commenced in the 1920s. His early life included formal schooling, with Walter Chadwick, Archdeacon Owen's predecessor and founder of the Church Missionary Society (CMS) mission station at Butere, taking an interest in his education. Central to Mango's spiritual authority was his profound experience of "possession by Roho".
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <HandHelping className="mr-2 text-green-600" size={20} />
                    Lawi Obonyo Ongwek
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fweny Lawi, Alfayo Odongo's nephew, played a crucial supporting role in the Roho movement. He is remembered as a carpenter and a charismatic miracle-worker, divinely designated as "the helper" (jakony) for the nascent Roho community. His spiritual gifts were instrumental in attracting followers; he is credited with curing individuals like Patricia Amis of a chin ailment and Nora Nyadero of demon possession.
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
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">The Musanda Martyrdom</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  The history of the church is tragically marked by the Musanda martyrdom, which occurred on <strong>January 20 & 21, 1934</strong>. During this event, Alfayo Odongo Mango and eight other prominent Roho adherents were killed.
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
                  The killings were perpetrated by Wanga warriors, often referred to as "Jokawango" by the Luo, stemming from escalating tensions between the Roho followers and the Wanga community. The events of this period, particularly January 20th and 21st, 1934, were a culmination of various conflicts, including a notable confrontation involving Roho women soldiers with Abuodha and Mfuana.
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
                    Following the martyrdom of Alfayo Odongo Mango, <strong>Barnaba Waluoho Ojoro</strong> succeeded him as the leader of the Roho movement, serving as Bishop or "Archbishop" from 1934 until 1980. His long tenure as Bishop was crucial for the post-martyrdom continuity and stability of the nascent church. Barnaba Waluoho specifically led the "Roho group at Ruwe," a faction that played a significant role in the efforts to unite various splinter indigenous faith groups. This consolidation was instrumental in the eventual formal registration of the Ruwe Holy Ghost Church in 1972. The swift and effective succession of Barnaba Waluoho as leader in the immediate aftermath of Mango's martyrdom demonstrates that, despite the traumatic loss of its founder and other key figures, the movement possessed a resilient leadership structure capable of ensuring its continuity. Barnaba's extended period of leadership further solidified the church's foundation, guiding it through critical phases of expansion and formal recognition.
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Languages className="mr-2 text-green-600" size={20} />
                    The Sacred "Dho Roho" Language
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    The "Dho Roho" language was revealed to <strong>Paulo Rang'ienga Ojoro</strong> when Barnaba Waluoho Ojoro was the Bishop or "Archbishop". Rang'ienga stayed in his house for 8 years during the revelation/coming of  "Dho Roho".
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
                Archdeacon Walter Edwin Owen, a prominent missionary from the Church Missionary Society (CMS) in Western Kenya, was acquainted with Alfayo Odongo Mango. Their relationship was strained due to Mango's independent religious activities, such as performing baptisms without missionary sanction. Owen's writings provide valuable context on the broader missionary efforts and colonial dynamics in Kenya during that era.
              </p>
            </section>

            {/* Conclusion */}
            <section className="text-center bg-red-600 text-white p-6 rounded-xl">
              <div className="flex justify-center items-center">
                <a href="https://maps.app.goo.gl/n83SKs5SGdsrvZse6" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.imgur.com/BUxE9oF.jpg"
                    alt="Ruwe Holy Ghost Church Logo"
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-lg"
                  />
                </a>
              </div>
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                Ruwe Holy Ghost Church EA stands as a significant indigenous African church with a rich history rooted in spiritual independence.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
