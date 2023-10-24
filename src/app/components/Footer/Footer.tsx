
import SocialNetwork from "./SocialNetwork/SocialNetwork";
const Footer : React.FC = () => {
    return (
      <footer>
        <div className="container mx-auto flex flex-col gap-10 justify-between w-auto my-10 xl:flex-row">
          <section className="flex-1">
            <h1 className="my-4 font-bold">NAVIGATION</h1>
            <ul>
              <li>Page d'aceuil</li>
              <li>Rechercher</li>
              <li>Mentions légales</li>
              <li>Conditions Générales de Vente en Ligne</li>
              <li>Nous Contacter</li>
            </ul>
          </section>

          <section className="flex-1">
            <h1 className="my-4 font-bold">SUIVEZ NOUS!</h1>
            <p>
              Solidement ancré à ses terres, le Domaine Rolet a été l’un des
              leaders du développement du vignoble Jurassien. Propriétaires de
              nos vignes et producteurs de nos vins, nous sommes fiers d’offrir
              une diversité unique de grands terroirs reflétant la richesse et
              la singularité de notre environnement. Arbois, Côtes du Jura,
              L’Étoile font résonner au fil des millésimes les doux noms de nos
              cépages emblématiques et indigènes : Chardonnay, Savagnin,
              Trousseau, Poulsard et Pinot Noir. Adhésion à un éco-organisme. ID
              : FR205104_01REKA
            </p>
          </section>

          <section className="flex-1">
            <h1 className="my-4 font-bold">NEWSLETTER</h1>
            <p>
              Pour découvrir le monde du Domaine Rolet et rester informé de nos
              lancements et événements futurs, nous vous invitons à renseigner
              les champs ci-dessous.
            </p>

            <div className="my-10">
              <form>
                <input className='mx-2' type="text" placeholder="your mail adress" />
              </form>
            </div>
          </section>
        </div>

        <SocialNetwork/>

      </footer>
    );
}

export default Footer;