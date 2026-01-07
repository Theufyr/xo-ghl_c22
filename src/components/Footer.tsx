import { Link } from "react-router-dom";

export default  function footer() {
    return (
        <footer>
            <div>
                <div>
                    <h2>ADAOPTE</h2>
                    <p>Notre mission est de trouver des foyers aimants pour chaque animal abandonné et de promouvoir le bien-être animal. </p>
                </div>
                
                <div>
                    <h2>INFORMATIONS UTILES</h2>
                    <Link to = "/">FAQs</Link>
                    <Link to = "/">Conseils d'adoption</Link>
                    <Link to = "/">Nous contacter</Link>
                    <Link to = "/">Mentions légales </Link>
                </div>

                <div>
                    <h2>CONTACT</h2>
                    <p>116 rue du Faubourg Saint-Martin</p>
                    <p>75010 Paris, France </p>
                    <p>Email: <Link to = "mailto:contact@adaopte.fr">contact@adaopte.fr</Link></p>
                    <p>Tel: +33 1 23 45 67 89 </p>
                </div>

            </div>
            <hr />
            <div>
                <p>© 2025 Adaopte. Tous droits réservés.</p>
                <p>Ce site a été developpé dans le cadre d'un projet pour ADA Tech School.</p>
            </div>
        </footer>
    )
} 