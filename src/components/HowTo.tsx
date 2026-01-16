import Steps from "./Steps"
export default function HowTo() {
    const stepsInfo=[
        {
            icon:"zoom",
            title:"1. Trouvez votre compagnon",
            description:"Parcourez notre base de données d'animaux disponibles et utilisez nos filtres pour trouver celui qui correspond à votre mode de vie."
        },
        {
          icon:"note",
            title:"2. Remplissez une demandez votre compagnon",
            description:"Soumettez votre formulaire d'adoption pour l'animal qui vous intéresse. Nous examinons chaque demande avec soin."   
        },
        {
             icon:"hand",
            title:"3. Rencontrez l'animal",
            description:"Visitez le refuge pour rencontrer l'animal et voir si vous êtes compatibles. C'est une étape essentielle du processus."
        },
        {
             icon:"house",
            title:"4. Bienvenue à la maison",
            description:"Une fois votre demande approuvée, vous pouvez accueillir votre nouvel ami chez vous. Nous restons disponibles pour vous conseiller."
        }
    ];
    return (
        <section id="howto">
            <h2>Comment ça marche</h2>
            <p>Adopter un animal est un engagement sérieux et à long terme. Voici notre processus d'adoption en quelques étapes simples.</p>
            <div>
                {
                    stepsInfo.map((info, index) =>
                        <Steps key={index} icon={info.icon} title={info.title} description={info.description}/>
                    )
                }
            </div>
        </section>
    )
}