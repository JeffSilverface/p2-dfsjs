import { Link } from "react-router-dom";
import { centered } from "../styles/constants";

export const NotFound404 = () => {
  return (
    <div className={`${centered} flex-col gap-6`}>
      <span className="text-2xl">Page non trouvée. 404</span>

      <Link to="/">
        <button className="border rounded-xl p-3 cursor-pointer">
          Retour à la page d'accueil
        </button>
      </Link>
    </div>
  );
};
