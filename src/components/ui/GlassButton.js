"use client";

import React from "react";
import styles from "./GlassButton.module.css";

const GlassButton = React.forwardRef(
  ({ children, size = "default", fullWidth = false, href, onClick, className = "", contentClassName = "", ...props }, ref) => {
    const sizeClass = size === "sm" ? styles.sm : size === "lg" ? styles.lg : size === "icon" ? styles.icon : "";
    const widthClass = fullWidth ? styles.fullWidth : "";

    const inner = (
      <div className={`${styles.glassWrap} ${widthClass} ${className}`}>
        <span className={`${styles.glassBtn} ${sizeClass} ${widthClass}`}>
          <span className={`${styles.glassText} ${sizeClass} ${contentClassName}`}>
            {children}
          </span>
        </span>
        <div className={styles.glassShadow} />
      </div>
    );

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          onClick={onClick}
          className={`${styles.glassLink} ${widthClass}`}
          {...props}
        >
          {inner}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${styles.glassLink} ${widthClass}`}
        {...props}
      >
        {inner}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export { GlassButton };
