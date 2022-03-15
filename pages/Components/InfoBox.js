import { Card,CardContent,Typography } from '@material-ui/core'
import React from 'react'

import styles from "../../styles/InfoBox.module.css";

function InfoBox({title,cases,total}) {
  return (
    <Card className='infoBox'>
        <CardContent>
            {/* Title */}
            <Typography className='infoBox__title' color="textSecondary">
                {title}
            </Typography>

            <h2 className={styles.infoBox__cases}>
                {cases}
            </h2>

            <Typography className="infoBox__total" color="textSecondary">
                {total}
            </Typography>


            {/* no. of cases */}


            {/* total */}
        </CardContent>

    </Card>
  )
}

export default InfoBox