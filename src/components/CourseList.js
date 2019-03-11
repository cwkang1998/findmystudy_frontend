import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'flex',
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8
  },
  cardDetails: {
    flex: 1,
    display: 'block',
    textAlign: 'initial'
  }
};

class CourseList extends React.Component {
  render() {
    const { dataList } = this.props;
    return (
      <Grid container spacing={0}>
        {dataList.map((data, key) => (
          <Grid item key={data.title} xs={12} md={4}>
            <Card style={styles.card}>
              <ButtonBase style={styles.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {data.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {data.uni}
                  </Typography>
                </CardContent>
              </ButtonBase>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default CourseList;
