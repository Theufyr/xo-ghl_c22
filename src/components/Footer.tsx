import { Link } from "react-router-dom";

export default  function footer() {
    return (
        <footer>
            <div>
                <div>
                    <h2>ADAOPTE</h2>
                    <p>Notre mission est de trouver des foyers aimants pour chaque animal abandonné et de promouvoir le bien-être animal. </p>
                    <p>
                        <Link to = "/"><img src="/src/assets/icons/facebook.png" alt="facebook" /></Link>
                        <Link to = "/"><img src="/src/assets/icons/instagram.png" alt="instagram" /></Link>
                        <Link to = "/"><img src="/src/assets/icons/linkedin.png" alt="linkedin" /></Link>
                        <Link to = "/"><img src="/src/assets/icons/twitch.png" alt="twitch" /></Link>
                    </p>
                </div>
                
                <div>
                    <h2>INFORMATIONS UTILES</h2>
                    <p><Link to = "/">FAQs</Link></p>
                    <p><Link to = "/">Conseils d'adoption</Link></p>
                    <p><Link to = "/">Nous contacter</Link></p>
                    <p><Link to = "/">Mentions légales </Link></p>
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