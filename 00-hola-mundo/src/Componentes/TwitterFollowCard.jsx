import "../CSS/TwitterFollowCard.css";
import { useState } from "react";

export function TwitterFollowCard({
  children,
  formatUserName = "@",
  Usuario = "Unknow",
  initialIsFollowing
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const TextSiguendo = isFollowing ? "Siguiendo" : "Seguir";

  const CambiarEstado = () => {
    setIsFollowing(!isFollowing);
  }
  return (
    <article className="btnArticleFollowCard">
      <header>
        <img src={`src/Imagenes/${Usuario}.jpg`} alt={Usuario} />
        <div>
          <strong>{children}</strong>
          <span>{formatUserName(Usuario)}</span>
        </div>
      </header>
      <aside>
        <button className={TextSiguendo} onClick={CambiarEstado}>{TextSiguendo}</button>
      </aside>
    </article>
  );
}
