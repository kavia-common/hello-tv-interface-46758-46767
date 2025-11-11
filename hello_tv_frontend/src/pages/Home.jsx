import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home-page-1-2.css';
import FocusGrid from '../components/FocusGrid';

/**
 * PUBLIC_INTERFACE
 * Home
 * Renders the TV-style Home screen derived from the static assets.
 * Styling is kept pixel-precise via the imported stylesheet.
 * Includes a FocusGrid enabling arrow-key navigation across the "Seguí viendo" cards.
 */
 // PUBLIC_INTERFACE
export default function Home() {
  const navigate = useNavigate();

  const handleEnter = ({ id }) => {
    // Navigate to the Content Info screen with the chosen item id (fallback to 1)
    const targetId = id || '1';
    navigate(`/content/${encodeURIComponent(targetId)}`);
  };

  return (
    <div className="screen fw-rel" aria-label="Home Screen" style={{ backgroundColor: 'var(--color-121212)' }}>
      {/* Highlights */}
      <div className="highlights fw-rel" aria-label="Highlights">
        <div className="left-mask" />
        <img
          className="center-image fw-img"
          src="/assets/figmaimages/figma_image_1_13.png"
          alt="Highlight"
        />
        <div className="right-mask" />
      </div>

      {/* Seguí viendo */}
      <div className="section-continue fw-rel" aria-label="Seguí viendo">
        <span className="title typo-24">Seguí viendo</span>

        <FocusGrid onEnter={handleEnter} scopeQuery='[data-focusable="true"]'>
          {/* Card 1 */}
          <div
            className="card1 fw-rel"
            role="button"
            aria-label="Rogue One"
            data-focusable="true"
            data-id="1"
            onClick={() => navigate('/content/1')}
          >
            <img className="image fw-img" src="/assets/figmaimages/figma_image_1_41.png" alt="Rogue One" />
            <div className="progress-track-lg" />
            <div className="progress-fill-lg" />
            <div className="name-bg" />
            <span className="name-text typo-23">Rogue One</span>
          </div>

        {/* Intentionally omitting decorative SVG icons that are not present in figmaimages */}
        {/* Card 2 */}
          <div
            className="card2 fw-rel"
            role="button"
            aria-label="Ex Machina"
            data-focusable="true"
            data-id="2"
            onClick={() => navigate('/content/2')}
          >
            <img className="image fw-img" src="/assets/figmaimages/figma_image_1_68.png" alt="Ex Machina" />
            <div className="progress-track" />
            <div className="progress-fill" />
            <div className="name-bg" />
            <span className="name-text typo-23">Ex Machina</span>
          </div>

          {/* Card 3 */}
          <div
            className="card3 fw-rel"
            role="button"
            aria-label="Sing Street"
            data-focusable="true"
            data-id="3"
            onClick={() => navigate('/content/3')}
          >
            <img className="image fw-img" src="/assets/figmaimages/figma_image_1_85.png" alt="Sing Street" />
            <div className="progress-track" />
            <div className="progress-fill" />
            <div className="name-bg" />
            <span className="name-text typo-23">Sing Street</span>
          </div>

          {/* Card 4 */}
          <div
            className="card4 fw-rel"
            role="button"
            aria-label="2012"
            data-focusable="true"
            data-id="4"
            onClick={() => navigate('/content/4')}
          >
            <img className="image fw-img" src="/assets/figmaimages/figma_image_1_102.png" alt="2012" />
            <div className="progress-track" />
            <div className="progress-fill" />
            <div className="name-bg" />
            <span className="name-text typo-23">2012</span>
          </div>

          {/* Card 5 */}
          <div
            className="card5 fw-rel"
            role="button"
            aria-label="Ad Astra"
            data-focusable="true"
            data-id="5"
            onClick={() => navigate('/content/5')}
          >
            <img className="image fw-img" src="/assets/figmaimages/figma_image_1_119.png" alt="Ad Astra" />
            <div className="progress-track" />
            <div className="progress-fill" />
            <div className="name-bg" />
            <span className="name-text typo-23">Ad Astra</span>
          </div>
        </FocusGrid>
      </div>

      {/* Canales de TV */}
      <div className="section-channels fw-rel" aria-label="Canales de TV">
        <span className="title typo-24">Canales de TV</span>

        <div className="channels-card1 fw-rel" aria-label="Channel Card 1">
          <img className="thumb1 fw-img" src="/assets/figmaimages/figma_image_1_154.png" alt="Channel 1" />
          <div className="prog-track" />
          <div className="prog-fill" />
          <span className="details-title typo-25">Marca Claro Radio</span>
          <span className="details-subtitle typo-26">004 | Claro sports</span>
          <span className="details-time typo-26">11:30 - 12:30</span>
          <div className="live-pill" />
          <span className="live-text typo-27">EN VIVO</span>
        </div>

        <div className="channels-card2 fw-rel" aria-label="Channel Card 2">
          <img className="thumb1 fw-img" src="/assets/figmaimages/figma_image_1_179.png" alt="Channel 2 A" />
          <img className="thumb2 fw-img" src="/assets/figmaimages/figma_image_1_180.png" alt="Channel 2 B" />
          <div className="prog-track" />
          <div className="prog-fill" />
          <span className="details-title typo-25">E.T.</span>
          <span className="details-subtitle typo-26">005 | HBO Channel</span>
          <span className="details-time typo-26">11:30 - 12:30</span>
          <div className="live-pill" />
          <span className="live-text typo-27">EN VIVO</span>
        </div>

        <div className="channels-card3 fw-rel" aria-label="Channel Card 3">
          <img className="thumb1 fw-img" src="/assets/figmaimages/figma_image_1_218.png" alt="Channel 3" />
          <div className="prog-track" />
          <div className="prog-fill" />
          <span className="details-title typo-25">Marca Claro Radio</span>
          <span className="details-subtitle typo-26">004 | Claro sports</span>
          <span className="details-time typo-26">11:30 - 12:30</span>
          <div className="live-pill" />
          <span className="live-text typo-27">EN VIVO</span>
        </div>
      </div>

      {/* Header */}
      <div className="header fw-rel" aria-label="Header">
        <div className="topnav-bg" />
        <div className="avatar-focus" />
        <img className="avatar" src="/assets/figmaimages/figma_image_1_231.png" alt="Avatar" />

        {/* Menu items */}
        <span className="menu-inicio typo-28">Inicio</span>
        <span className="menu-peliculas typo-28">Películas</span>
        <span className="menu-series typo-28">Series</span>
        <span className="menu-tv typo-28">TV en vivo</span>
        <span className="menu-kids typo-28">Kids</span>
        <span className="menu-mis typo-28">Mis Contenidos</span>

        {/* Active indicator */}
        <div className="active-pill" />
        <span className="active-text typo-29">Inicio</span>
      </div>
    </div>
  );
}
