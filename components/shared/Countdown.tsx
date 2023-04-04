"use client"

import { useEffect, useReducer } from "react"

import { TypographyH3 } from "../ui/Typography/TypographyH3"
import { TypographyP } from "../ui/Typography/TypographyP"

interface State {
  Tage: number
  Stunden: number
  Minuten: number
  Sekunden: number
}

interface Action {
  type: "updateTimer"
  payload: string
}

interface CountdownProps {
  date: string
  title: string
}

const initialState = {
  Tage: 0,
  Stunden: 0,
  Minuten: 0,
  Sekunden: 0,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "updateTimer":
      const timeDifference = Date.parse(action.payload) - Date.parse(new Date().toString())
      if (timeDifference >= 0) {
        const totalSeconds = Math.floor(timeDifference / 1000)
        const Tage = Math.floor(totalSeconds / 86400)
        const Stunden = Math.floor((totalSeconds % 86400) / 3600)
        const Minuten = Math.floor((totalSeconds % 3600) / 60)
        const Sekunden = totalSeconds % 60
        return { Tage, Stunden, Minuten, Sekunden }
      }
      return state
    default:
      return state
  }
}

export const Countdown = ({ date, title }: CountdownProps) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const intervalId = setInterval(() => {
        dispatch({ type: "updateTimer", payload: date })
      }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [date])

  return (
    <div className="space-y-2">
      <TypographyH3 className="m0 lg:text-5x m-0 text-center text-2xl font-bold md:text-3xl">{title}</TypographyH3>
      <div className="grid grid-cols-4 items-center justify-center lg:flex lg:gap-4">
        {Object.keys(state).map((timeUnit) => (
          <div className="mx-[5px] flex-row items-center text-center text-slate-300 lg:w-1/4" key={timeUnit}>
            <TypographyP className="text-lg font-bold md:text-2xl lg:text-5xl">
              {state[timeUnit as keyof State]}
            </TypographyP>
            <p className="text-base md:text-lg lg:text-2xl">{timeUnit}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
