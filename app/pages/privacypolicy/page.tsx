import Footer from "@/components/foot";
import { NavbarComponent } from "@/components/navbar";

export default function privacypolicy() {
    return (
      <div>
        <NavbarComponent></NavbarComponent>
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-4 mt-28 mb-8">
          <h1 className="text-3xl font-semibold">Rekisteri- ja tietosuojaseloste</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Tämä on OY Bahn Express AB:n EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste. Laadittu 23.1.2024. Viimeisin muutos 29.7.2024
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">1. Rekisterinpitäjä</h2>
                <p className="text-lg text-gray-700">
                  OY Bahn Express AB<br />
                  3414813-4<br />
                  Topeliuksenkatu 16 D 55<br />
                  00250 HELSINKI
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">2. Rekisteristä vastaava yhteyshenkilö</h2>
                <p className="text-lg text-gray-700">
                  Atte Vesala<br />
                  atte@bahnexpress.fi
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">3. Rekisterin nimi</h2>
                <p className="text-lg text-gray-700">Bahn Expressin asiakasrekisteri</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">4. Rekisterin käyttötarkoitus</h2>
                <p className="text-lg text-gray-700">
                  Henkilörekisteri sisältää henkilötietoja luonnollisista henkilöistä, joille on asiakassuhteen perustamiseksi tehty palvelutoimeksianto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">5. Rekisterin tietosisältö</h2>
                <p className="text-lg text-gray-700 mb-2">Rekisteri voi sisältää seuraavia tietoja:</p>
                <ul className="text-lg space-y-2 list-disc pl-6 text-gray-700">
                  <li>Etu- ja sukunimi</li>
                  <li>Puhelinnumero</li>
                  <li>Sähköpostiosoite</li>
                  <li>Ammatti ja työsuhdetiedot</li>
                  <li>Kansalaisuus</li>
                  <li>Siviilisääty</li>
                  <li>Ajoneuvon tiedot</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">6. Rekisterin säännönmukaiset tietolähteet</h2>
                <ul className="text-lg list-disc pl-6 text-gray-700">
                  <li>Asiakkaan ilmoittamat tiedot</li>
                  <li>Trafin ajoneuvotiedot</li>
                  <li>Väestötietorekisteri</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">7. Tietojen luovutus</h2>
                <p className="text-lg text-gray-700">
                  Mitään tietokannassa olevia tietoja ei luovuteta Bahn Expressin ja sen yhteistyökumppaneiden ulkopuolisille tahoille. Bahn Express voi luovuttaa tietoja lainsäädännön sääntelemissä rajoissa esimerkiksi viranomaisille. Tietoja ei luovuteta Euroopan unionin jäsenmaiden tai Euroopan talousalueen ulkopuolelle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">8. Rekisterin suojaus</h2>
                <p className="text-lg text-gray-700">
                  Asiakastietojen käsittelystä vastaavia henkilöitä sitoo salassapitovelvollisuus. Asiakasrekisteriin tallennettuja henkilötietoja käsitellään luottamuksellisina ja ulkopuolisten pääsy niihin estetään. Rekisterin käyttö on ohjeistettu. Asiakasrekisterijärjestelmää voivat käyttää vain käyttäjätunnuksella ja salasanalla valtuutetut henkilöt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">9. Rekisteritietojen säilytys ja tarkastaminen</h2>
                <p className="text-lg text-gray-700">
                  Henkilötietoja säilytetään niin kauan kuin tarpeen asiakassuhteen ylläpitämiseksi tai minkä tahansa muun rekisterin kuvauksessa mainitun tarkoituksen täyttämiseksi, kuitenkin enimmillään 10 vuotta. Rekisteröidyllä on oikeus tarkastaa ja oikaista tietojaan. Tarkastus ja korjauspyynnöt voi osoittaa rekisteriasioista vastaavalle henkilölle.
                </p>
              </section>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }