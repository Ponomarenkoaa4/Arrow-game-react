import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import type { IPlaygroundStepsState } from "../../../../store/types"
import type { IMapArrowCodes } from "../../../../types"
import cn from "classnames"

import slylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrow.module.css"

const RandomArrow: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (elem: IPlaygroundStepsState): string => {
    return cn(
      slylesCommon.icon,
      elem.success && elem.success !== null && styles.iconSuccess,
      !elem.success && elem.success !== null && styles.iconUnSuccess,
    )
  }
  return (
    <div className={slylesCommon.wrapper}>
      {state.steps.map((elem) => (
        <span key={elem.step} className={getStylesRandomKeys(elem)}>
          {MAP_ARROW_CODES[elem.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrow
