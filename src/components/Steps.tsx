export default function Steps (props:{icon:string,title:string,description:string}) {
    return (
        <div>
            <img src={`./src/assets/icons/${props.icon}.png`} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}