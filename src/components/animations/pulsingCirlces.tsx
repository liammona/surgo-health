"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface PulsingCircleGridProps {
  className?: string;
  circleColor?: string;
  circleSize?: number;
  circleSpacing?: number;
  squareSize?: number; // Size of the conceptual squares
}

interface CircleData {
  id: string;
  x: number;
  y: number;
}

const PulsingCircleGrid: React.FC<PulsingCircleGridProps> = ({
  className = "w-full h-full",
  circleColor = "#efefef",
  circleSize = 15,
  circleSpacing = 20,
  squareSize = 80, // Default size for the conceptual squares
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 }); 
  const [circlesRenderData, setCirclesRenderData] = useState<CircleData[]>([]);

  useEffect(() => {
    const calculateAndSetCircles = (currentWidth: number, currentHeight: number) => {
      if (currentWidth <= 0 || currentHeight <= 0) {
        setCirclesRenderData([]);
        return;
      }

      const PADDING_CONTAINER = 8; // From p-2 className, 8px on each side
      const uniquePoints = new Set<string>();
      let circleIdCounter = 0;

      // Usable area inside the container's padding
      const drawingAreaWidth = currentWidth - PADDING_CONTAINER * 2;
      const drawingAreaHeight = currentHeight - PADDING_CONTAINER * 2;

      if (drawingAreaWidth < circleSize || drawingAreaHeight < circleSize) { 
         if (drawingAreaWidth < Math.min(squareSize, circleSize) || drawingAreaHeight < Math.min(squareSize, circleSize)) {
            setCirclesRenderData([]);
            return;
         }
      }

      const numSquaresX = Math.max(0, Math.floor(drawingAreaWidth / squareSize));
      const numSquaresY = Math.max(0, Math.floor(drawingAreaHeight / squareSize));

      if (numSquaresX === 0 && numSquaresY === 0) { 
          setCirclesRenderData([]);
          return;
      }

      const gridActualWidth = numSquaresX * squareSize;
      const gridActualHeight = numSquaresY * squareSize;

      const gridStartX = PADDING_CONTAINER + (drawingAreaWidth - gridActualWidth) / 2;
      const gridStartY = PADDING_CONTAINER + (drawingAreaHeight - gridActualHeight) / 2;

      const itemStep = circleSize + circleSpacing;

      for (let r = 0; r <= numSquaresY; r++) { 
        const yLine = gridStartY + r * squareSize;
        let currentX = gridStartX;
        if (yLine < PADDING_CONTAINER || yLine + circleSize > currentHeight - PADDING_CONTAINER) {
            if (!(numSquaresY === 0 && r === 0 && yLine >= PADDING_CONTAINER && yLine + circleSize <= currentHeight - PADDING_CONTAINER)) {
                 continue;
            }
        }
        while (currentX + circleSize <= gridStartX + gridActualWidth + 0.01) { 
          if (currentX >= PADDING_CONTAINER && currentX + circleSize <= currentWidth - PADDING_CONTAINER) {
             uniquePoints.add(`${currentX.toFixed(2)},${yLine.toFixed(2)}`);
          }
          currentX += itemStep;
        }
      }

      for (let c = 0; c <= numSquaresX; c++) { 
        const xLine = gridStartX + c * squareSize;
        let currentY = gridStartY;
         if (xLine < PADDING_CONTAINER || xLine + circleSize > currentWidth - PADDING_CONTAINER) {
            if (!(numSquaresX === 0 && c === 0 && xLine >= PADDING_CONTAINER && xLine + circleSize <= currentWidth - PADDING_CONTAINER)) {
                continue;
            }
        }
        while (currentY + circleSize <= gridStartY + gridActualHeight + 0.01) { 
          if (currentY >= PADDING_CONTAINER && currentY + circleSize <= currentHeight - PADDING_CONTAINER) {
            uniquePoints.add(`${xLine.toFixed(2)},${currentY.toFixed(2)}`);
          }
          currentY += itemStep;
        }
      }

      const finalCircles: CircleData[] = Array.from(uniquePoints).map(pointStr => {
        const [x, y] = pointStr.split(',').map(parseFloat);
        return { id: `dot-${circleIdCounter++}-${x}-${y}`, x, y };
      });
      setCirclesRenderData(finalCircles);
    };
    
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      if (containerDimensions.width !== clientWidth || containerDimensions.height !== clientHeight) {
        setContainerDimensions({ width: clientWidth, height: clientHeight});
      } else {
        calculateAndSetCircles(clientWidth, clientHeight);
      }

      const resizeObserver = new ResizeObserver(entries => {
        if (!entries || entries.length === 0) return;
        const { width, height } = entries[0].contentRect;
        setContainerDimensions({ width, height }); 
      });
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [circleSize, circleSpacing, squareSize, containerDimensions.width, containerDimensions.height]);

  const targetScaleFor1px = circleSize > 0 ? 1 / circleSize : 0.1; // Calculate scale factor for 1px

  const circleVariants: Variants = {
    initial: (i: number) => ({
      opacity: 0,
      scale: 0.1,
    }),
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.5, delay: i * 0.015 + Math.random() * 0.1 },
        scale: { duration: 0.5, delay: i * 0.015 + Math.random() * 0.1, type: "spring", stiffness: 150, damping: 15 },
      },
    }),
    pulse: (i: number) => ({
      // Scale from current (1) down to targetScaleFor1px (approx 1px) and back to 1
      scale: [1, targetScaleFor1px, 1], 
      transition: {
        duration: 4 + Math.random() * 1.5,
        repeat: Infinity,
        repeatType: "loop", // "loop" is better for A -> B -> A type animations
        ease: "easeInOut",
        delay: 0.5 + i * 0.03 + Math.random() * 0.8, 
      }
    }),
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-2 ${className}`} 
      style={{
        minWidth: `${Math.min(squareSize, circleSize)}px`, 
        minHeight: `${Math.min(squareSize, circleSize)}px`,
      }}
    >
      <AnimatePresence>
        {circlesRenderData.map((coord, i) => (
          <motion.div
            key={coord.id}
            className="rounded-full"
            style={{
              position: 'absolute',
              left: `${coord.x}px`,
              top: `${coord.y}px`,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              backgroundColor: circleColor,
            }}
            custom={i}
            initial="initial"
            animate={["animate", "pulse"]}
            variants={circleVariants}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PulsingCircleGrid;   
