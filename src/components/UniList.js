import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
  cardMargin: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16
  }
};

class UniList extends React.Component {
  render() {
    const { dataList } = this.props;
    return (
      <Grid container spacing={0}>
        {dataList.map((data, key) => (
          <Grid item key={data.title} xs={12} md={3}>
            <div style={styles.cardMargin}>
              <CardActionArea>
                <Card>
                  <CardHeader title={data.title} />
                  <CardMedia
                    component="img"
                    image={data.img}
                    title={data.title}
                  />
                </Card>
              </CardActionArea>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default UniList;
