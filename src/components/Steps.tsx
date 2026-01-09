export default function Steps (props:{icon:string,title:string,description:string}) {
    return (
        <article>
            <div><img src={`./src/assets/icons/${props.icon}.png`} alt="" /></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    )
}