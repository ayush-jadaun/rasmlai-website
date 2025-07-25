import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  MouseEvent,
  useCallback,
  HTMLAttributes
} from "react";

interface MagnetProps extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  [key: string]: unknown; // For additional props
}

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  onClick,
  ...props
}: MagnetProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const magnetRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } =
        magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      const isWithinBounds =
        distX < width / 2 + padding && distY < height / 2 + padding;

      if (isWithinBounds) {
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;

        setIsActive((prev) => {
          if (!prev) return true;
          return prev;
        });

        setPosition((prev) => {
          if (
            Math.abs(prev.x - offsetX) < 0.1 &&
            Math.abs(prev.y - offsetY) < 0.1
          ) {
            return prev;
          }
          return { x: offsetX, y: offsetY };
        });
      } else {
        setIsActive((prev) => {
          if (prev) return false;
          return prev;
        });

        setPosition((prev) => {
          if (prev.x === 0 && prev.y === 0) return prev;
          return { x: 0, y: 0 };
        });
      }
    },
    [padding, magnetStrength]
  );

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [disabled, handleMouseMove]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{
        position: "relative",
        display: "inline-block",
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
