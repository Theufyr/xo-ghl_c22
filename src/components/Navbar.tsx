import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <div>
            <div>
          <NavLink to="/"><img src="/src/assets/icons/paws.png" alt="pattes" /><span>Ada<span>opte</span></span></NavLink>
          </div>
          <div>
          <NavLink to="/"><img src="/src/assets/icons/home.png" alt="maison" /> accueil </NavLink>
          <NavLink to="/jadopte"><img src="/src/assets/icons/bone.png" alt="os" /> j'adopte </NavLink>
          <NavLink to="/"><img src="/src/assets/icons/fish.png" alt="poisson" /> guide de l'adoption </NavLink>
          <NavLink to="/"><img src="/src/assets/icons/squirrel.png" alt="ecureuil" /> devenir bénévole</NavLink>
          </div>
          <div>
          <NavLink to="/"><span>faire un don 🫶</span></NavLink>
          </div>
        </div>
    </nav>
  );
}
