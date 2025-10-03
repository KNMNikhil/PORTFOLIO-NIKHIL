"use client"

import React from "react"
 
import { Award, Star } from "lucide-react"

import { cn } from "../../lib/utils"
import GlassSurface from './GlassSurface'

export function Awards({
  variant = "badge",
  title,
  subtitle,
  description,
  date,
  recipient,
  level = "gold",
  className,
  showIcon = true,
  logo,
}) {
  const levelColors = {
    bronze: "from-amber-600 to-amber-800",
    silver: "from-gray-400 to-gray-600",
    gold: "from-yellow-400 to-yellow-600",
    platinum: "from-slate-300 to-slate-500",
  }

  if (variant === "certificate") {
    const Badge = () => (
      <svg
        className={cn("fill-primary -mt-6 h-18 w-full overflow-hidden")}
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    )
    return (
      <GlassSurface 
        width={300} 
        height={400}
        borderRadius={24}
        className={className}
      >
        <div className="z-10 rounded-sm p-6 px-8 text-center w-full h-full flex flex-col justify-center">
          <Badge />
          <h1
            className={cn(
              "mt-4 grid text-3xl leading-7 font-bold tracking-tighter uppercase"
            )}
          >
            Certificate
            <span className="text-sm font-light tracking-tight">
              {" "}
              of {title}
            </span>
          </h1>

          <p className="text-muted-foreground mt-4 mb-1 text-xs">
            This is to certify that
          </p>
          <h1
            className={cn(
              "text-primary mb-2 border-b text-xl font-semibold tracking-tight"
            )}
          >
            {recipient}
          </h1>

          <p className="text-muted-foreground mb-1 text-xs">{subtitle}</p>
          <div className="mt-6 flex justify-center items-center gap-2">
            <Award strokeWidth={1} className="h-7 w-7" />
            {logo && (
              <img 
                src={logo} 
                alt="Company Logo" 
                className={`${
                  logo.includes('ZOHOPNG') ? 'h-7 w-16' : 
                  logo.includes('SME') ? 'h-7 w-7 rounded' : 
                  'h-7 w-7'
                }`} 
              />
            )}
          </div>
          <div className={cn("mt-2 text-xs")}>Awarded on: {date}</div>
        </div>
      </GlassSurface>
    )
  }

  return null
}