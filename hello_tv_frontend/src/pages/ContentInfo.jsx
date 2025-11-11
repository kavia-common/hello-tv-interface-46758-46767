import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/content-info-1-539.css';

/**
 * PUBLIC_INTERFACE
 * ContentInfo
 * Renders the Content Info screen adapted from static assets.
 * Uses the optional ':id' route parameter to display program-specific variations (currently informational).
 */
 // PUBLIC_INTERFACE
export default function ContentInfo() {
  const { id } = useParams();

  return (
    <div className="screen fw-rel" aria-label="Content Info Screen">
      {/* Background poster */}
      <img
        className="bg-image fw-img z1"
        src="/assets/figmaimages/figma_image_1_540.png"
        alt="Background Poster"
      />

      {/* Gradient overlay */}
      <div className="gradient-overlay z2" aria-hidden="true" />

      {/* Metadata Info Panel */}
      <div className="panel fw-rel z3" aria-label="Metadata Info Panel">
        {/* Row: Channel */}
        <div className="row-channel fw-rel" aria-label="Channel row">
          <span className="channel-num typo-30">242</span>
          <span className="channel-name typo-31">TNT</span>
        </div>

        {/* Program name */}
        <div className="program-name typo-32">{id ? `Gladiador II · ${id}` : 'Gladiador II'}</div>

        {/* Info line (simplified to text only to ensure all images resolve) */}
        <div className="info-line fw-rel" aria-label="Info line">
          <span className="text-a typo-33">Gladiator II</span>
          <span className="text-b typo-33" style={{ left: 159, position: 'absolute' }}>2 h 28 min</span>
          <span className="text-c typo-33" style={{ left: 314, position: 'absolute' }}>Acción, aventura, drama</span>
          <div className="age-chip fw-rel" aria-label="Age restriction" style={{ left: 619, position: 'absolute' }}>
            <span className="age-text typo-34">+ 16 Años</span>
          </div>
        </div>

        {/* Time row */}
        <div className="time-row fw-rel" aria-label="Time and controls">
          <div className="timestamp typo-35">MÁS TARDE</div>
          <div className="times fw-rel">
            <div className="t1">
              <span className="typo-33" style={{ position: 'relative', zIndex: 1 }}>20:00</span>
            </div>
            <div className="bar" />
            <div className="t2">
              <span className="typo-33">22:20</span>
            </div>
          </div>
        </div>

        {/* Description and actions */}
        <div className="desc-block fw-rel" aria-label="Description and actions">
          <p className="desc typo-37">
            Lucio es obligado a entrar en el Coliseo después de que su hogar sea conquistado por los tiránicos
            emperadores que ahora dirigen Roma con puño de hierro. Con la ira en su corazón y el futuro del Imperio en
            juego, Lucio debe mirar hacia atrás para encontrar fuerza y devolver la gloria de Roma a su pueblo.
          </p>

          <div className="actions fw-rel" aria-label="Action buttons">
            <div className="btn btn-1 fw-rel" role="button" aria-label="Programar">
              <div className="icon-frame" />
              <span className="label typo-38">Programar</span>
            </div>
            <div className="btn btn-2 fw-rel" role="button" aria-label="Repetir">
              <div className="icon-frame" />
              <span className="label typo-38">Repetir</span>
            </div>
            <div className="btn btn-3 fw-rel" role="button" aria-label="Grabar">
              <div className="icon-frame" />
              <span className="label typo-38">Grabar</span>
            </div>
            <div className="btn btn-4 fw-rel" role="button" aria-label="Favorito">
              <div className="icon-frame" />
              <span className="label typo-38">Favorito</span>
            </div>
            <div className="btn btn-5 fw-rel" role="button" aria-label="Bloquear">
              <div className="icon-frame" />
              <span className="label typo-38">Bloquear</span>
            </div>
            <div className="btn btn-6 fw-rel" role="button" aria-label="Audio/Subt.">
              <div className="icon-frame" />
              <span className="label typo-38">Audio/Subt.</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Date/Time (top right) */}
      <div className="systemdate fw-rel z3" aria-label="System Date">
        <div className="time typo-39">20:44</div>
        <div className="date typo-40">7 abr.</div>
      </div>
    </div>
  );
}
