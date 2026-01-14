import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <div>
            <div>
              <img src="/src/assets/icons/paws.png" alt="pattes" /><span>Ada<span>opte</span></span>
            </div>
            <div>
              <NavLink to="/"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              ><img src="/src/assets/icons/home.png" alt="maison" /> accueil </NavLink>
              <NavLink to="/jadopte"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }><img src="/src/assets/icons/bone.png" alt="os" /> j'adopte </NavLink>
              <NavLink to="/guide"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }><img src="/src/assets/icons/fish.png" alt="poisson" /> guide de l'adoption </NavLink>
              <NavLink to="/benevole"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }><img src="/src/assets/icons/squirrel.png" alt="ecureuil" /> devenir bénévole</NavLink>
            </div>
            <div>
              <NavLink to="/don"><span>faire un don 🫶</span></NavLink>
            </div>
        </div>
    </nav>
  );
}
