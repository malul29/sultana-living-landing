import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./InteractiveHoverButton.module.css";

const InteractiveHoverButton = React.forwardRef(({ text = "Button", variant = "default", href, onClick, ...props }, ref) => {
  const isPrimary = variant === "primary";
  const btnClass = `${styles.interactiveBtn} ${isPrimary ? styles.interactiveBtnPrimary : ""}`;
  
  const content = (
    <>
      <span className={styles.textPrimary}>
        {text}
      </span>
      <div className={styles.textHover}>
        <span>{text}</span>
        <ArrowRight size={16} strokeWidth={2} />
      </div>
      <div className={styles.bgDot}></div>
    </>
  );

  if (href) {
    return (
      <a 
        ref={ref} 
        href={href} 
        className={btnClass} 
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      className={btnClass}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
