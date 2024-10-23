import { TypographyText } from "../../../../../UI"
import loader from "./img/loader.svg"

import slylesCommon from "../../RandomKeys.module.css"
import styles from "./WelcomeText.module.css"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={slylesCommon.wrapper}>
        <span className={slylesCommon.icon}>
          <img className={styles.loader} src={loader} alt="Loader" />
        </span>
      </div>
    )
  }

  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to
    </TypographyText>
  )
}

export default WelcomeText
