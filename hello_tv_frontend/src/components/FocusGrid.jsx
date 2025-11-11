import React, { useEffect, useRef } from 'react';

/**
 * PUBLIC_INTERFACE
 * FocusGrid
 * A lightweight focus manager for TV-style navigation using arrow keys and Enter.
 * - Finds focusable children inside its container via the selector '[data-focusable="true"]'
 * - Uses roving tabindex pattern and programmatic focus
 * - ArrowLeft/ArrowUp moves to previous, ArrowRight/ArrowDown moves to next
 * - Enter invokes onEnter callback with { index, element, id }
 *
 * Props:
 * - onEnter?: function({ index, element, id }): void
 * - scopeQuery?: string - CSS selector for focusable items (default '[data-focusable="true"]')
 * - initialIndex?: number - starting index (default 0)
 * - wrap?: boolean - whether to wrap around at edges (default false)
 * - orientation?: 'horizontal' | 'vertical' (default 'horizontal') - used only to declare role/aria
 *
 * Accessibility:
 * - The container is given role="listbox" and aria-orientation based on props.
 * - Each item receives proper tabindex management.
 */
 // PUBLIC_INTERFACE
export default function FocusGrid({
  children,
  onEnter,
  scopeQuery = '[data-focusable="true"]',
  initialIndex = 0,
  wrap = false,
  orientation = 'horizontal',
}) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const indexRef = useRef(initialIndex);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const collectItems = () => {
      itemsRef.current = Array.from(container.querySelectorAll(scopeQuery));
      // Initialize roving tabindex
      itemsRef.current.forEach((el, i) => {
        el.setAttribute('tabindex', i === indexRef.current ? '0' : '-1');
        el.setAttribute('role', el.getAttribute('role') || 'option');
      });
    };

    const focusCurrent = () => {
      const el = itemsRef.current[indexRef.current];
      if (el && typeof el.focus === 'function') {
        el.focus({ preventScroll: true });
      }
      itemsRef.current.forEach((node, i) => {
        if (i === indexRef.current) {
          node.classList.add('is-focused');
        } else {
          node.classList.remove('is-focused');
        }
      });
    };

    const updateFocus = () => {
      itemsRef.current.forEach((el, i) => {
        el.setAttribute('tabindex', i === indexRef.current ? '0' : '-1');
      });
      focusCurrent();
    };

    collectItems();
    focusCurrent();

    const onKey = (e) => {
      const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter'];
      if (!keys.includes(e.key)) return;

      // Handle only when our container is mounted and visible
      if (!document.body.contains(container)) return;

      // If focus is not inside our grid, still allow arrow control to update our grid focus
      // to make TV-like behavior easier. Prevent default scroll on arrow keys we handle.
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (indexRef.current < itemsRef.current.length - 1) {
          indexRef.current += 1;
        } else if (wrap && itemsRef.current.length > 0) {
          indexRef.current = 0;
        }
        updateFocus();
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (indexRef.current > 0) {
          indexRef.current -= 1;
        } else if (wrap && itemsRef.current.length > 0) {
          indexRef.current = itemsRef.current.length - 1;
        }
        updateFocus();
        e.preventDefault();
      } else if (e.key === 'Enter') {
        const el = itemsRef.current[indexRef.current];
        if (el) {
          if (typeof onEnter === 'function') {
            onEnter({ index: indexRef.current, element: el, id: el.dataset?.id });
          }
          if (typeof el.click === 'function') {
            el.click(); // allow natural click handlers too
          }
        }
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', onKey);
    const resizeObs = new ResizeObserver(() => {
      // Re-collect if DOM structure changes size (simple heuristic)
      collectItems();
      updateFocus();
    });
    resizeObs.observe(container);

    return () => {
      window.removeEventListener('keydown', onKey);
      try {
        resizeObs.disconnect();
      } catch { /* no-op */ }
    };
  }, [onEnter, scopeQuery, initialIndex, wrap]);

  return (
    <div
      ref={containerRef}
      className="tv-focus-grid"
      role="listbox"
      aria-orientation={orientation === 'horizontal' ? 'horizontal' : 'vertical'}
      style={{ outline: 'none' }}
    >
      {children}
    </div>
  );
}
