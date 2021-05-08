import React from "react";

const Covid = () => {
  return (
    <div>
      <div className="bg-blue-400 h-5"></div>
      <div className="bg-white py-8 px-4">
        <h2 className="text-center text-3xl  mb-6 font-medium text-gray-600">
          Masuri de siguranta COVID-19
        </h2>
        <div className="flex justify-evenly flex-col md:flex-row">
          <div className="w-full md:my-0 my-2 md:w-1/3">
            <h3 className="text-xl text-center mb-3 font-medium">
              Facilitati de siguranta
            </h3>
            <ul className="px-2">
              <li className="text-lg">
                Personalul urmează toate protocoalele de siguranță impuse de
                autoritățile locale
              </li>
              <li className="text-lg">
                Articolele utilizate în comun, precum meniurile imprimate,
                revistele, pixurile și hârtia au fost eliminate
              </li>
              <li className="text-lg">
                Dezinfectant pentru mâini în unitatea de cazare și în zonele
                esențiale
              </li>
              <li className="text-lg">
                Proces de verificare a sănătății oaspeților
              </li>
            </ul>
          </div>
          <div className="w-full md:my-0 my-2 md:w-1/3 md:border-l-2 md:border-r-2">
            <h3 className="text-xl text-center mb-3 font-medium">
              Distantare Fizica
            </h3>
            <ul className="px-2">
              <li className="text-lg">
                Opțiune de plată fără numerar disponibilă
              </li>
              <li className="text-lg">
                Se respectă regulile de distanțare fizică
              </li>
            </ul>
          </div>
          <div className="w-full md:my-0 my-2 md:w-1/3 md:border-l-2 md:border-r-2">
            <h3 className="text-xl text-center mb-3 font-medium">
              Siguranta alimentelor si bauturilor
            </h3>
            <ul className="px-2">
              <li className="text-lg">
                Distanțare fizică în zonele de luat masa
              </li>
              <li className="text-lg">
                Mâncarea poate fi livrată oaspeților în unitatea de cazare
              </li>
              <li className="text-lg">
                Toată vesela, tacâmurile, paharele și alte articole de masă au
                fost igienizate
              </li>
            </ul>
          </div>
          <div className="w-full md:my-0 my-2 md:w-1/3">
            <h3 className="text-xl text-center mb-3 font-medium">
              Curatenie si dezinfectare
            </h3>
            <ul className="px-2">
              <li className="text-lg">
                Se utilizează substanțe de curățenie eficiente împotriva
                coronavirusului
              </li>
              <li className="text-lg">
                Lenjeria de pat, prosoapele și rufele sunt spălate conform
                recomandărilor autorităților locale
              </li>
              <li className="text-lg">
                Unitatea de cazare este dezinfectată zilnic
              </li>
              <li className="text-lg">
                Oaspeții pot renunța la serviciul de curățenie al unității de
                cazare pe durata sejurului
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-400 h-5"></div>
    </div>
  );
};

export default Covid;
